import { Component, NgZone, ViewChild } from '@angular/core';
import { AlertController, LoadingController, NavController, Platform, ToastController, Content } from 'ionic-angular';
import { ConversationPage } from "../conversation/conversation";
import { ModalController, FabContainer } from 'ionic-angular';
import { ModalContactPage } from '../../pages/modal-contact/modal-contact';
import * as firebase from 'firebase';
import { StartGroupChatPage } from "../start-group-chat/start-group-chat";
// import { SMS } from '@ionic-native/sms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TempConversationPage } from "../tempConversation/tempConversation";
import { TwilioConversationPage } from "../twilioConversation/twilioConversation";
import { ProfilePage } from "../profile/profile";

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {

  searchQuery: string = '';
  chats: any = [];
  user: any;

  hasLoadedChats = false;
  isBrowser = false;
  isWorldChatPremiumAccount = false;
  selectedConversation: any;

  @ViewChild(Content) content: Content;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    // private sms: SMS,
    private barcodeScanner: BarcodeScanner,
    private ngZone: NgZone,
    public platform: Platform
  ) {

    this.isBrowser = JSON.parse(localStorage.getItem('isBrowser'));

    this.ngZone.run(() => {
      this.user = JSON.parse(localStorage.getItem('user'));
      if (this.user.status == "active") {
        this.isWorldChatPremiumAccount = true;
      }
    });
    // this.initializeItems();

  }

  ionViewWillEnter() {
    this.ngZone.run(() => {
      this.user = JSON.parse(localStorage.getItem('user'));
    })
    setTimeout(() => {
      let objDiv;
      if (JSON.parse(localStorage.getItem('isBrowser'))) {
        objDiv = document.getElementsByClassName('scroll-content')[0];
        if (!objDiv) return;
        objDiv.scrollTop = objDiv.scrollHeight;
      } else if (this.content && this.content.scrollToBottom) {
        // objDiv = document.getElementsByClassName('scroll-content')[0];
        // if (!objDiv) return;
        // objDiv.scrollTop = objDiv.scrollHeight;
        this.content.scrollToTop();
      }
    }, 200)
  }

  ionViewDidLoad() {
    this.initializeItems();
  }

  initializeItems() {
    let isFirstTime = true;
    let loading = this.loadingCtrl.create({
      content: 'Gathering messages..'
    });
    loading.present();
    firebase.firestore().collection('users').doc(this.user.$id).collection('conversations').onSnapshot(conversations => {
      this.initializeTwillioItems();
      conversations.docChanges().forEach((change) => {
        if (change.type === "added") {
          firebase.firestore().collection('conversations').doc(change.doc.data().chatId).onSnapshot((newChat: any) => {
            let isInChat = false;
            this.chats.forEach((chat, i) => {
              if (chat && newChat.data() && chat.$id === newChat.data().$id) {
                isInChat = true;
                this.chats.splice(i, 1);
                this.addToChats(newChat.data());
              }
            })
            if (!isInChat) {
              this.addToChats(newChat.data());
              if (!this.hasLoadedChats) {
                this.hasLoadedChats = true;
              }
            }
          })
        }
        if (change.type === "modified") {
          // firebase.firestore().collection('conversations').doc(change.doc.data().chatId).get().then((newChat: any) => {
          //   this.chats.forEach((chat, i) => {
          //     if (chat.$id === change.doc.data().chatId) {
          //       this.chats[i] = newChat;
          //     }
          //   })
          // });
        }
        if (change.type === "removed") {
          this.chats.forEach((chat, i) => {
            if (chat && change.doc.data() && chat.$id === change.doc.data().chatId) {
              this.chats.splice(i, 1);
            }
          })
        }
      });
      if (isFirstTime) {
        isFirstTime = false;
        loading.dismiss();
      }
    });

  }

  initializeTwillioItems() {
    firebase.firestore().collection('users').doc(this.user.$id).collection('twilioConversations').onSnapshot(conversations => {
      conversations.docChanges().forEach((change) => {
        if (change.type === "added") {
          firebase.firestore().collection('twilioConversations').doc(change.doc.data().chatId).onSnapshot((newChat: any) => {
            let isInChat = false;
            this.chats.forEach((chat, i) => {
              if (chat && newChat.data() && chat.$id === newChat.data().$id) {
                isInChat = true;
                this.chats.splice(i, 1);
                this.addToTwillioChats(newChat.data());
              }
            })
            if (!isInChat) {
              this.addToTwillioChats(newChat.data());
              if (!this.hasLoadedChats) {
                this.hasLoadedChats = true;
              }
            }
          })
        }
        if (change.type === "modified") {
          // firebase.firestore().collection('conversations').doc(change.doc.data().chatId).get().then((newChat: any) => {
          //   this.chats.forEach((chat, i) => {
          //     if (chat.$id === change.doc.data().chatId) {
          //       this.chats[i] = newChat;
          //     }
          //   })
          // });
        }
        if (change.type === "removed") {
          this.chats.forEach((chat, i) => {
            if (chat && change.doc.data() && chat.$id === change.doc.data().chatId) {
              this.chats.splice(i, 1);
            }
          })
        }
      });
    });

  }

  async addToChats(chat) {
    if (!chat) return;
    let userData;
    if (chat && chat.users) {
      chat.users.forEach(async (user, i) => {
        userData = await firebase.firestore().collection('users').doc(user.$id).get();
        chat.users[i].firstName = userData.data().firstName || null;
        chat.users[i].lastName = userData.data().lastName || null;
        chat.users[i].thumb = userData.data().thumb || '';
      })
    }
    this.ngZone.run(() => {
      this.chats.unshift(chat);
      this.chats = this.chats.sort((a, b) => {
        if (!a.lastMessage) {
          a.lastMessage = {
            time: Date.now(),
          }
        }
        if (!b.lastMessage) {
          b.lastMessage = {
            time: Date.now(),
          }
        }
        return b.lastMessage.time - a.lastMessage.time;
      });
    })
  }

  async addToTwillioChats(chat) {
    if (!chat) return;
    if (chat && chat.users) {
      chat.users.forEach(async (user, i) => {
        if (user.phoneno != this.user.twilio_phone_number) {
          chat.users[i].firstName = '';
          chat.users[i].lastName = '';
          chat.users[i].thumb = '';
          chat.users[i].twillioChat = true;
        }
      })
    }
    this.ngZone.run(() => {
      this.chats.unshift(chat);
      this.chats = this.chats.sort((a, b) => {
        if (!a.lastMessage) {
          a.lastMessage = {
            time: Date.now(),
          }
        }
        if (!b.lastMessage) {
          b.lastMessage = {
            time: Date.now(),
          }
        }
        return b.lastMessage.time - a.lastMessage.time;
      });
    })
  }

  isEquivalent(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  }

  // getItems(ev: any) {
  //
  //   this.initializeItems();
  //   const val = ev.target.value;
  //
  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.chats = this.chats.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

  newConversation(user) {
    let doc = firebase.firestore().collection('conversations').doc();
    firebase.firestore().collection('users').doc(this.user.$id).collection('conversations').doc(doc.id).set({
      chatId: doc.id
    })
    firebase.firestore().collection('users').doc(user.$id).collection('conversations').doc(doc.id).set({
      chatId: doc.id
    })
    let convo = {
      $id: doc.id,
      users: [{
        $id: this.user.$id,
        username: this.user.username,
        firstName: this.user.firstName || '',
        lastName: this.user.lastName || '',
        language: this.user.language
      }, {
        $id: user.$id,
        username: user.username,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        language: user.language
      }],
      languages: [this.user.language, user.language],
      readBy: {}
    }
    convo.readBy[this.user.$id] = this.user.username;
    firebase.firestore().collection('conversations').doc(doc.id).set(convo);
    this.viewConversation(convo)
  }

  viewConversation(convo, isTemp = false) {
    this.selectedConversation = null;
    if (this.isBrowser) {
      this.selectedConversation = convo;
    } else {
      if (!convo.users[1].twillioChat) {
        this.navCtrl.push(isTemp ? TempConversationPage : ConversationPage, {
          conversation: convo,
        });
      } else {
        this.navCtrl.push(TwilioConversationPage, {
          conversation: convo
        });
      }
    }

  }

  addByGroupChat(fab: FabContainer) {
    fab.close();
    this.navCtrl.push(StartGroupChatPage);
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
            if (data.username.toLowerCase() == this.user.username) {
              let toast = this.toastCtrl.create({
                message: 'You cannot start a chat with yourself.',
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
                  this.newConversation(profile.data());
                }
              })
            })
          }
        }
      ]
    });
    alert.present();
  }

  // addByContacts(fab: FabContainer) {
  //   fab.close();
  //   let myModal = this.modalCtrl.create(ModalContactPage);
  //   myModal.onDidDismiss(data => {
  //     if (data) {
  //       if (data == this.user.phone) {
  //         let toast = this.toastCtrl.create({
  //           message: 'You cannot start a chat with yourself.',
  //           duration: 3000,
  //           position: 'bottom'
  //         });
  //         toast.present();
  //         return;
  //       }
  //       let loading = this.loadingCtrl.create({
  //         content: 'Searching for user...'
  //       });
  //       loading.present();
  //       let results = [];
  //       let promises = [
  //         new Promise((resolve, reject) => {
  //           firebase.firestore().collection('users').where('fullPhone', '==', ('+' + data)).get().then((profiles: any) => {
  //             profiles.forEach(profile => {
  //               results.push(profile);
  //             })
  //             resolve();
  //           })
  //         }),
  //         new Promise((resolve, reject) => {
  //           firebase.firestore().collection('users').where('phone', '==', data).get().then((profiles: any) => {
  //             profiles.forEach(profile => {
  //               results.push(profile);
  //             })
  //             resolve();
  //           })
  //         })
  //       ]
  //       Promise.all(promises).then(values => {
  //         loading.dismiss();
  //         if (!results.length) {
  //           this.sms.send(data.toString() + ' ', (this.user.firstName || this.user.username) + ' invited you to download World Chat! Android: https://play.google.com/store/apps/details?id=com.letschat.mobile')
  //           let toast = this.toastCtrl.create({
  //             message: 'User not found.',
  //             duration: 3000,
  //             position: 'bottom'
  //           });
  //           toast.present();
  //           return;
  //         }
  //         results.forEach(profile => {
  //           if (!profile.data()) {
  //             let toast = this.toastCtrl.create({
  //               message: 'User not found.',
  //               duration: 3000,
  //               position: 'bottom'
  //             });
  //             toast.present();
  //           } else if (profile.data().username == this.user.username) {
  //             let toast = this.toastCtrl.create({
  //               message: 'You cannot start a chat with yourself.',
  //               duration: 3000,
  //               position: 'bottom'
  //             });
  //             toast.present();
  //             return;
  //           } else {
  //             this.newConversation(profile.data());
  //           }
  //         })
  //       })
  //     }
  //   });
  //   myModal.present();
  // }

  addByContacts(fab: FabContainer) {
    fab.close();
    let myModal = this.modalCtrl.create(ModalContactPage);
    myModal.onDidDismiss(data => {
      //const data = "+15109440279";
      //alert(data);
      if (data) {
        if (data == this.user.phone) {
          // alert('You cannot start a chat with yourself.');
          // return;
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
          if (results.length > 0) {
            results.forEach(profile => {
              if (!profile.data()) {
                let toast = this.toastCtrl.create({
                  message: 'User not found.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                alert('User not found.');
              } else if (profile.data().username == this.user.username) {
                let toast = this.toastCtrl.create({
                  message: 'You cannot start a chat with yourself.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                return;
              } else {
                this.newConversation(profile.data());
              }
            });
          } else {
            this.newPhoneConversation(data);
          }

        })
      }

    });
    myModal.present();
  }

  newPhoneConversation(toPhoneNo) {
    let doc = firebase.firestore().collection('twilioConversations').doc();
    firebase.firestore().collection('users').doc(this.user.$id).collection('twilioConversations').doc(doc.id).set({
      chatId: doc.id
    })
    let convo = {
      $id: doc.id,
      users: [{
        $id: this.user.$id,
        phoneno: this.user.twilio_phone_number,
        firstName: this.user.firstName || '',
        lastName: this.user.lastName || '',
        language: this.user.language,
        username: this.user.username
      }, {
        $id: '',
        phoneno: toPhoneNo,
        firstName: '',
        lastName: '',
        language: '',
        username: toPhoneNo
      }],
      languages: [this.user.language, ''],
      readBy: {}
    }
    convo.readBy[this.user.$id] = this.user.username;
    firebase.firestore().collection('twilioConversations').doc(doc.id).set(convo);
    //this.viewConversation(convo);
  }

  addTempChat() {
    let options = {
      prompt: "Scan a Profile Code"
    }
    this.barcodeScanner.scan(options).then(barcodeData => {
      if (barcodeData.format == "QR_CODE") {
        firebase.firestore().collection('users').where('$id', '==', barcodeData.text).get().then((profiles: any) => {
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
              let user = profile.data();
              let doc = firebase.firestore().collection('tempConversations').doc();
              firebase.firestore().collection('users').doc(this.user.$id).collection('tempConversations').doc(doc.id).set({
                chatId: doc.id
              })
              firebase.firestore().collection('users').doc(user.$id).collection('tempConversations').doc(doc.id).set({
                chatId: doc.id
              })
              let convo = {
                $id: doc.id,
                users: [{
                  $id: this.user.$id,
                  username: this.user.username,
                  firstName: this.user.firstName || '',
                  lastName: this.user.lastName || '',
                  language: this.user.language
                }, {
                  $id: user.$id,
                  username: user.username,
                  firstName: user.firstName || '',
                  lastName: user.lastName || '',
                  language: user.language
                }],
                languages: [this.user.language, user.language],
                readBy: {}
              }
              convo.readBy[this.user.$id] = this.user.username;
              firebase.firestore().collection('conversations').doc(doc.id).set(convo);
              this.viewConversation(convo, true)
            }
          })
        })
      }
    });
  }

  deleteChat(chat, i) {
    if (!chat.users[1].twillioChat) {
      this.chats.splice(i, 1);
      if (!chat.media) chat.media = [];
      chat.media.forEach(media => {
        firebase.storage().ref('conversations').child(chat.$id).child(media.fileName).delete();
      })
      firebase.firestore().collection('conversations').doc(chat.$id).delete();
      chat.users.forEach(user => {
        firebase.firestore().collection('users').doc(user.$id).collection('conversations').doc(chat.$id).delete();
      })
    } else {
      firebase.firestore().collection('twilioConversations').doc(chat.$id).delete();
      chat.users.forEach(user => {
        if (user.$id != null && user.$id != '' && user.$id != undefined) {
          firebase.firestore().collection('users').doc(user.$id).collection('twilioConversations').doc(chat.$id).delete();
        }
      })
    }

  }

  viewProfile() {
    this.selectedConversation = null;
    let myModal = this.modalCtrl.create(ProfilePage);
    myModal.onDidDismiss(data => {
      this.ngZone.run(() => {
        this.user = JSON.parse(localStorage.getItem('user'));
      })
    })
    myModal.present();
  }
}
