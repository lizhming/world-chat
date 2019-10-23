import { Component, ElementRef, Input, NgZone, SimpleChanges, ViewChild } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  FabContainer,
  LoadingController,
  ModalController,
  NavController,
  NavParams, Platform,
  ToastController,
  Events, Content
} from 'ionic-angular';
// import { ChatService, UserInfo } from "../../providers/chat-service";
import { HttpClient } from "@angular/common/http";
import * as firebase from 'firebase';
// import * as moment from 'moment';
import { ProfilePage } from "../profile/profile";
import { ModalContactPage } from "../modal-contact/modal-contact";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Clipboard } from "@ionic-native/clipboard";


@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  msgList = [];
  editorMsg = '';
  showEmojiPicker = false;
  @Input() conversation: any;
  user: any;

  hasLoadedMessages = false;
  readBy: any = [];
  typing = false;
  objectKeys = Object.keys;
  link: any = 'www.google.com';

  info = {
    title: '',
    description: '',
    icon: '',
    site: '',
  }

  urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  lastInputScrollHeight = 0;
  isBrowser = false;
  loading: any;
  loadingStopped = true;
  profile: any;
  hasScrolled = false;
  firebaseSubs: any = [];

  lastVisible: any;
  lastMessageSent: any = {
    $id: ''
  }
  avoidDuplicateAfterSending = {};
  loadingMore = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private chatService: ChatService,
    // private events: Events,
    public http: HttpClient,
    public ngZone: NgZone,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private clipboard: Clipboard
  ) {
    this.profile = JSON.parse(localStorage.getItem('user'));
    this.ngZone.run(() => {
      this.firebaseSubs.forEach((sub) => {
        sub();
      })
    })
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes && changes.conversation) {
      this.ngZone.run(() => {
        this.firebaseSubs.forEach((sub) => {
          sub();
        })
        this.conversation = changes.conversation.currentValue;
        this.ngOnInit();
      })
    }

  }

  ngOnInit() {
    this.hasScrolled = false;
    this.isBrowser = (this.platform.is('core') || this.platform.is('mobileweb'));
    // this.toUser = {
    //   id: navParams.get('toUserId'),
    //   name: navParams.get('toUserName')
    // };

    // Get mock user information
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.navParams.get('conversation')) {
      this.conversation = this.navParams.get('conversation');
    }
    if (!this.conversation) {
      return;
    }
    this.getMsg();
    let users = this.conversation.users;
    this.firebaseSubs.push(firebase.firestore().collection('conversations').doc(this.conversation.$id).onSnapshot((querySnapshot) => {
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
      this.conversation.users.forEach(user => {
        users.forEach((userData, i) => {
          if (userData.$id === user.$id) {
            this.conversation.users[i].firstName = userData.firstName || '';
            this.conversation.users[i].lastName = userData.lastName || '';
            this.conversation.users[i].thumb = userData.thumb || '';
          }
        })
      })
      if (!hasUserLanguage) {
        this.conversation.languages.push(this.user.language);//&source=${this.conversation.lastMessage.translatedFrom}
        this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${this.conversation.lastMessage.message[this.conversation.lastMessage.translatedFrom]}&format=text`)
          .toPromise()
          .then((response: any) => { // Success
            this.conversation.lastMessage.message[this.user.language] = response.data.translations[0].translatedText;
            firebase.firestore().collection('conversations').doc(this.conversation.$id).update(this.conversation);
          })
      }
      this.readBy = [];
      let readByKeys = Object.keys(this.conversation.readBy);
      readByKeys.forEach(key => {
        this.readBy.push(this.conversation.readBy[key]);
      })
    }))

    let objDiv;
    if (JSON.parse(localStorage.getItem('isBrowser'))) {
      objDiv = document.getElementsByClassName('scroll-content')[1];
      if (!objDiv) return;
      objDiv.scrollTop = objDiv.scrollHeight;

      objDiv.onscroll = () => {
        if (objDiv.scrollTop && objDiv.scrollTop < 100 && !this.loadingMore) {
          this.loadingMore = true;
          this.getNextSetOfMessages(objDiv);
        }
      }
    } else if (this.content._scroll) {
      objDiv = document.getElementsByClassName('scroll-content')[0];
      if (!objDiv) return;
      objDiv.scrollTop = objDiv.scrollHeight;
      // this.content.scrollToBottom();
    }
  }

  didScroll(e) {
    if (JSON.parse(localStorage.getItem('isBrowser'))) return;
    if (e && e.scrollTop && parseInt(e.scrollTop) < 100 && !this.loadingMore) {
      this.loadingMore = true;
      let objDiv = document.getElementsByClassName('scroll-content')[0];
      this.getNextSetOfMessages(objDiv);
    }
  }

  lastInputTextLength = 0;
  resizeView() {
    document.getElementById('message-entry').style.height = document.getElementById('message-entry').scrollHeight + 'px';
    const scrollBottom = document.getElementById('message-entry').scrollHeight - 35 > 65 ? 65 : document.getElementById('message-entry').scrollHeight - 35;
    (<any>document.getElementsByClassName('message-wrap')[0]).style.marginBottom = scrollBottom + 'px';
    this.scrollToBottom();
    this.lastInputScrollHeight = document.getElementById('message-entry').scrollHeight;
  }

  resetView() {
    document.getElementById('message-entry').style.height = 'auto';
    (<any>document.getElementsByClassName('message-wrap')[0]).style.marginBottom = '0px';
    this.lastInputScrollHeight = document.getElementById('message-entry').scrollHeight;
  }

  isTyping(e) {
    let hadToSizeDown = false;
    if (this.editorMsg.length < this.lastInputTextLength) {
      if (!JSON.parse(localStorage.getItem('isBrowser'))) {
        document.getElementById('message-entry').style.height = 'auto';
        hadToSizeDown = true;
      }
    }
    this.lastInputTextLength = this.editorMsg.length;
    if (hadToSizeDown || document.getElementById('message-entry').scrollHeight !== this.lastInputScrollHeight) {
      if (!JSON.parse(localStorage.getItem('isBrowser'))) {
        this.resizeView();
      }
    }
    if (!this.conversation.typing) {
      this.conversation.typing = {};
    }
    if (!this.typing) {
      this.conversation.typing[this.user.$id] = true;
      firebase.firestore().collection('conversations').doc(this.conversation.$id).update(this.conversation);
    }
    this.typing = true;
    setTimeout(() => {
      this.typing = false;
      setTimeout(() => {
        if (!this.typing) {
          this.conversation.typing[this.user.$id] = false;
          firebase.firestore().collection('conversations').doc(this.conversation.$id).update(this.conversation);
        }
      }, 200);
    }, 1000);
  }

  copyText(text) {
    if (JSON.parse(localStorage.getItem('isBrowser'))) {
      var content: any = document.getElementById('copy-container');
      content.value = text;
      content.select();
      document.execCommand("copy");
    } else {
      this.clipboard.copy(text);
    }
    let toast = this.toastCtrl.create({
      message: 'Copied to clipboard!',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  ionViewDidLoad() {
    // translate('Ik spreek Engels', {to: 'en'}).then(res => {
    //   console.log(res.text);
    //   //=> I speak English
    //   console.log(res.from.language.iso);
    //   //=> nl
    // }).catch(err => {
    //   console.error(err);
    // });
  }

  ionViewWillLeave() {
    this.firebaseSubs.forEach((sub) => {
      sub();
    })
  }

  ionViewDidEnter() {
    // setTimeout(() => {
    //   this.showPreview()
    // }, 3000)
  }

  onFocus() {
    if (!JSON.parse(localStorage.getItem('isBrowser'))) {
      this.showEmojiPicker = false;
      this.content.resize();
      this.scrollToBottom();
    }
  }


  switchEmojiPicker() {
    if (!JSON.parse(localStorage.getItem('isBrowser'))) {
      this.showEmojiPicker = !this.showEmojiPicker;
      if (!this.showEmojiPicker) {
        this.focus();
      } else {
        this.setTextareaScroll();
      }
      this.content.resize();
      this.scrollToBottom();
    }
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
    this.firebaseSubs.push(firebase.firestore().collection('conversations').doc(this.conversation.$id).collection('messages').orderBy("time", "desc").limit(25).onSnapshot((querySnapshot) => {
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
                  //   this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${tmpMsg.message[tmpMsg.translatedFrom]}&format=text`).toPromise().then(
                  //     (response: any) => { // Success
                  //       tmpMsg.message[this.user.language] = response.data.translations[0].translatedText;
                  //       firebase.firestore().collection('conversations').doc(this.conversation.$id).collection('messages').doc(change.doc.id).update(tmpMsg);
                  //       this.ngZone.run(() => {
                  //         this.msgList.push(tmpMsg);
                  //         setTimeout(() => {
                  //           this.scrollToBottom();
                  //         }, 200);
                  //         setTimeout(() => {
                  //           this.scrollToBottom();
                  //         }, 400);
                  //       })
                  //     },msg => {})
                });
          } else {
            this.ngZone.run(() => {
              // if (change.doc.data().$id == this.lastMessageSent.$id && !this.avoidDuplicateAfterSending[change.doc.data().$id]) {
              //   this.avoidDuplicateAfterSending[change.doc.data().$id] = true;
              //   this.msgList.push(change.doc.data());
              // } else if (!this.avoidDuplicateAfterSending[change.doc.data().$id]) {
              //   //this.msgList.unshift(change.doc.data());
              //   this.msgList.push(change.doc.data());
              // }
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
          console.log("---------------------------");
          this.conversation.readBy[this.user.$id] = this.user.username;
          firebase.firestore().collection('conversations').doc(this.conversation.$id).update({ readBy: this.conversation.readBy });
          this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        });
      }, 700);

      // this.conversation.readBy[this.user.$id] = this.user.username;
      // firebase.firestore().collection('conversations').doc(this.conversation.$id).update({ readBy: this.conversation.readBy });
      // this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    }));
  }

  getNextSetOfMessages(el?) {
    let localHasScrolled = false;
    if (!this.conversation || !this.conversation.$id || !this.lastVisible) return;
    firebase.firestore().collection('conversations').doc(this.conversation.$id).collection('messages').orderBy("time", "desc").startAfter(this.lastVisible).limit(25).get().then((querySnapshot) => {
      this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]
      this.loadingMore = false;
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          if (el && !localHasScrolled) {
            localHasScrolled = true;
            el.scrollTop = 5;
          }
          this.msgList.unshift(change.doc.data());
        }
      })
    })
  }

  openLink(url) {
    window.open(url);
  }

  linkify(text) {
    let returnVal = null;
    text.replace(this.urlRegex, function (url) {
      returnVal = url;
    });
    return returnVal;
  }

  async sendMsg(downloadUrl = null) {
    if (!downloadUrl && !this.editorMsg.trim()) return;
    if (this.editorMsg.trim()) {
      this.editorMsg = this.editorMsg.replace('↵', '');
    }
    let meta = {
      link: null
    };
    if (this.linkify(this.editorMsg)) {
      meta.link = await this.loadLinkPreview(this.linkify(this.editorMsg))
    }
    let conversation = this.conversation;
    let message = firebase.firestore().collection('conversations').doc(conversation.$id).collection('messages').doc();
    let newMessage = {
      $id: message.id,
      sentBy: this.user.$id,
      username: this.user.username,
      firstName: this.user.firstName || '',
      lastName: this.user.lastName || '',
      translatedFrom: this.user.language,
      thumb: this.user.thumb || '',
      time: Date.now(),
      type: downloadUrl ? 'image' : 'text',
      mediaUrl: downloadUrl,
      message: {},
      meta: meta
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
                }, msg => {
                })
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
    newMessage.message[this.user.language] = this.editorMsg || '';

    this.editorMsg = '';
    if (!JSON.parse(localStorage.getItem('isBrowser'))) {
      this.resetView();
    }
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
      firebase.firestore().collection('conversations').doc(conversation.$id).collection('messages').doc(newMessage.$id).set(newMessage);
      firebase.firestore().collection('conversations').doc(conversation.$id).update({
        lastMessage: newMessage,
        readBy: readBy
      });
      this.lastMessageSent = newMessage;
      let apiURL = 'https://us-central1-letstalk-205602.cloudfunctions.net/sendMessage';

      this.http.post(apiURL, {
        // conversation: this.conversation,
        message: newMessage,
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
    firebase.firestore().collection('users').doc(this.user.$id).collection('conversations').doc(this.conversation.$id).set({
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
    firebase.firestore().collection('conversations').doc(this.conversation.$id).update(this.conversation);
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
    let objDiv;
    if (JSON.parse(localStorage.getItem('isBrowser'))) {
      objDiv = document.getElementsByClassName('scroll-content')[1];
      if (!objDiv) return;
      objDiv.scrollTop = objDiv.scrollHeight;
    } else if (this.content && this.content.scrollToBottom) {
      // objDiv = document.getElementsByClassName('scroll-content')[0];
      // if (!objDiv) return;
      // objDiv.scrollTop = objDiv.scrollHeight;
      this.content.scrollToBottom();
    }
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

  takePhoto(sourceType: number) {
    var self = this;
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      let loading = this.loadingCtrl.create({
        content: 'Sending Image...'
      });
      loading.present();
      // this.base64Image = 'data:image/jpeg;base64,' + imageData;
      let timestamp = Date.now();
      if (!this.conversation.media) this.conversation.media = [];
      firebase.storage().ref('conversations').child(this.conversation.$id).child(timestamp + '.jpg')
        .putString(imageData, 'base64').then((snapshot) => {
          firebase.storage().ref('conversations').child(this.conversation.$id).child(timestamp + '.jpg').getDownloadURL().then((downloadURL) => {
            loading.dismiss();
            this.sendMsg(downloadURL);
            this.conversation.media.push({
              downloadUrl: downloadURL,
              fileName: timestamp + '.jpg'
            })
            firebase.firestore().collection('conversations').doc(this.conversation.$id).update(this.conversation);
          }).catch((e) => {
            loading.dismiss();
            firebase.firestore().collection('testing').add({ downloadUrlPictureError: e });
            alert('error');
          })
        }).catch((e) => {
          loading.dismiss();
          firebase.firestore().collection('testing').add({ savePictureError: e });
          alert('error');
        })
    }, (err) => {
      // Handle error
      firebase.firestore().collection('testing').add({ getPictureError: err });
      alert('error');
    });
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Take Photo',
          //role: 'destructive',
          handler: () => {
            this.takePhoto(1);
          }
        },
        {
          text: 'Add Photo',
          handler: () => {
            this.takePhoto(0);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }


  async loadLinkPreview(url) {
    let urlEncoded;
    urlEncoded = encodeURIComponent(url);

    let requestUrl = "https://opengraph.io/api/1.0/site/" + urlEncoded;
    let apiKey = '5b85babfd90988b55a3f7034';
    // If the apiKey is set then we build the URL like this!
    if (apiKey) {
      requestUrl = "https://opengraph.io/api/1.0/site/" + urlEncoded + '?app_id=' + apiKey;
    }
    let returnVal = {
      title: '',
      description: '',
      icon: '',
      site: url,
      rawUrl: url
    }
    await new Promise(resolve => {
      var request = new XMLHttpRequest();
      request.open('GET', requestUrl, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = JSON.parse(request.responseText);
          if (!data || !data.hybridGraph) {
            resolve();
          };
          returnVal.title = data.hybridGraph.title;
          returnVal.description = data.hybridGraph.description;
          returnVal.icon = data.hybridGraph.image;
          returnVal.site = data.hybridGraph.site_name;
        } else {
          // We reached our target server, but it returned an error

        }
        resolve()
      };

      request.onerror = function () {
        // There was a connection error of some sort
      };

      request.send();
    });
    return returnVal;
  }

  expandMessage(msg, i) {
    if (!msg.expanded) msg.expanded = false;
    this.msgList[i].expanded = !msg.expanded;
  }

}
