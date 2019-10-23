import { Component } from '@angular/core';

import { ChatsPage } from '../chats/chats';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';
import {ModalController, NavController, ToastController} from "ionic-angular";
import {CompleteProfilePage} from "../complete-profile/complete-profile";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {TempConversationPage} from "../tempConversation/tempConversation";
import {ConversationPage} from "../conversation/conversation";

@Component({
  selector: 'page-temp-chat',
  templateUrl: 'temp-chat.html',
})
export class TempChatPage {
  user: any;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private barcodeScanner: BarcodeScanner,
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    this.addTempChat();
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
              firebase.firestore().collection('tempConversations').doc(doc.id).set(convo);
              this.viewConversation(convo, true)
            }
          })
        })
      }
    });
  }

  viewConversation(convo, isTemp = false) {
    this.navCtrl.push(isTemp ? TempConversationPage : ConversationPage, {
      conversation: convo,
    });
  }
}
