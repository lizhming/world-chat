import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, ToastController} from 'ionic-angular';
import { ConversationPage } from "../conversation/conversation";
import { ModalController, FabContainer } from 'ionic-angular';
import { ModalContactPage } from '../../pages/modal-contact/modal-contact';
import * as firebase from 'firebase';
// import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-start-group-chat',
  templateUrl: 'start-group-chat.html'
})
export class StartGroupChatPage {

  searchQuery: string = '';
  people: any = [];
  user: any;
  browser: any = false;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    // private sms: SMS
  ) {
    this.browser = !!JSON.parse(localStorage.getItem('isBrowser'));
    this.user = JSON.parse(localStorage.getItem('user'));
    // this.initializeItems();

  }

  ionViewWillEnter() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  addByUsername() {
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
                  this.people.push(profile.data());
                }
              })
            })
          }
        }
      ]
    });
    alert.present();
  }

  // addByContacts() {
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
  //             this.people.push(profile.data());
  //           }
  //         })
  //       })
  //     }
  //   });
  //   myModal.present();
  // }

  newConversation() {
    let loading = this.loadingCtrl.create({
      content: 'Starting Chat..'
    });
    loading.present();
    let doc = firebase.firestore().collection('conversations').doc();
    let convoUsers = [];
    let languages = [];
    this.people.push(this.user);
    this.people.forEach(user => {
      convoUsers.push({
        $id: user.$id,
        username: user.username,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        language: user.language
      });
      languages.push(user.language);
      firebase.firestore().collection('users').doc(user.$id).collection('conversations').doc(doc.id).set({
        chatId: doc.id
      })
    })

    let convo = {
      $id: doc.id,
      users: convoUsers,
      languages: languages,
      readBy: {}
    }
    convo.readBy[this.user.$id] = this.user.username;
    firebase.firestore().collection('conversations').doc(doc.id).set(convo);
    loading.dismiss();
    this.viewConversation(convo)
  }

  viewConversation(convo) {
    this.navCtrl.push(ConversationPage, {
      conversation: convo,
    });
  }

  removePerson(chat, i) {
    this.people.splice(i, 1);
  }
}
