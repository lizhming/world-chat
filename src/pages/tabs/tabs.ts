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
import {TempChatPage} from "../temp-chat/temp-chat";
import {RegionsPage} from "../regions/regions";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChatsPage;
  tab2Root = RegionsPage;
  tab3Root = TempChatPage;
  tab4Root = ProfilePage;
  user: any;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private barcodeScanner: BarcodeScanner,
  ) {
    let user = JSON.parse(localStorage.getItem('user'));
    this.user = user;
    if (!user.complete) {
      let modal = this.modalCtrl.create(CompleteProfilePage);
      modal.onDidDismiss((returnUser) => {
        user = returnUser;
      })
      modal.present();
    } else if (user && !user.thumb) {
      let imageData = 'iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAI27AACNuwGddYGAAAAAIGNIUk0AAG2YAABzjgAA+aUAAITIAAB8VwAA+sEAADB2AAARJBeOCnIAABIcSURBVHja7N3tchRHDAVQdspPTQpSkOK5O/8SjG3Yj+ltte45L5Cwo5Zua9b25fPX75+A8sZm/78Xj2y+H9+++BC424uPAAz2hf8uQQEEADDgfT4CAggAYNjz/mcqFIAAAAa9z18wAAEADHzPSSAAAQAMe89SKAABAAx8bAlAAMAAAIEAAQAMfXhdK8IAAgAY+KgjgQABAAx90mtMGEAAAEMfYQAEADD0EQZAAABDH2EABAAw9BEGQAAAg5+wuhYEEADA0MdWAAQANEOwFQABAEMfbAVAAMDgB1sBEAAw+Hnl4tkKAiAAYPAb6hX/H9WDIIAAgKFPYEO/qJ3TzpYwgACAwW/Qt/+c1JatALMO3eev330KGPwGvdpTe9gAgOar6W73+Q/nUU0iAGDwG/aeUWK9CgIIABj8Bj7BWwJBAAEAg9/Q54NnPILOr9pGAMDgN/AJ3A4IAggAxA9/DZDk7cBwBhAASBr8Gh7CgG0AAgAhg19zQxgQBBAACBn8GhnCgCCAAEDI8Ne0EAbO6wnOkwCAwW/oQ2AYsA0QADD4DX54sE4FAQQADH9DH1uBbXuHMygAYPAb/BC4FbANEAAw/A19CN4K2AYIABj8Bj+EbgVsA5o5fASG/8IGqJEgCOx3DobHZgOAw+jGD5kbAdsAGwAMfzd+CD4ntgE2ADh0bvwQuhGwDbABwPB344fgc2QbYAOAwQ+EbgRsA2wACBz+bvzgnNkGCAAEHSSDH5w7IWBDXgE4PI80IKDGOazaL7wSsAGg0fB34wfn0jZAACBw+APOqBDQgFcADofBDz1DQMWe4pWADQCbDH/rftg7CFQ9v7YBAgDFhz/QZyOg9yEAOABu/WAboAem8x0ARe/GD3nbgEo9yPcCbAAMf8MfCD7ztgECgOH/5CZg+ENuCKh2/oUAAcDwd+sHQnuBECAAGP5u/UBoXxACBADD360fCO0RQsBkfgrA4Ad4r19U6GF+QsAGwPA3/AHbAAQAw9/wB4QABAAF+u6hNfyBbv1ECBAADH+3fiC0twgBAoDhb/gDQgACQHYhWvkDaf1GCBAADH+PAQjtPUKAAGD4AwgBCAD9C87KH6gUAlb3IyFAAIgZ/gC2AUKAAGD4AwgBQsBt/C0Awx/1q+44u1eNxbWubgUAwx/1OPm/pTYRAgQAzdbgp2H4vOf/T93ycx2MhbWpFgUAwx+1tvDfopYFASFAANCQDX8aDvxb/q1qWwgQAgQAzdnwV1fhn4FaFwKEAAFAk9YQ1VLw56PuhQAhYAG/B8Dw5/waGob/XZ8ZOSFAKBcADH/D3xBDcxYC1JkAYPhj8Ps8fZ5CgBAgABj+GFQ+X4QAIUAA6FQA/pqfwYQmzfp+GF1fNgBu/Vw/9A0jTRq9UQDQVBS4OsFzoEGPjK2t1ABg+HPtrR8hACFAANBEDH81AggBAoDGbvi79aNJIwQIABqH4a8+8KwQAgQADcPwd+vHc0MIKMsfA8JNkm7PUPgGGwC3fwz/4O2ALYEtgB4RHAAMfwx/BAEhQK8ICwCGP4Y/H20GEALie8bR+KAb/hj+2AoIAXpH4AbA8MfwRxDQcwkKAEMhYvgjCAgB+khWADD8MfxRL0KA+ggLAIY/mjm2AUKAvhK6ATD8MfxRQ3oyQQHAQQX0FtRFWACw+kfTZnY9qSlbgHZ95mhwMA1/DH/UFkJA4AbA8EeDRo2hVwcFgKGgAFjcs7cNhbsGAMMfNzPUGkJA6AYANGTUHAQFALd/QAjAFiAsABj+aMKoP4SA0A2A4Q8IAejpQQHAIUNNAPpSWACw+sfwRz2yS2/foh68AjD8ASFAjw90OFQKQ6MFhIC8PlU9AGj0gHCKegjdALj9o8ECen5QALD6B4RUdu/9ZevhCD9Ahj+AEBAZArwCwM0K1CqBjuCD4/YPQOwW4PDAAWwBhAAbAAcGzRQgoI8dgR+M2z8Aq2ZDmRBweMBIzaB2yZsRh0MCAHkzL2kD4PYPuOBgVhQKAMMDRfMEwkLA8t7mFwEBQKDVAcDtHwBbgLAAYLULpNDvKFcb3V8BuP0DYIYUCgBW/7g1AULAwl7nS4AAEGhFAHD7B8AWYPEWwAYAoM/lB8oGALd/NEvAFqBA3zs8IADImzHPDABudABQZFZ22gC4/QNg1hQLAG7/AFBoZnbZALj9Axo7Zk6xAKDgAaDY7OywAXD7V/gAZk+xAKCRA0DBGbr7BsDtHwAzKDAAAADFAsDs9b/bPwDdtwDTZqkNAADYALj9A0DCFsAGAABsANz+ASBhC2ADAAA2AG7/AJCwBbABAHguvyGVlhsAt38AbAHCAoBUCwBznTZrd9kAuP0DYAtQcAPg9g8AG20BdtgAuP0DYAtQdAMApZItGAwwPwBo2ACw2WWp+gZAUgZgV6Vn2KMBwO0fADbcAlTeALj9S8wAelrRDQAAsKFHAoD1PwCsdfcsrroBsAYGoIuSM80rAAAIdG8AmLn+d/sHwBZg8ky2AQAAGwAAQAB4n/U/ANSacTfPZhsAALABAAAEgLes/wH0OWrWwE0z2gYAAGwAAAAB4DXrfwCoPfOuntU2AKQdDgAEAAAQANz2ACBk9l0bAIZnBeCywxaumtleAQBAoNUBQCIGINXSGXhNALD+B4C9/HF2ewUAAIFWBgDrf9QHoNcFBgAAoGgA8P4fYONbHtGGDQAAUCIASMMAsHAm2gAAgA3AK97/E5mKQR3TyKi0AXAYAGDxbPQKAAACCQAAIAAAAMkBYNYXAL3/R82gfuG59TJsAAAAAQAABAAAIDoA+AVAANDLWLkB8GUYIImeR+m68QoABwIgkAAAAAIAACAAnMcKF0ii51G+fn4NAH4CAA0VoKexYgMAABQiAACcy7YKAQAAEADAzQqgYADwJ4AB9Dt619KwAQAAGwAAQAAAAAQAKMQ7VtQmnODFR8BG/KZKdqhPQQAbAAcBwx+1CjVnqFcAaKigZgneAChWAAgKqDYAuEmB2iV4AwAaKKhhBAAAQAAANydQywgAAIAA8BG/AwAAis5SGwAqsjJFTcPGGwAAQAAAACoFAKspAMgybAAAIHQDAAAIAACAAAAACAAAgAAAAAgA//FrgAGg8Ey1AQAAGwAAQAAAAAQAAEAAgFl8iRQ1DQIAACAAAAACAAAgAAAAAgAb86Up1DIIAACAAAAACAC0ZXWKGgYBAAAQAAAAAYC2rFBRuyAAAAACAG5SoGZBAAAABAAAQABgc1aqqFUQANBYQY2CAAAACAC4YYHaBAEAjRbUJAgAaLigFkEAQOMFNUigFx8BTRrw8FFg8IMAgCAABj8sCADDQaFAgxYGMPTpYEov8x0AAAgkAACAAAAACACwN+9uUUMgAAAAAgAAhAcAKy4AyHKxAQCA0A0AtE65PgLUDggAAMDkAODXsAJA0VlqAwAANgDQkne5qBkQAAAAAQAABAAAICkAeN9Fd2octQI/1bgNAAAEbwBm8bsAcLMDKDhDbQAAhERsAAAAAQDc8FAbIAAAAAIAANAgAMxaf/lJAKqx6kVNUN2YXes2AAAQvgEANz7UAggAAIAAAG5+qAFoGwAcBgAICLzP2gD4SQDcAAEKzUyvAADhDwIJAGAQAAIAgNAHAsC5fA8AAwHPGorMysPhAIC84OsVAAi/njEEEgDAgAAEAADhDpIDgD8NjEEB8FzT/wSwDQAIAZ4n2AAAGP4gAAAGByAATOB7AAgBeH6weDYeDg4YIp4b5J0DrwAAwx8CrQoAXgNgoOBZwcKZaAMABotnBDYADhNccSacC8Mftj8TNgCA4Q82AE/lewAApFs2C20AAMAG4F1WawCwlz/O7tUbAK8BAEi1dAZ6BQAAga4NAF4DAMAerprZFTYAXgMAkGb57PMKAAACCQAAIAD81szvAXgNAECKmTPv6lltAwAANgAAgADwltcAMP8sAH2VWP/bAACADQAAIAB8zGsAAKg1426ezTYAAGADAAAIAB/zGgAAasy2u2ayDQAA2ABEJCUAiJ9pjwQAvwgFBxpgrbtnsVcAABCocgBwwwJgd2Vn2aMBwGsAAFjjoRlc/RWALQAAbv8FNwC2AACw2e1/hw0AAFB0AzCb1wAA7Kb87DorAHgNAADPccrM3eUVgC0AAG7/BTcAtgAAsMntf6cNgC0AAGZV0Q0AALCJyxjnhpW//v5ndvrxqgEpH72BuL7w49uXU2vcBgAAAs0IALNTuJsXAFG3/xmz1QYAAGwAbAEAoPvt3wYAAGwAbAEAIOH2bwMAADYAkheoO88FUmpudgDwizkAoOAM7fAKQOpHveH5oNYKBgBbAAAoNju7fAlQ6ked4TmhxgoGAFsAACg0Mzv9GKDUj/rC80JtFQwAtgA48HhuUGRWHg48qCkgrx88OwBcPCBAw0Ytrb39d9wAgOGB5whFA4AtAIYGnifqZ+Ht3wYADAvPFWwAbAFA3Xi+kHD7T9gAOOyoFzxn1EqxAOD3AuCg43mTbtksPAL+4Q46f6oPNSIEwIr6WHoR9iVAHHDUAASqEABsAdD4WV0L6oGo23/aBsABR7NHj0AdFAsAvhCIg42ASIoSM+8IPNxo6qBXEP/cKwWAiweM543gSPNeUWbjXW0D4FUAmjdqia5Kzbgj+ECjWYO+QeyzrRgAvArA4Eed0W34l9twv3j2OLxwd915bYkNgC0AbmKoQ1wg9rj9Vw4AQgAaLuoSw38irwD+LwSrPIcVzqxTPUU/Ka16ALh4UA4pbF6/gkCu0s/+8AEaNkUbp+eBembnXl8++HkF8LYwpHU3fphd3/qMHmMDUDBJKZA1tyOfO7YCdOntWwS8nX4ToMSsAYJzgFl1Eq8APj6UAsf+KRx2PBd6j75jA7A4WSmY8285PlOwFeg8/LcKbzv+MSAhQCMDwRnD/0FeASA0wT7nyusBojcAtgBu+2ArgNt/aAAQAjQjcP6cPcP/AV4B3FZQ1m8CEVQ+j3qU/hSxAVhR7CP8ULlxgK2A4d8kcB0NHrgQoKEAArvhf6MurwD81UAhB/j9efZ6wPBvtwEwIN32gezzrW+FBwCvAjQGIO+8W/3fqdtPATz7VcDOPxlg4IMgsPtQM/xtAGwC3PaBsL5g+AsAbtMGPxDWJ/QyAaBUUhsONNAsCIyi/28JM0UAEAIMfkAvMfwFACHA4Acye4vhLwAIAQY/EBYEDP8J/DGgHocRYFXv8RsGbQBsAZ48mN34gYRLiNu/ACAEGPxA4RAwq98Z/gJAfAgw+IGkIGD4CwDxIcDgB9KCgOEvAMSHAIMf2D0IGP4CgBBwQ2G79QOJ2wDDXwCITsQGP6D3MV367wG4fFr3S3t+TZ6KH0gJAVV6X/TvMLABWFsAw/AHgoOA4S8ACAEAoSHA8BcAokMAAHq9AKAwANDjBQAFAoDeLgAoFAD0dAFAwQCglwsACgcAPVwAUEAAejcCgEIC0LMRABQUgF4tAKCwAPRoAQAFBqA3CwAoNAA9WQBAwQHoxQKAwgNADxYAFCAAeq8AoBAB0HMFAAUJgF4rAChMAPRYAUCBAqC3CgAKFUBP9RGc78VHML1gh48CwOC3AVDAAOidAoBCBkDPFAAUNIBeiQCgsAH0SAQABQ6gN3IKPwWwttD9hACgH2IDoPAB9EAEAAcAQO9DAHAQAPQ8zuI7APUOhO8FAAY/NgAOCIDehgDgoADoaZzAK4D6B8YrAcDgxwbAAQLQuxAAHCQAPYs7eAWw34HySgAw+LEBcMAA9CZsAGwDAAx+bAAcPAA9CBsA2wAAgx8bAAcSQK+xAcA2AMDgtwHAQQXQU2wAsA0ADH5sAHCAAb0DGwBsAwCDHwEAQQAw+KnNKwAHHUBPsAHANgAw+BEAEAQAgx8BAEEAMPjpwXcA0CDA2cYGAGwDwOBHAEDjEATA4EcAQBDwUYDBjwCAIAAY/AgACAKAwY8AgCAATD1/P7598SkgACAIgBs/CACsb0zCABj6CADYCgAGPwIAggBg8CMAIAgABj8CADkNThgAQx8BAFsBMPhBAMBWAAx9EACwFQCDHwQAbAXA0AcBAGEADH0QABAGwNAHAQBhAAx9EAAQBsDQRwDwERDQqAUCDHwQAAhv5MIAhj4IAGjwAoF6AAEADACBwMAHAQAMCKHAsAcBAAwSgcDABwEADJo3BAODHgQAMJiEAsMeBAAwwN43fD6AAAAGYJegYLBDcf8OAIY0abg1lwZRAAAAAElFTkSuQmCC';
      firebase.storage().ref('users').child(user.$id).child('thumb.jpg')
        .putString(imageData, 'base64').then((snapshot) => {
        firebase.storage().ref('users').child(user.$id).child('thumb.jpg').getDownloadURL().then((downloadURL) => {
          user.thumb = downloadURL;
          firebase.firestore().collection('users').doc(user.$id).update(user);
          localStorage.setItem('user', JSON.stringify(user));
        })
      })
    }

    firebase.firestore().collection('users').doc(user.$id).collection('tempConversations').onSnapshot((querySnapshot) => {
      querySnapshot.forEach(convo => {
        firebase.firestore().collection('tempConversations').doc(convo.data().chatId).get().then(conver => {
          this.viewConversation(conver.data(), true);
        })
      })
    })
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
              firebase.firestore().collection('conversations').doc(doc.id).set(convo);
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
