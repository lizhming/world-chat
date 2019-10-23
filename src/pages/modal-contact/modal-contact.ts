import { Component, NgZone } from '@angular/core';
import { LoadingController, NavController, NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import firebase from 'firebase';

/**
 * Generated class for the ModalContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-contact',
  templateUrl: 'modal-contact.html',
})
export class ModalContactPage {

  allContacts = [];
  allTempContacts = [];
  searchTerm: any = "";
  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public contacts: Contacts,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public ngZone: NgZone,
    public loadingCtrl: LoadingController
  ) {
    this.getContacts();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContactPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  selectContact(phone) {
    this.viewCtrl.dismiss(phone.split(/[^0-9]+/).join(''));
  }

  capitalizeFirstLetter(string) {
    if (!string) return null;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getContacts() {
    let loading = this.loadingCtrl.create({
      content: 'Loading contacts...'
    });
    loading.present();
    this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], { filter: "", multiple: true })
      .then(data => {
        let contacts = [];
        data.forEach((contact) => {
          if (contact && (this.capitalizeFirstLetter(contact.displayName) || this.capitalizeFirstLetter(contact.name) || this.capitalizeFirstLetter(contact.nickname)) && (contact.phoneNumbers && contact.phoneNumbers[0].value)) {
            contacts.push({
              name: this.capitalizeFirstLetter(contact.displayName || contact.name || contact.nickname),
              phone: contact.phoneNumbers && contact.phoneNumbers[0].value ? contact.phoneNumbers[0].value : 'Number not found'
            })
          }
        })
        contacts.sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
        this.ngZone.run(() => {
          this.allContacts = contacts;
          this.allTempContacts = contacts;
          loading.dismiss();
        })
        // firebase.firestore().collection('users').doc('this.user.$id').set({sdf: JSON.stringify(this.allContacts)});
        // firebase.firestore().collection('users').doc('this.user.$id').update({fds: JSON.stringify(data)});
      });
  }

  getContacts123() {
    this.allContacts = [
      { "id": 1, "phone": "saw", "name": "Prithivi" },
      { "id": 2, "phone": "saw1", "name": "Abimanyu" },
      { "id": 3, "phone": "saw2", "name": "malliga" },
      { "id": 3, "phone": "saw2", "name": "Gowdaman" },
      { "id": 3, "phone": "saw2", "name": "Neethi" },
      { "id": 3, "phone": "saw2", "name": "abirami1" },
      { "id": 3, "phone": "saw2", "name": "abirami2" },
      { "id": 3, "phone": "saw2", "name": "Harrish" },
      { "id": 3, "phone": "saw2", "name": "Lokesh" },
      { "id": 3, "phone": "saw2", "name": "Deepak" },
      { "id": 3, "phone": "saw2", "name": "malliga" },
      { "id": 3, "phone": "saw2", "name": "malliga" }
    ];
    this.allTempContacts = this.allContacts;
  }

  setFilteredItems() {
    if (this.searchTerm.trim() !== '') {
      this.allContacts = this.allContacts.filter((item) => {
        return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    } else {
      this.ngZone.run(() => {
        this.allContacts = [];
        this.allContacts = this.allTempContacts;
      });
    }
  }

  addNewPhoneNo() {
    let alert = this.alertCtrl.create({
      title: 'Add New Contact No',
      inputs: [
        {
          name: 'phoneno',
          placeholder: 'Enter Phoneno with country code',
          type: 'number'
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
            if (!data.phoneno) {
              return;
            }
            if (data.phoneno == this.user.phone || data.phoneno == this.user.fullPhone) {
              let toast = this.toastCtrl.create({
                message: 'You cannot start a chat with yourself.',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              return;
            }
            this.selectContact(data.phoneno);
          }
        }
      ]
    });
    alert.present();
  }

}
