import { Component } from '@angular/core';

import * as firebase from 'firebase';
import {AlertController, ModalController, NavController, ToastController} from "ionic-angular";
import {AddRegionPostPage} from "../add-region-post/add-region-post";
import {LoginPage} from "../login/login";
import {ProfilePage} from "../profile/profile";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-regions',
  templateUrl: 'regions.html',
})
export class RegionsPage {
  user: any;
  regionPosts: any = [];
  hasInitialized = false;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private http: HttpClient,
  ) {
    // this.user = JSON.parse(localStorage.getItem('user'));
  }

  ionViewDidEnter() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.hasInitialized) {
      this.ngOnInit();
    }
  }

  async ngOnInit() {
    let yesterday = Date.now() - 86400000;
    this.regionPosts = [];
    firebase.firestore().collection('regionPosts').where('timestamp', '>', yesterday).orderBy('timestamp', 'desc').get().then(async (snapshot) => {
      snapshot.forEach(doc => {
        this.regionPosts.push({
          id: doc.id,
          ...doc.data()
        });
      });

      for (let x = 0; x < this.regionPosts.length; x++) {
        console.log(this.regionPosts[x]);
        if (!this.regionPosts[x].message[this.user.language]) {
          const description: any = await this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${this.regionPosts[x].message[this.regionPosts[x].translatedFrom].description}&format=text`).toPromise();
          const locationName: any = await this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${this.regionPosts[x].message[this.regionPosts[x].translatedFrom].locationName}&format=text`).toPromise();
          const region: any = await this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${this.regionPosts[x].message[this.regionPosts[x].translatedFrom].region}&format=text`).toPromise();
          this.regionPosts[x].message[this.user.language] = {
            description: description.data.translations[0].translatedText,
            locationName: locationName.data.translations[0].translatedText,
            region: region.data.translations[0].translatedText
          };
          // firebase.firestore().collection('conversations').doc(this.conversation.$id).update(this.conversation);
        }
        x++;
      }
      this.hasInitialized = true;
    })
      .catch(err => {
        this.hasInitialized = true;
        console.log('Error getting documents', err);
      });
  }

  addRegionPost() {
    let myModal = this.modalCtrl.create(AddRegionPostPage);
    myModal.onDidDismiss(post => {
      if (!post) return;
      this.regionPosts.push(post);
    })
    myModal.present();
  }

  deletePost(post, index) {
    let prompt = this.alertCtrl.create({
      title: 'Are you sure you want to delete this post?',
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
            if (post.image) {
              firebase.storage().ref('regionPosts').child(post.id).child('image.jpg').delete();
            }
            firebase.firestore().collection('regionPosts').doc(post.id).delete();
            this.regionPosts.splice(index, 1);
          }
        }
      ]
    });
    prompt.present();
  }

  viewProfile(profileId) {
    this.navCtrl.push(ProfilePage, {
      profile: {$id: profileId}
    })
  }

}
