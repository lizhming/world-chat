import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular'
import { map } from 'rxjs/operators/map';
import { HttpClient } from "@angular/common/http";
import * as firebase from 'firebase';



/**
 * Generated class for the ProfileModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile-modal',
  templateUrl: 'profile-modal.html',
})
export class ProfileModalPage {

  base64Image: string;
  language = [];
  user: any;
  lang: any;
  originalUser: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    private http: HttpClient
  ) {
    this.GetLanguage()
      .subscribe(res => {
        this.language = res;
      });
    this.user = JSON.parse(localStorage.getItem('user'));
    this.originalUser = Object.assign({}, this.user);
    if (!this.user.thumb) {
      this.user.thumb = 'assets/imgs/nopic-profile.png';
    }
    this.lang = this.user.language;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileModalPage');
    // this.takePhoto(1);
  }

  closeModal() {
    this.viewCtrl.dismiss();
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
      firebase.storage().ref('users').child(this.user.$id).child('thumb.jpg')
        .putString(imageData, 'base64').then(function(snapshot) {
        firebase.storage().ref('users').child(self.user.$id).child('thumb.jpg').getDownloadURL().then(function (downloadURL) {
          self.user.thumb = downloadURL;
          self.saveProfile();
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

  async saveProfile() {
    if (!this.originalUser.email && this.user.email) {
      let user = await firebase.firestore().collection('emailAuths').doc(this.user.email).get();
      let oldUserPhoneAuth = await firebase.firestore().collection('phoneAuths').doc(this.user.phone).get();
      let oldUserFullPhoneAuth = await firebase.firestore().collection('phoneAuths').doc(this.user.fullPhone).get();

      if (!user.data()) {
        firebase.firestore().collection('emailAuths').doc(this.user.email).set({
          $id: this.user.$id,
          password: oldUserPhoneAuth.data() ? oldUserPhoneAuth.data().password : oldUserFullPhoneAuth.data().password,
        });
        this.originalUser = this.user;
      } else {
        return alert('Email Taken')
      }
    }
    this.user.language = this.lang;
    localStorage.setItem('user', JSON.stringify(this.user));
    firebase.firestore().collection('users').doc(this.user.$id).update(this.user);
  }

  GetLanguage() {
    const msgListUrl = './assets/language/language.json';
    return this.http.get<any>(msgListUrl)
      .pipe(map(response => response.array));
  }

}
