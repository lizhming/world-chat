import { Component, NgZone } from '@angular/core';
import {
  NavController,
  ModalController,
  AlertController,
  NavParams,
  ViewController,
  LoadingController
} from 'ionic-angular';
import { ProfileModalPage } from "../profile-modal/profile-modal";
import { PremiumModalPage } from "../premium-modal/premium-modal";
import { LoginPage } from "../login/login";
import { map } from "rxjs/operators/map";
import { HttpClient } from "@angular/common/http";
import * as firebase from 'firebase';


@Component({
  selector: 'page-contact',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user;
  langList;
  language;
  viewingSomeone = false;
  browser = false;
  IsCloseButton = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public ngZone: NgZone,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    private http: HttpClient,
    private loadingCtrl: LoadingController
  ) {
    let profile = this.navParams.get('profile');
    if (profile) {
      this.viewingSomeone = true;
      this.IsCloseButton = true;
      firebase.firestore().collection('users').doc(profile.$id).get().then(prof => {
        this.user = prof.data();
        this.loadUserInfo();
      })
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.loadUserInfo();
    }
    this.browser = !!JSON.parse(localStorage.getItem('isBrowser'));
  }

  loadUserInfo() {
    if (!this.user.thumb) {
      this.user.thumb = 'assets/imgs/nopic-profile.png';
    }
    this.getLanguage()
      .subscribe(res => {
        this.langList = res;
        this.formatLanguage();
      });
  }

  editProfile() {
    let myModal = this.modalCtrl.create(ProfileModalPage);
    myModal.onDidDismiss(user => {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.formatLanguage();
    })
    myModal.present();
  }

  logout() {
    let prompt = this.alertCtrl.create({
      title: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            return;
          }
        },
        {
          text: 'Yes',
          handler: data => {
            localStorage.removeItem('user');
            this.ngZone.run(() => {
              this.navCtrl.setRoot(LoginPage);
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
              loading.present();
              window.location.reload();
            });
          }
        }
      ]
    });
    prompt.present();
  }

  getLanguage() {
    const msgListUrl = './assets/language/language.json';
    return this.http.get<any>(msgListUrl)
      .pipe(map(response => response.array));
  }

  formatLanguage() {
    this.langList.forEach(lang => {
      if (this.user.language === lang.code) {
        this.language = lang.name;
      }
    })
  }

  gotoPremium() {
    this.navCtrl.push(PremiumModalPage);
  }


}
