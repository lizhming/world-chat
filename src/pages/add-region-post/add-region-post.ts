import { Component } from '@angular/core';

import * as firebase from 'firebase';
import {
  ActionSheetController,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  ViewController
} from "ionic-angular";
import {ConversationPage} from "../conversation/conversation";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-region-post',
  templateUrl: 'add-region-post.html',
})
export class AddRegionPostPage {
  base64Image: string;
  language = [];
  user: any;
  lang: any;
  originalUser: any;
  newDoc: any;
  post

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    private http: HttpClient,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user)
  }

  ngOnInit() {
    this.newDoc = firebase.firestore().collection('regionPosts').doc();
    this.post = {
      $id: this.newDoc.id
    }
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

  //take Photo
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
      // this.base64Image = 'data:image/jpeg;base64,' + imageData;
      firebase.storage().ref('regionPosts').child(this.newDoc.id).child('1.jpg')
        .putString(imageData, 'base64').then(function(snapshot) {
        firebase.storage().ref('regionPosts').child(self.newDoc.id).child('1.jpg').getDownloadURL().then(function (downloadURL) {
          self.post.image = downloadURL;
        }).catch((e) => {
          firebase.firestore().collection('testing').add({downloadUrlPictureError: e});
        })
      }).catch((e) => {
        firebase.firestore().collection('testing').add({savePictureError: e});
      })
    }, (err) => {
      // Handle error
      firebase.firestore().collection('testing').add({getPictureError: err});
    });
  }

  async savePost() {
    let language = {};
    language[this.user.language] = {
      description: this.post.description,
      locationName: this.post.locationName,
      region: this.post.region,
    };
    let post = {
      $id: this.post.$id,
      authorId: this.user.$id,
      author: this.user.firstName + ' ' + this.user.lastName,
      authorThumb: this.user.thumb,
      timestamp: Date.now(),
      message: language,
      image: this.post.image || null,
      translatedFrom: this.user.language
    }
    firebase.firestore().collection('regionPosts').doc(this.newDoc.id).set(post);

    this.viewCtrl.dismiss(post);
  }
}
