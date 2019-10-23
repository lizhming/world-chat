import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import {
  AlertController,
  FabContainer,
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { Events, Content } from 'ionic-angular';
import { ChatService, UserInfo } from "../../providers/chat-service";
import { HttpClient } from "@angular/common/http";
import * as firebase from 'firebase';
import * as moment from 'moment';
import { ProfilePage } from "../profile/profile";

@Component({
  selector: 'twilio-conversation',
  templateUrl: 'twilioConversation.html',
})
export class TwilioConversationPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  msgList = [];
  editorMsg = '';
  showEmojiPicker = false;
  conversation: any;
  user: any;

  hasLoadedMessages = false;
  readBy: any = [];
  loadingStopped = true;
  loading: any;
  hasScrolled = false;
  avoidDuplicateAfterSending = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private chatService: ChatService,
    private events: Events,
    public http: HttpClient,
    public ngZone: NgZone,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {
    // this.toUser = {
    //   id: navParams.get('toUserId'),
    //   name: navParams.get('toUserName')
    // };

    // Get mock user information
    this.user = JSON.parse(localStorage.getItem('user'));
    this.conversation = this.navParams.get('conversation');
    firebase.firestore().collection('twilioConversations').doc(this.conversation.$id).onSnapshot((querySnapshot) => {
      this.conversation = querySnapshot.data();
      if (!this.conversation) {
        return;
      }
      let hasUserLanguage = false;
      this.conversation.languages.forEach(lan => {
        if (lan == this.user.language) {
          hasUserLanguage = true;
        }
      });
      if (!hasUserLanguage) {
        this.conversation.languages.push(this.user.language);//&source=${this.conversation.lastMessage.translatedFrom}
        this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${this.conversation.lastMessage.message[this.conversation.lastMessage.translatedFrom]}&format=text`)
          .toPromise()
          .then((response: any) => { // Success
            this.conversation.lastMessage.message[this.user.language] = response.data.translations[0].translatedText;
            firebase.firestore().collection('twilioConversations').doc(this.conversation.$id).update(this.conversation);
          })
      }
      this.readBy = [];
      let readByKeys = Object.keys(this.conversation.readBy);
      readByKeys.forEach(key => {
        this.readBy.push(this.conversation.readBy[key]);
      })
    });

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ConversationPage');
    this.getMsg();
  }

  ionViewWillLeave() {
    //firebase.firestore().collection('users').doc(this.user.$id).collection('tempConversations').doc(this.conversation.$id).delete();
  }

  ionViewDidEnter() {

  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }


  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  getMsg() {
    setTimeout(() => {
    }, 3000)
    if (this.loadingStopped) {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      this.loading.present();
      this.loadingStopped = false;
    }
    firebase.firestore().collection('twilioConversations').doc(this.conversation.$id).collection('messages').orderBy("time", "desc").limit(25).onSnapshot((querySnapshot) => {
      if (!this.loadingStopped) {
        this.msgList = [];
      }
      setTimeout(() => {
        if (!this.loadingStopped) {
          this.loading.dismiss();
          this.loadingStopped = true;
          this.hasScrolled = true;
        }
      }, 200)

      let objlstmsgrev = querySnapshot.docChanges().reverse();
      objlstmsgrev.forEach((change, index) => {
        if (change.type === "added") {
          let tmpMsg = change.doc.data();
          if (!tmpMsg.message[this.user.language] && !tmpMsg.mediaUrl) {//&source=${tmpMsg.translatedFrom}
            this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${tmpMsg.message[tmpMsg.translatedFrom]}&format=text`)
              .toPromise()
              .then((response: any) => { // Success
                tmpMsg.message[this.user.language] = response.data.translations[0].translatedText;
                firebase.firestore().collection('conversations').doc(this.conversation.$id).collection('messages').doc(change.doc.id).update(tmpMsg);
                this.ngZone.run(() => {
                  if (!this.avoidDuplicateAfterSending[tmpMsg.$id]) {
                    this.msgList.unshift(tmpMsg);
                  }
                  setTimeout(() => {
                    this.scrollToBottom();
                  }, 600);
                })
              },
                msg => { // Error //&source=${tmpMsg.translatedFrom}
                  alert('Check Internet Connection')
                });
          } else {
            this.ngZone.run(() => {
              this.avoidDuplicateAfterSending[change.doc.data().$id] = true;
              this.msgList.push(change.doc.data());
              setTimeout(() => {
                this.scrollToBottom();
              }, 600)
            })
          }
        }
      });
      if (!this.hasLoadedMessages) {
        this.hasLoadedMessages = true;
      }

      setTimeout(() => {
        this.ngZone.run(() => {
          this.conversation.readBy[this.user.$id] = this.user.username;
          firebase.firestore().collection('twilioConversations').doc(this.conversation.$id).update({ readBy: this.conversation.readBy });
          //this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        });
      }, 700);

    });
  }

  sendMsg() {
    if (!this.editorMsg.trim()) return;
    this.editorMsg = this.editorMsg.replace('↵', '');
    let conversation = this.navParams.get('conversation');
    let message = firebase.firestore().collection('twilioConversations').doc(conversation.$id).collection('messages').doc();
    let newMessage = {
      $id: message.id,
      sentBy: this.user.$id,
      username: this.user.username,
      firstName: this.user.firstName || '',
      lastName: this.user.lastName || '',
      translatedFrom: this.user.language,
      thumb: this.user.thumb || '',
      time: Date.now(),
      message: {}
    };

    let promises = [];

    this.conversation.languages.forEach(language => {
      // newMessage.message[this.user.language]
      if (language != null && language != undefined && language != '') {
        let promise = new Promise((resolve, reject) => {//&source=${this.user.language}
          let apiURL = `https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${language}&q=${this.editorMsg}&format=text`;
          this.http.get(apiURL)
            .toPromise()
            .then(
              (response: any) => { // Success
                newMessage.message[language] = response.data.translations[0].translatedText;
                resolve();
              },
              msg => { // Error
                this.http.get(apiURL).toPromise().then(
                  (response: any) => { // Success
                    newMessage.message[language] = response.data.translations[0].translatedText;
                    resolve();
                  }, msg => { })
              }
            );
        });
        promises.push(promise);
      }
    });

    let tokens = [];

    this.conversation.users.forEach(user => {
      if (user.$id != null && user.$id != '' && user.$id != undefined) {
        if (user.$id === this.user.$id) return;
        let promise = new Promise((resolve, reject) => {
          firebase.firestore().collection('users').doc(user.$id).get().then(token => {
            if (token.data().token) {
              tokens.push({ token: token.data().token, language: user.language, name: (this.user.firstName + ' (' + this.user.username + ')') });
            }
            resolve();
          }).catch(() => {
            resolve();
          });
        });
        promises.push(promise);
      }
    });
    newMessage.message[this.user.language] = this.editorMsg;

    const objSendTextSMS = {
      $id: '',
      message: '',
      toPhoneno: ''
    };
    objSendTextSMS.message = this.editorMsg;

    this.editorMsg = '';
    if (!this.showEmojiPicker) {
      this.focus();
    }

    let readBy = {}
    if (this.conversation.readBy) {
      let usersRead = Object.keys(this.conversation.readBy)
      usersRead.forEach(userId => {
        readBy[userId] = '';
      })
    }
    readBy[this.user.$id] = this.user.username;
    this.conversation.readBy = readBy;

    Promise.all(promises).then(values => {
      // newMessage.time = moment.utc().format('YYYY-MM-DD HH:mm:ss')
      firebase.firestore().collection('twilioConversations').doc(conversation.$id).collection('messages').doc(newMessage.$id).set(newMessage);
      firebase.firestore().collection('twilioConversations').doc(conversation.$id).update({
        lastMessage: newMessage,
        readBy: readBy,
        lastUpdated: Date.now()
      });

      this.conversation.users.forEach(user => {
        if (user.$id != null && user.$id != undefined && user.$id != '') {
          objSendTextSMS.$id = user.$id;
        }
        else
          objSendTextSMS.toPhoneno = user.phoneno;
      });

      let apiURL = 'https://us-central1-letstalk-205602.cloudfunctions.net/sendTextSMS';
      this.http.post(apiURL, objSendTextSMS).toPromise().then((response: any) => { // Success
        console.log(response);
      }).catch((error) => {
        console.log(error)
      })
    });

    this.scrollToBottom();

  }

  getMsgIndexById(id: string) {
    return this.msgList.findIndex(e => e.messageId === id)
  }

  viewProfile(user) {
    this.navCtrl.push(ProfilePage, {
      profile: user
    })
  }

  scrollToBottom() {
    if (this.content._scroll) this.content.scrollToBottom();
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea = this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }

  expandMessage(msg, i) {
    if (!msg.expanded) msg.expanded = false;
    this.msgList[i].expanded = !msg.expanded;
  }

}
