import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, NavParams, Slides, AlertController, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { TabsPage } from '../tabs/tabs';
import { map } from 'rxjs/operators/map';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Slides) slides: Slides;

  verificationId: any;
  loading: any;
  language = [];
  mode = 'login';
  emailOrPhone = 'email';
  emailOrPhoneforgotpassword = 'email';
  apiURL = 'https://us-central1-letstalk-205602.cloudfunctions.net';
  Isforgotpasswordcode = 0;
  Isforgotpasswordchange = false;
  forgotemailorphone = '';
  doc_forgot_id = '';
  countrycode = '+1';


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ngZone: NgZone,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private http: HttpClient,
    public toastCtrl: ToastController,
  ) {

    this.GetLanguage()
      .subscribe(res => {
        this.language = res;
      });

    if (!JSON.parse(localStorage.getItem('isBrowser'))) {
      this.emailOrPhone = 'phone';
    }
    // console.log(this.emailOrPhone)
    // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: this.emailOrPhone })
  }

  signIn(email, phoneNumber, password) {



    if ((email || phoneNumber) && password) {

      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      this.loading.present();

      if (this.emailOrPhone === 'email') {
        // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: 'inside email if' })
        firebase.firestore().collection('emailAuths').doc(email).get().then((auth: any) => {
          if (auth && auth.data() && auth.data().password == password) {
            firebase.firestore().collection('users').doc(auth.data().$id).get().then((user: any) => {
              localStorage.setItem('user', JSON.stringify(user.data()));
              setTimeout(() => {
                this.navCtrl.setRoot(TabsPage);
              }, 100);
            })
          } else {
            let alert = this.alertCtrl.create({
              title: 'Email or password invalid',
              buttons: ['Try again']
            });
            alert.present();
          }
        }).catch(e => {
          // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: JSON.stringify(e) })
          let alert = this.alertCtrl.create({
            title: 'Oops, something went wrong!',
            buttons: ['Reload']
          });
          alert.onDidDismiss(() => {
            window.location.reload();
          })
          alert.present();
        })
      } else {
        // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: 'inside phone if' })
        firebase.firestore().collection('phoneAuths').doc(phoneNumber).get().then((auth: any) => {
          if (auth && auth.data() && auth.data().password == password) {
            firebase.firestore().collection('users').doc(auth.data().$id).get().then((user: any) => {
              localStorage.setItem('user', JSON.stringify(user.data()));
              setTimeout(() => {
                this.navCtrl.setRoot(TabsPage);
              }, 100);
            })
          } else {
            let alert = this.alertCtrl.create({
              title: 'Phone or password invalid',
              buttons: ['Try again']
            });
            alert.present();
          }
        }).catch(e => {
          // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: JSON.stringify(e) })
          let alert = this.alertCtrl.create({
            title: 'Oops, something went wrong!',
            buttons: ['Reload']
          });
          alert.onDidDismiss(() => {
            window.location.reload();
          })
          alert.present();
        })
      }
      this.loading.dismiss();


    } else {
      let alert = this.alertCtrl.create({
        title: 'Please Enter an (Email or Phone Number) and a password',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  register(internationalPhone, phone, email, password, firstname, lastname) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let results = [];
    let promises = [
      new Promise((resolve, reject) => {
        firebase.firestore().collection('users').where('fullPhone', '==', ('+' + internationalPhone)).get().then((profiles: any) => {
          profiles.forEach(profile => {
            results.push(profile);
          })
          resolve();
        })
      }),
      new Promise((resolve, reject) => {
        firebase.firestore().collection('users').where('phone', '==', phone).get().then((profiles: any) => {
          profiles.forEach(profile => {
            results.push(profile);
          })
          resolve();
        })
      }),
      new Promise((resolve, reject) => {
        firebase.firestore().collection('users').where('email', '==', ('+' + email)).get().then((profiles: any) => {
          profiles.forEach(profile => {
            results.push(profile);
          })
          resolve();
        })
      }),
    ]
    Promise.all(promises).then(values => {
      loading.dismiss();
      if (!results.length) {
        const genDoc = firebase.firestore().collection('users').doc();
        firebase.firestore().collection('users').doc(genDoc.id).set({
          $id: genDoc.id,
          phone: phone,
          fullPhone: internationalPhone,
          email: email
        });
        firebase.firestore().collection('phoneAuths').doc(phone).get().then((user) => {
          if (!user.data()) {
            firebase.firestore().collection('phoneAuths').doc(phone).set({
              $id: genDoc.id,
              password: password,
            });
          }
        });
        firebase.firestore().collection('emailAuths').doc(email).get().then((user) => {
          if (!user.data()) {
            firebase.firestore().collection('emailAuths').doc(email).set({
              $id: genDoc.id,
              password: password,
            });
          }
        });
        localStorage.setItem('user', JSON.stringify({
          $id: genDoc.id,
          email: email,
          phone: phone,
          fullPhone: internationalPhone,
          firstName: firstname,
          lastName: lastname
        }));
        setTimeout(() => {
          this.navCtrl.setRoot(TabsPage);
        }, 100);
      } else {
        let toast = this.toastCtrl.create({
          message: 'The email or phone number is already registered.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
    })
  }

  private verifyCode(code): void {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
    let credential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, code);
    firebase.auth().signInWithCredential(credential).then((res) => {
      this.loading.dismiss();
      this.doLogin()
    })
  }


  private showPrompt() {
    this.loading.dismiss();
    let prompt = this.alertCtrl.create({
      title: 'Enter the Confirmation code',
      inputs: [
        {
          name: 'code',
          placeholder: 'Code'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            return;
          }
        },
        {
          text: 'Verify',
          handler: data => {
            this.verifyCode(data.code);
          }
        }
      ]
    });
    prompt.present();
  }

  private doLogin() {
    setTimeout(() => {
      this.navCtrl.setRoot(TabsPage);
    }, 100);
  }

  slideChanged() {
    if (this.slides.isEnd()) {
      //this.skipMsg = "Alright, I got it";
    } else {
      //this.skipMsg = "Skip";
    }
  }

  GetLanguage() {
    const msgListUrl = './assets/language/language.json';
    return this.http.get<any>(msgListUrl)
      .pipe(map(response => response.array));
  }

  generate() {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  forgotpassword(email, countrycode, phoneNumber) {
    if ((email || phoneNumber)) {
      // console.log(this.emailOrPhoneforgotpassword);
      // console.log(email);
      // console.log(phoneNumber);
      // console.log(countrycode);

      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      this.loading.present();

      if (this.emailOrPhoneforgotpassword === 'email') {
        let URL = this.apiURL + '/forgotPasswordEmail';
        this.http.post(URL, {
          email: email,
        }).toPromise().then((response: any) => { // Success
          this.loading.dismiss();
          if (response.success == true) {
            this.forgotemailorphone = email;
            this.Isforgotpasswordcode = 1;
            let toast = this.toastCtrl.create({
              message: response.message,
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
          } else {
            let alert = this.alertCtrl.create({
              title: response.message,
              buttons: ['Ok']
            });
            alert.present();
          }
        }).catch((error) => {
          console.log(error)
        });
      } else {

        let URL = this.apiURL + '/forgotPasswordPhone';
        this.http.post(URL, {
          phone: countrycode + phoneNumber,
        }).toPromise().then((response: any) => { // Success
          this.loading.dismiss();
          if (response.success == true) {
            this.forgotemailorphone = countrycode + phoneNumber;
            this.Isforgotpasswordcode = 1;
            let toast = this.toastCtrl.create({
              message: response.message,
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
          } else {
            let alert = this.alertCtrl.create({
              title: response.message,
              buttons: ['Ok']
            });
            alert.present();
          }
        }).catch((error) => {
          console.log(error)
        });

      }

    } else {
      let alert = this.alertCtrl.create({
        title: 'Please Enter an Email or Phone Number',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  verifyforgotcode(code) {
    if (code) {
      //this.forgotemailorphone = "jaimin.bhanderi@ymail.com";
      //console.log(code);
      //console.log(this.forgotemailorphone);

      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      this.loading.present();
      firebase.firestore().collection('forgotPasswordTempCodes').where('emailorphone', '==', this.forgotemailorphone).where('forgotPasswordTempCodes', '==', parseInt(code)).where('hasConfirmed', '==', false).get().then((querySnapshot) => {
        this.loading.dismiss();
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            this.doc_forgot_id = doc.data().$id;
          });
          this.Isforgotpasswordcode = 2;
          this.Isforgotpasswordchange = true;

        } else {
          let alert = this.alertCtrl.create({
            title: 'Invalid verification code',
            buttons: ['Dismiss']
          });
          alert.present();
        }
      });

    } else {
      let alert = this.alertCtrl.create({
        title: 'Please Enter your verification code',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  changepassword(password, confpassword) {
    if (password && confpassword) {
      if (password == confpassword) {

        this.loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        this.loading.present();

        firebase.firestore().collection('forgotPasswordTempCodes').where('$id', '==', this.doc_forgot_id).get().then((authpass: any) => {
          let doc_id;
          authpass.forEach((doc) => {
            doc_id = doc.id;
          });
          firebase.firestore().collection('forgotPasswordTempCodes').doc(doc_id).update({ hasConfirmed: true });
        });
        firebase.firestore().collection('emailAuths').where('$id', '==', this.doc_forgot_id).get().then((authpass: any) => {
          let doc_id;
          authpass.forEach((doc) => {
            doc_id = doc.id;
          });
          firebase.firestore().collection('emailAuths').doc(doc_id).update({ password: password });
        });
        firebase.firestore().collection('phoneAuths').where('$id', '==', this.doc_forgot_id).get().then((authpass: any) => {
          let doc_id;
          authpass.forEach((doc) => {
            doc_id = doc.id;
          });
          firebase.firestore().collection('phoneAuths').doc(doc_id).update({ password: password });
        });

        this.mode = 'login';
        this.Isforgotpasswordcode = 0;
        this.Isforgotpasswordchange = false;
        this.loading.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Your password updated successfully',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();

      } else {
        let alert = this.alertCtrl.create({
          title: 'Password and confirm password does not match',
          buttons: ['Dismiss']
        });
        alert.present();
      }

    } else {
      let alert = this.alertCtrl.create({
        title: 'Please Enter your password',
        buttons: ['Dismiss']
      });
      alert.present();
    }

  }

  Gotoforgotpassword() {
    this.ngZone.run(() => {
      this.mode = "forgots";
      this.emailOrPhoneforgotpassword = 'email';
      this.Isforgotpasswordcode = 0;
    });
  }



}
