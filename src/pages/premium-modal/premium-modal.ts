import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators/map';
import { HttpClient } from "@angular/common/http";
import * as firebase from 'firebase';

/**
 * Generated class for the PremiumModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-premium-modal',
  templateUrl: 'premium-modal.html',
})
export class PremiumModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PremiumModalPage');
  }

}
