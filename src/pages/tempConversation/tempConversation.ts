import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
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
import {HttpClient} from "@angular/common/http";
import * as firebase from 'firebase';
import * as moment from 'moment';
import {ProfilePage} from "../profile/profile";
import {ModalContactPage} from "../modal-contact/modal-contact";


@Component({
  selector: 'page-temp-conversation',
  templateUrl: 'tempConversation.html',
})
export class TempConversationPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  msgList = [];
  editorMsg = '';
  showEmojiPicker = false;
  conversation: any;
  user: any;

  hasLoadedMessages = false;
  readBy: any = [];

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
    firebase.firestore().collection('tempConversations').doc(this.conversation.$id).onSnapshot((querySnapshot) => {
      this.conversation = querySnapshot.data();
      if (!this.conversation) {
        return;
      }
      let hasUserLanguage = false;
      this.conversation.languages.forEach(lan => {
        if (lan == this.user.language) {
          hasUserLanguage = true;
        }
      })
      if (!hasUserLanguage) {
        this.conversation.languages.push(this.user.language);//&source=${this.conversation.lastMessage.translatedFrom}
        this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${this.conversation.lastMessage.message[this.conversation.lastMessage.translatedFrom]}&format=text`)
          .toPromise()
          .then((response: any) => { // Success
            this.conversation.lastMessage.message[this.user.language] = response.data.translations[0].translatedText;
            firebase.firestore().collection('tempConversations').doc(this.conversation.$id).update(this.conversation);
          })
      }
      this.readBy = [];
      let readByKeys = Object.keys(this.conversation.readBy);
      readByKeys.forEach(key => {
        this.readBy.push(this.conversation.readBy[key]);
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversationPage');
    // translate('Ik spreek Engels', {to: 'en'}).then(res => {
    //   console.log(res.text);
    //   //=> I speak English
    //   console.log(res.from.language.iso);
    //   //=> nl
    // }).catch(err => {
    //   console.error(err);
    // });
    this.getMsg();
  }

  ionViewWillLeave() {
    firebase.firestore().collection('users').doc(this.user.$id).collection('tempConversations').doc(this.conversation.$id).delete();
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
    firebase.firestore().collection('tempConversations').doc(this.conversation.$id).collection('messages').onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          let tmpMsg = change.doc.data();
          if (!tmpMsg.message[this.user.language]) { //&source=${tmpMsg.translatedFrom}
            this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${tmpMsg.message[tmpMsg.translatedFrom]}&format=text`)
              .toPromise()
              .then((response: any) => { // Success
                  tmpMsg.message[this.user.language] = response.data.translations[0].translatedText;
                  firebase.firestore().collection('tempConversations').doc(this.conversation.$id).collection('messages').doc(change.doc.id).update(tmpMsg);
                  this.ngZone.run(() => {
                    this.msgList.push(tmpMsg);
                    setTimeout(() => {
                      this.scrollToBottom();
                    }, 200);
                  })
                },
                msg => { // Error //&source=${tmpMsg.translatedFrom}
                  this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${tmpMsg.message[tmpMsg.translatedFrom]}&format=text`).toPromise().then(
                    (response: any) => { // Success
                      tmpMsg.message[this.user.language] = response.data.translations[0].translatedText;
                      firebase.firestore().collection('tempConversations').doc(this.conversation.$id).collection('messages').doc(change.doc.id).update(tmpMsg);
                      this.ngZone.run(() => {
                        this.msgList.push(tmpMsg);
                        setTimeout(() => {
                          this.scrollToBottom();
                        }, 200);
                      })
                    },msg => {})
                });
          } else {
            this.ngZone.run(() => {
              this.msgList.push(change.doc.data());
              setTimeout(() => {
                this.scrollToBottom();
              }, 200);
            })
          }
        }
      });
      if (!this.hasLoadedMessages) {
        this.hasLoadedMessages = true;
      }
      this.conversation.readBy[this.user.$id] = this.user.username;
      firebase.firestore().collection('tempConversations').doc(this.conversation.$id).update({readBy: this.conversation.readBy});
    });
  }

  sendMsg() {
    if (!this.editorMsg.trim()) return;
    this.editorMsg = this.editorMsg.replace('↵', '');
    let conversation = this.navParams.get('conversation');
    let message = firebase.firestore().collection('tempConversations').doc(conversation.$id).collection('messages').doc();
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
      // if (language !== this.user.language) {
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
                    },msg => {})
              }
            );
        });
        promises.push(promise);
      // }
    });

    let tokens = [];

    this.conversation.users.forEach(user => {
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
    });
    newMessage.message[this.user.language] = this.editorMsg;

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
      firebase.firestore().collection('tempConversations').doc(conversation.$id).collection('messages').doc(newMessage.$id).set(newMessage);
      firebase.firestore().collection('tempConversations').doc(conversation.$id).update({
        lastMessage: newMessage,
        readBy: readBy,
        lastUpdated: Date.now()
      });
      let apiURL = 'https://us-central1-letstalk-205602.cloudfunctions.net/sendMessage';

      this.http.post(apiURL, {
        // conversation: this.conversation,
        // message: newMessage,
        // readBy: readBy,
        tokens: tokens
      }).toPromise().then((response: any) => { // Success
      }).catch((error) => {
        console.log(error)
      })
    });

    this.scrollToBottom();

    // this.pushNewMsg(newMsg);

    // this.chatService.sendMsg(newMsg)
    //   .then(() => {
    //     let index = this.getMsgIndexById(id);
    //     if (index !== -1) {
    //       this.msgList[index].status = 'success';
    //     }
    //   })
  }

  
  pushNewMsg(msg) {
    // const userId = this.user.id,
    //   toUserId = this.toUser.id;
    // // Verify user relationships
    // if (msg.userId === userId && msg.toUserId === toUserId) {
    //   let translationSub = this.http.post(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&source=en&target=af&q=${msg.message}`, {}).subscribe((response: any) => {
    //     console.log(response)
    //     msg.message = response.data.translations[0].translatedText;
    //     this.msgList.push(msg);
    //     translationSub.unsubscribe();
    //   });
    // } else if (msg.toUserId === userId && msg.userId === toUserId) {
    //   this.msgList.push(msg);
    // }
    // this.scrollToBottom();
  }

  addByUsername(fab: FabContainer) {
    fab.close();
    let alert = this.alertCtrl.create({
      title: 'Start a conversation',
      inputs: [
        {
          name: 'username',
          placeholder: 'Enter Username'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: (data) => {
            if (!data.username) {
              return;
            }
            if (data.username == this.user.username) {
              let toast = this.toastCtrl.create({
                message: 'You cannot invite yourself.',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              return;
            }
            firebase.firestore().collection('users').where('username', '==', data.username.toLowerCase()).get().then((profiles: any) => {
              if (!profiles.docs.length) {
                let toast = this.toastCtrl.create({
                  message: 'User not found.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
              }
              profiles.forEach(profile => {
                if (!profile.data()) {
                  let toast = this.toastCtrl.create({
                    message: 'User not found.',
                    duration: 3000,
                    position: 'bottom'
                  });
                  toast.present();
                } else {
                  this.addUser(profile.data());
                }
              })
            })
          }
        }
      ]
    });
    alert.present();
  }

  addByContacts(fab: FabContainer) {
    fab.close();
    let myModal = this.modalCtrl.create(ModalContactPage);
    myModal.onDidDismiss(data => {
      if (data) {
        if (data == this.user.phone) {
          let toast = this.toastCtrl.create({
            message: 'You cannot start a chat with yourself.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          return;
        }
        let loading = this.loadingCtrl.create({
          content: 'Searching for user...'
        });
        loading.present();
        let results = [];
        let promises = [
          new Promise((resolve, reject) => {
            firebase.firestore().collection('users').where('fullPhone', '==', ('+' + data)).get().then((profiles: any) => {
              profiles.forEach(profile => {
                results.push(profile);
              })
              resolve();
            })
          }),
          new Promise((resolve, reject) => {
            firebase.firestore().collection('users').where('phone', '==', data).get().then((profiles: any) => {
              profiles.forEach(profile => {
                results.push(profile);
              })
              resolve();
            })
          })
        ]
        Promise.all(promises).then(values => {
          loading.dismiss();
          if (!results.length) {
            let toast = this.toastCtrl.create({
              message: 'User not found.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            return;
          }
          results.forEach(profile => {
            if (!profile.data()) {
              let toast = this.toastCtrl.create({
                message: 'User not found.',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
            } else if (profile.data().username == this.user.username) {
              let toast = this.toastCtrl.create({
                message: 'You cannot start a chat with yourself.',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              return;
            } else {
              this.addUser(profile.data());
            }
          })
        })
      }
    });
    myModal.present();
  }

  addUser(user) {
    firebase.firestore().collection('users').doc(this.user.$id).collection('tempConversations').doc(this.conversation.$id).set({
      chatId: this.conversation.$id
    });
    this.conversation.users.push({
      $id: user.$id,
      language: user.language,
      username: user.username,
      firstName: user.firstName || '',
      lastName: user.lastName || ''
    });
    let hasLanguage = false;
    this.conversation.languages.forEach(language => {
      if (language == user.language) {
        hasLanguage = true;
      }
    });
    if (!hasLanguage) {
      this.conversation.languages.push(user.language);
    }
    firebase.firestore().collection('tempConversations').doc(this.conversation.$id).update(this.conversation);
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
    if(this.content._scroll) this.content.scrollToBottom();
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
