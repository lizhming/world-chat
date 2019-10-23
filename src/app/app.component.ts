import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
// import { Firebase } from '@ionic-native/firebase';
import { Device } from "@ionic-native/device";
import { FCM } from "@ionic-native/fcm";
// import { Keyboard } from "@ionic-native/keyboard/ngx";

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage: any = LoginPage;
  isIphoneX = false;
  isIphone = false;
  isBrowser: any = false;

  constructor(
    public platform: Platform,
    splashScreen: SplashScreen,
    public admobFree: AdMobFree,
    public admob: AdMobPro,
    public device: Device,
    // private firebaseMessaging: Firebase,
    private fcm: FCM,
    // public keyboard: Keyboard
  ) {
    splashScreen.show();
    firebase.initializeApp({
      apiKey: "AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk",
      authDomain: "letstalk-205602.firebaseapp.com",
      databaseURL: "https://letstalk-205602.firebaseio.com",
      projectId: "letstalk-205602",
      storageBucket: "letstalk-205602.appspot.com",
      messagingSenderId: "893888740923"
    });

    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);

    this.isBrowser = (platform.is('core') || platform.is('mobileweb'));
    // this.isBrowser = false;

    localStorage.setItem('isBrowser', this.isBrowser);

    // START DEBUG SECTION
    // let helloArray = [];
    // firebase.firestore().collection('phoneAuths').get()
    //   .then(snapshot => {
    //     snapshot.forEach(doc => {
    //       helloArray.push({
    //         id: doc.id,
    //         ...doc.data()
    //       });
    //     });
    //     setTimeout(() => {
    //       console.log(helloArray)
    //       this.downloadCSV(helloArray, { filename: "phoneAuths.csv" });
    //     }, 30000)
    //   })
    //   .catch(err => {
    //     console.log('Error getting documents', err);
    //   });
    // END DEBUG SECTION

    // keyboard.didHide.subscribe(() => {
    //   this.admobFree.banner.hide().then(() => {
    //     setTimeout(() => this.admobFree.banner.show(), 100);
    //   });
    // });
    platform.ready().then(() => {
      if (platform.is('ios')) {
        this.isIphone = true;
      }
      if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6') {
        this.isIphone = false;
        this.isIphoneX = true;
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (localStorage.getItem('user')) {
        let user = JSON.parse(localStorage.getItem('user'));

        this.rootPage = TabsPage;

        if (!this.isBrowser && (<any>window).cordova) {
          this.fcm.getToken().then(token => {
            user.token = token;
            // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: JSON.stringify({ token: token }) })
            firebase.firestore().collection('users').doc(user.$id).update(user);
          }).catch(error => console.error('Error getting token', error));

          this.fcm.onTokenRefresh().subscribe((token: string) => {
            user.token = token;
            firebase.firestore().collection('users').doc(user.$id).update(user);
          });
        }
      }
      setTimeout(() => {
        splashScreen.hide();
      }, 1000)

      // ca-app-pub-2963906649426641~2020960624


      // id: 'ca-app-pub-2963906649426641/2811298114'


      if (!this.isBrowser) {
        window.addEventListener('keyboardDidHide', () => {
          console.log("Keyboard is Hidden");
          this.admobFree.banner.hide().then(() => {
            setTimeout(() => this.admobFree.banner.show(), 100);
          });
        });
        // this.keyboard.onKeyboardHide().subscribe(() => {
        //   this.admobFree.banner.hide().then(() => {
        //     setTimeout(() => this.admobFree.banner.show(), 100);
        //   });
        // });
        
        try {
          let adId;
          if (this.platform.is('android')) {
            adId = 'ca-app-pub-9161240946129783/3619767735';
            adId = 'ca-app-pub-9161240946129783/8770907313';
            adId = 'ca-app-pub-9161240946129783/5293507360';
            adId = 'ca-app-pub-9161240946129783/3619767735';
            adId = 'ca-app-pub-9161240946129783/5293507360';

          } else if (this.platform.is('ios')) {
            adId = 'ca-app-pub-9161240946129783/2043371307';
            adId = 'ca-app-pub-9161240946129783/8071444445';
          }
          //ios:ca-app-pub-9161240946129783~6568514644
          //android: ca-app-pub-9161240946129783~4517916437

          // this.admob.prepareInterstitial({adId: adId})
          // .then(() => { this.admob.showInterstitial(); });
          // this.admob.createBanner({adId: adId, isTesting: true})
          //   .then(() => { this.admob.showBanner(4); });
          
          let bannerConfig: AdMobFreeBannerConfig = {
            isTesting: false,
            offsetTopBar: false,
            overlap: false,
            id: adId,
            autoShow: true
          };
          
          
          this.admobFree.banner.config(bannerConfig);
          //firebase.firestore().collection('hello').doc(Date.now() + '').set({data: '3'})
          
          this.admobFree.banner.prepare().then(() => {
            console.log('success prepare');
            this.admobFree.banner.show();
            // success
          }).catch(e => {
            console.log(e);
          });
          
        } catch (e) {
          console.log(e)
          //firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: JSON.stringify(e) })
        }
      }







    });
  }

  convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
      return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
      ctr = 0;
      keys.forEach(function(key) {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  downloadCSV(csvData, args) {
    var data, filename, link;
    var csv = this.convertArrayOfObjectsToCSV({
      data: csvData
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    // if (!csv.match(/^data:text\/csv/i)) {
    //   csv = 'data:text/csv;charset=utf-8,' + csv;
    // }
    // data = encodeURI(csv);
    var newCsvData = new Blob([csv], { type: 'text/csv' });
    var csvUrl = URL.createObjectURL(newCsvData);

    link = document.createElement('a');
    link.setAttribute('href', csvUrl);
    link.setAttribute('download', filename);
    link.click();
  }
  ionViewDidEnter(){
      console.log("ionViewDidEnter")
  }
}
