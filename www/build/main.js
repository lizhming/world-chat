webpackJsonp([0],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chats_chats__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__complete_profile_complete_profile__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tempConversation_tempConversation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conversation_conversation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__temp_chat_temp_chat__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__regions_regions__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TabsPage = /** @class */ (function () {
    function TabsPage(modalCtrl, navCtrl, toastCtrl, barcodeScanner) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.barcodeScanner = barcodeScanner;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__chats_chats__["a" /* ChatsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_10__regions_regions__["a" /* RegionsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_9__temp_chat_temp_chat__["a" /* TempChatPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        var user = JSON.parse(localStorage.getItem('user'));
        this.user = user;
        if (!user.complete) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__complete_profile_complete_profile__["a" /* CompleteProfilePage */]);
            modal.onDidDismiss(function (returnUser) {
                user = returnUser;
            });
            modal.present();
        }
        else if (user && !user.thumb) {
            var imageData = 'iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAI27AACNuwGddYGAAAAAIGNIUk0AAG2YAABzjgAA+aUAAITIAAB8VwAA+sEAADB2AAARJBeOCnIAABIcSURBVHja7N3tchRHDAVQdspPTQpSkOK5O/8SjG3Yj+ltte45L5Cwo5Zua9b25fPX75+A8sZm/78Xj2y+H9+++BC424uPAAz2hf8uQQEEADDgfT4CAggAYNjz/mcqFIAAAAa9z18wAAEADHzPSSAAAQAMe89SKAABAAx8bAlAAMAAAIEAAQAMfXhdK8IAAgAY+KgjgQABAAx90mtMGEAAAEMfYQAEADD0EQZAAABDH2EABAAw9BEGQAAAg5+wuhYEEADA0MdWAAQANEOwFQABAEMfbAVAAMDgB1sBEAAw+Hnl4tkKAiAAYPAb6hX/H9WDIIAAgKFPYEO/qJ3TzpYwgACAwW/Qt/+c1JatALMO3eev330KGPwGvdpTe9gAgOar6W73+Q/nUU0iAGDwG/aeUWK9CgIIABj8Bj7BWwJBAAEAg9/Q54NnPILOr9pGAMDgN/AJ3A4IAggAxA9/DZDk7cBwBhAASBr8Gh7CgG0AAgAhg19zQxgQBBAACBn8GhnCgCCAAEDI8Ne0EAbO6wnOkwCAwW/oQ2AYsA0QADD4DX54sE4FAQQADH9DH1uBbXuHMygAYPAb/BC4FbANEAAw/A19CN4K2AYIABj8Bj+EbgVsA5o5fASG/8IGqJEgCOx3DobHZgOAw+jGD5kbAdsAGwAMfzd+CD4ntgE2ADh0bvwQuhGwDbABwPB344fgc2QbYAOAwQ+EbgRsA2wACBz+bvzgnNkGCAAEHSSDH5w7IWBDXgE4PI80IKDGOazaL7wSsAGg0fB34wfn0jZAACBw+APOqBDQgFcADofBDz1DQMWe4pWADQCbDH/rftg7CFQ9v7YBAgDFhz/QZyOg9yEAOABu/WAboAem8x0ARe/GD3nbgEo9yPcCbAAMf8MfCD7ztgECgOH/5CZg+ENuCKh2/oUAAcDwd+sHQnuBECAAGP5u/UBoXxACBADD360fCO0RQsBkfgrA4Ad4r19U6GF+QsAGwPA3/AHbAAQAw9/wB4QABAAF+u6hNfyBbv1ECBAADH+3fiC0twgBAoDhb/gDQgACQHYhWvkDaf1GCBAADH+PAQjtPUKAAGD4AwgBCAD9C87KH6gUAlb3IyFAAIgZ/gC2AUKAAGD4AwgBQsBt/C0Awx/1q+44u1eNxbWubgUAwx/1OPm/pTYRAgQAzdbgp2H4vOf/T93ycx2MhbWpFgUAwx+1tvDfopYFASFAANCQDX8aDvxb/q1qWwgQAgQAzdnwV1fhn4FaFwKEAAFAk9YQ1VLw56PuhQAhYAG/B8Dw5/waGob/XZ8ZOSFAKBcADH/D3xBDcxYC1JkAYPhj8Ps8fZ5CgBAgABj+GFQ+X4QAIUAA6FQA/pqfwYQmzfp+GF1fNgBu/Vw/9A0jTRq9UQDQVBS4OsFzoEGPjK2t1ABg+HPtrR8hACFAANBEDH81AggBAoDGbvi79aNJIwQIABqH4a8+8KwQAgQADcPwd+vHc0MIKMsfA8JNkm7PUPgGGwC3fwz/4O2ALYEtgB4RHAAMfwx/BAEhQK8ICwCGP4Y/H20GEALie8bR+KAb/hj+2AoIAXpH4AbA8MfwRxDQcwkKAEMhYvgjCAgB+khWADD8MfxRL0KA+ggLAIY/mjm2AUKAvhK6ATD8MfxRQ3oyQQHAQQX0FtRFWACw+kfTZnY9qSlbgHZ95mhwMA1/DH/UFkJA4AbA8EeDRo2hVwcFgKGgAFjcs7cNhbsGAMMfNzPUGkJA6AYANGTUHAQFALd/QAjAFiAsABj+aMKoP4SA0A2A4Q8IAejpQQHAIUNNAPpSWACw+sfwRz2yS2/foh68AjD8ASFAjw90OFQKQ6MFhIC8PlU9AGj0gHCKegjdALj9o8ECen5QALD6B4RUdu/9ZevhCD9Ahj+AEBAZArwCwM0K1CqBjuCD4/YPQOwW4PDAAWwBhAAbAAcGzRQgoI8dgR+M2z8Aq2ZDmRBweMBIzaB2yZsRh0MCAHkzL2kD4PYPuOBgVhQKAMMDRfMEwkLA8t7mFwEBQKDVAcDtHwBbgLAAYLULpNDvKFcb3V8BuP0DYIYUCgBW/7g1AULAwl7nS4AAEGhFAHD7B8AWYPEWwAYAoM/lB8oGALd/NEvAFqBA3zs8IADImzHPDABudABQZFZ22gC4/QNg1hQLAG7/AFBoZnbZALj9Axo7Zk6xAKDgAaDY7OywAXD7V/gAZk+xAKCRA0DBGbr7BsDtHwAzKDAAAADFAsDs9b/bPwDdtwDTZqkNAADYALj9A0DCFsAGAABsANz+ASBhC2ADAAA2AG7/AJCwBbABAHguvyGVlhsAt38AbAHCAoBUCwBznTZrd9kAuP0DYAtQcAPg9g8AG20BdtgAuP0DYAtQdAMApZItGAwwPwBo2ACw2WWp+gZAUgZgV6Vn2KMBwO0fADbcAlTeALj9S8wAelrRDQAAsKFHAoD1PwCsdfcsrroBsAYGoIuSM80rAAAIdG8AmLn+d/sHwBZg8ky2AQAAGwAAQAB4n/U/ANSacTfPZhsAALABAAAEgLes/wH0OWrWwE0z2gYAAGwAAAAB4DXrfwCoPfOuntU2AKQdDgAEAAAQANz2ACBk9l0bAIZnBeCywxaumtleAQBAoNUBQCIGINXSGXhNALD+B4C9/HF2ewUAAIFWBgDrf9QHoNcFBgAAoGgA8P4fYONbHtGGDQAAUCIASMMAsHAm2gAAgA3AK97/E5mKQR3TyKi0AXAYAGDxbPQKAAACCQAAIAAAAMkBYNYXAL3/R82gfuG59TJsAAAAAQAABAAAIDoA+AVAANDLWLkB8GUYIImeR+m68QoABwIgkAAAAAIAACAAnMcKF0ii51G+fn4NAH4CAA0VoKexYgMAABQiAACcy7YKAQAAEADAzQqgYADwJ4AB9Dt619KwAQAAGwAAQAAAAAQAKMQ7VtQmnODFR8BG/KZKdqhPQQAbAAcBwx+1CjVnqFcAaKigZgneAChWAAgKqDYAuEmB2iV4AwAaKKhhBAAAQAAANydQywgAAIAA8BG/AwAAis5SGwAqsjJFTcPGGwAAQAAAACoFAKspAMgybAAAIHQDAAAIAACAAAAACAAAgAAAAAgA//FrgAGg8Ey1AQAAGwAAQAAAAAQAAEAAgFl8iRQ1DQIAACAAAAACAAAgAAAAAgAb86Up1DIIAACAAAAACAC0ZXWKGgYBAAAQAAAAAYC2rFBRuyAAAAACAG5SoGZBAAAABAAAQABgc1aqqFUQANBYQY2CAAAACAC4YYHaBAEAjRbUJAgAaLigFkEAQOMFNUigFx8BTRrw8FFg8IMAgCAABj8sCADDQaFAgxYGMPTpYEov8x0AAAgkAACAAAAACACwN+9uUUMgAAAAAgAAhAcAKy4AyHKxAQCA0A0AtE65PgLUDggAAMDkAODXsAJA0VlqAwAANgDQkne5qBkQAAAAAQAABAAAICkAeN9Fd2octQI/1bgNAAAEbwBm8bsAcLMDKDhDbQAAhERsAAAAAQDc8FAbIAAAAAIAANAgAMxaf/lJAKqx6kVNUN2YXes2AAAQvgEANz7UAggAAIAAAG5+qAFoGwAcBgAICLzP2gD4SQDcAAEKzUyvAADhDwIJAGAQAAIAgNAHAsC5fA8AAwHPGorMysPhAIC84OsVAAi/njEEEgDAgAAEAADhDpIDgD8NjEEB8FzT/wSwDQAIAZ4n2AAAGP4gAAAGByAATOB7AAgBeH6weDYeDg4YIp4b5J0DrwAAwx8CrQoAXgNgoOBZwcKZaAMABotnBDYADhNccSacC8Mftj8TNgCA4Q82AE/lewAApFs2C20AAMAG4F1WawCwlz/O7tUbAK8BAEi1dAZ6BQAAga4NAF4DAMAerprZFTYAXgMAkGb57PMKAAACCQAAIAD81szvAXgNAECKmTPv6lltAwAANgAAgADwltcAMP8sAH2VWP/bAACADQAAIAB8zGsAAKg1426ezTYAAGADAAAIAB/zGgAAasy2u2ayDQAA2ABEJCUAiJ9pjwQAvwgFBxpgrbtnsVcAABCocgBwwwJgd2Vn2aMBwGsAAFjjoRlc/RWALQAAbv8FNwC2AACw2e1/hw0AAFB0AzCb1wAA7Kb87DorAHgNAADPccrM3eUVgC0AAG7/BTcAtgAAsMntf6cNgC0AAGZV0Q0AALCJyxjnhpW//v5ndvrxqgEpH72BuL7w49uXU2vcBgAAAs0IALNTuJsXAFG3/xmz1QYAAGwAbAEAoPvt3wYAAGwAbAEAIOH2bwMAADYAkheoO88FUmpudgDwizkAoOAM7fAKQOpHveH5oNYKBgBbAAAoNju7fAlQ6ked4TmhxgoGAFsAACg0Mzv9GKDUj/rC80JtFQwAtgA48HhuUGRWHg48qCkgrx88OwBcPCBAw0Ytrb39d9wAgOGB5whFA4AtAIYGnifqZ+Ht3wYADAvPFWwAbAFA3Xi+kHD7T9gAOOyoFzxn1EqxAOD3AuCg43mTbtksPAL+4Q46f6oPNSIEwIr6WHoR9iVAHHDUAASqEABsAdD4WV0L6oGo23/aBsABR7NHj0AdFAsAvhCIg42ASIoSM+8IPNxo6qBXEP/cKwWAiweM543gSPNeUWbjXW0D4FUAmjdqia5Kzbgj+ECjWYO+QeyzrRgAvArA4Eed0W34l9twv3j2OLxwd915bYkNgC0AbmKoQ1wg9rj9Vw4AQgAaLuoSw38irwD+LwSrPIcVzqxTPUU/Ka16ALh4UA4pbF6/gkCu0s/+8AEaNkUbp+eBembnXl8++HkF8LYwpHU3fphd3/qMHmMDUDBJKZA1tyOfO7YCdOntWwS8nX4ToMSsAYJzgFl1Eq8APj6UAsf+KRx2PBd6j75jA7A4WSmY8285PlOwFeg8/LcKbzv+MSAhQCMDwRnD/0FeASA0wT7nyusBojcAtgBu+2ArgNt/aAAQAjQjcP6cPcP/AV4B3FZQ1m8CEVQ+j3qU/hSxAVhR7CP8ULlxgK2A4d8kcB0NHrgQoKEAArvhf6MurwD81UAhB/j9efZ6wPBvtwEwIN32gezzrW+FBwCvAjQGIO+8W/3fqdtPATz7VcDOPxlg4IMgsPtQM/xtAGwC3PaBsL5g+AsAbtMGPxDWJ/QyAaBUUhsONNAsCIyi/28JM0UAEAIMfkAvMfwFACHA4Acye4vhLwAIAQY/EBYEDP8J/DGgHocRYFXv8RsGbQBsAZ48mN34gYRLiNu/ACAEGPxA4RAwq98Z/gJAfAgw+IGkIGD4CwDxIcDgB9KCgOEvAMSHAIMf2D0IGP4CgBBwQ2G79QOJ2wDDXwCITsQGP6D3MV367wG4fFr3S3t+TZ6KH0gJAVV6X/TvMLABWFsAw/AHgoOA4S8ACAEAoSHA8BcAokMAAHq9AKAwANDjBQAFAoDeLgAoFAD0dAFAwQCglwsACgcAPVwAUEAAejcCgEIC0LMRABQUgF4tAKCwAPRoAQAFBqA3CwAoNAA9WQBAwQHoxQKAwgNADxYAFCAAeq8AoBAB0HMFAAUJgF4rAChMAPRYAUCBAqC3CgAKFUBP9RGc78VHML1gh48CwOC3AVDAAOidAoBCBkDPFAAUNIBeiQCgsAH0SAQABQ6gN3IKPwWwttD9hACgH2IDoPAB9EAEAAcAQO9DAHAQAPQ8zuI7APUOhO8FAAY/NgAOCIDehgDgoADoaZzAK4D6B8YrAcDgxwbAAQLQuxAAHCQAPYs7eAWw34HySgAw+LEBcMAA9CZsAGwDAAx+bAAcPAA9CBsA2wAAgx8bAAcSQK+xAcA2AMDgtwHAQQXQU2wAsA0ADH5sAHCAAb0DGwBsAwCDHwEAQQAw+KnNKwAHHUBPsAHANgAw+BEAEAQAgx8BAEEAMPjpwXcA0CDA2cYGAGwDwOBHAEDjEATA4EcAQBDwUYDBjwCAIAAY/AgACAKAwY8AgCAATD1/P7598SkgACAIgBs/CACsb0zCABj6CADYCgAGPwIAggBg8CMAIAgABj8CADkNThgAQx8BAFsBMPhBAMBWAAx9EACwFQCDHwQAbAXA0AcBAGEADH0QABAGwNAHAQBhAAx9EAAQBsDQRwDwERDQqAUCDHwQAAhv5MIAhj4IAGjwAoF6AAEADACBwMAHAQAMCKHAsAcBAAwSgcDABwEADJo3BAODHgQAMJiEAsMeBAAwwN43fD6AAAAGYJegYLBDcf8OAIY0abg1lwZRAAAAAElFTkSuQmCC';
            __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref('users').child(user.$id).child('thumb.jpg')
                .putString(imageData, 'base64').then(function (snapshot) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref('users').child(user.$id).child('thumb.jpg').getDownloadURL().then(function (downloadURL) {
                    user.thumb = downloadURL;
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').doc(user.$id).update(user);
                    localStorage.setItem('user', JSON.stringify(user));
                });
            });
        }
        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').doc(user.$id).collection('tempConversations').onSnapshot(function (querySnapshot) {
            querySnapshot.forEach(function (convo) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('tempConversations').doc(convo.data().chatId).get().then(function (conver) {
                    _this.viewConversation(conver.data(), true);
                });
            });
        });
    }
    TabsPage.prototype.addTempChat = function () {
        var _this = this;
        var options = {
            prompt: "Scan a Profile Code"
        };
        this.barcodeScanner.scan(options).then(function (barcodeData) {
            if (barcodeData.format == "QR_CODE") {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').where('$id', '==', barcodeData.text).get().then(function (profiles) {
                    if (!profiles.docs.length) {
                        var toast = _this.toastCtrl.create({
                            message: 'User not found.',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                    profiles.forEach(function (profile) {
                        if (!profile.data()) {
                            var toast = _this.toastCtrl.create({
                                message: 'User not found.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else {
                            var user = profile.data();
                            var doc = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('tempConversations').doc();
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').doc(_this.user.$id).collection('tempConversations').doc(doc.id).set({
                                chatId: doc.id
                            });
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').doc(user.$id).collection('tempConversations').doc(doc.id).set({
                                chatId: doc.id
                            });
                            var convo = {
                                $id: doc.id,
                                users: [{
                                        $id: _this.user.$id,
                                        username: _this.user.username,
                                        firstName: _this.user.firstName || '',
                                        lastName: _this.user.lastName || '',
                                        language: _this.user.language
                                    }, {
                                        $id: user.$id,
                                        username: user.username,
                                        firstName: user.firstName || '',
                                        lastName: user.lastName || '',
                                        language: user.language
                                    }],
                                languages: [_this.user.language, user.language],
                                readBy: {}
                            };
                            convo.readBy[_this.user.$id] = _this.user.username;
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(doc.id).set(convo);
                            _this.viewConversation(convo, true);
                        }
                    });
                });
            }
        });
    };
    TabsPage.prototype.viewConversation = function (convo, isTemp) {
        if (isTemp === void 0) { isTemp = false; }
        this.navCtrl.push(isTemp ? __WEBPACK_IMPORTED_MODULE_7__tempConversation_tempConversation__["a" /* TempConversationPage */] : __WEBPACK_IMPORTED_MODULE_8__conversation_conversation__["a" /* ConversationPage */], {
            conversation: convo,
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\tabs\tabs.html"*/'<ion-tabs class="cTabs">\n  <!--<ion-tab [root]="tab1Root" tabTitle="My Status" tabIcon="home"></ion-tab>-->\n  <ion-tab [root]="tab1Root" tabTitle="Messages" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Temp Chat" tabIcon="thunderstorm"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="contacts"></ion-tab>\n<!--  <ion-tab [root]="tab2Root" tabTitle="Regions" tabIcon="jet"></ion-tab>-->\n</ion-tabs>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, ngZone, alertCtrl, loadingCtrl, http, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ngZone = ngZone;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.language = [];
        this.mode = 'login';
        this.emailOrPhone = 'email';
        this.emailOrPhoneforgotpassword = 'email';
        this.apiURL = 'https://us-central1-letstalk-205602.cloudfunctions.net';
        this.Isforgotpasswordcode = 0;
        this.Isforgotpasswordchange = false;
        this.forgotemailorphone = '';
        this.doc_forgot_id = '';
        this.countrycode = '+1';
        this.GetLanguage()
            .subscribe(function (res) {
            _this.language = res;
        });
        if (!JSON.parse(localStorage.getItem('isBrowser'))) {
            this.emailOrPhone = 'phone';
        }
        // console.log(this.emailOrPhone)
        // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: this.emailOrPhone })
    }
    LoginPage.prototype.signIn = function (email, phoneNumber, password) {
        var _this = this;
        if ((email || phoneNumber) && password) {
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.loading.present();
            if (this.emailOrPhone === 'email') {
                // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: 'inside email if' })
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('emailAuths').doc(email).get().then(function (auth) {
                    if (auth && auth.data() && auth.data().password == password) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('users').doc(auth.data().$id).get().then(function (user) {
                            localStorage.setItem('user', JSON.stringify(user.data()));
                            setTimeout(function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                            }, 100);
                        });
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Email or password invalid',
                            buttons: ['Try again']
                        });
                        alert_1.present();
                    }
                }).catch(function (e) {
                    // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: JSON.stringify(e) })
                    var alert = _this.alertCtrl.create({
                        title: 'Oops, something went wrong!',
                        buttons: ['Reload']
                    });
                    alert.onDidDismiss(function () {
                        window.location.reload();
                    });
                    alert.present();
                });
            }
            else {
                // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: 'inside phone if' })
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('phoneAuths').doc(phoneNumber).get().then(function (auth) {
                    if (auth && auth.data() && auth.data().password == password) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('users').doc(auth.data().$id).get().then(function (user) {
                            localStorage.setItem('user', JSON.stringify(user.data()));
                            setTimeout(function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                            }, 100);
                        });
                    }
                    else {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Phone or password invalid',
                            buttons: ['Try again']
                        });
                        alert_2.present();
                    }
                }).catch(function (e) {
                    // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: JSON.stringify(e) })
                    var alert = _this.alertCtrl.create({
                        title: 'Oops, something went wrong!',
                        buttons: ['Reload']
                    });
                    alert.onDidDismiss(function () {
                        window.location.reload();
                    });
                    alert.present();
                });
            }
            this.loading.dismiss();
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'Please Enter an (Email or Phone Number) and a password',
                buttons: ['Dismiss']
            });
            alert_3.present();
        }
    };
    LoginPage.prototype.register = function (internationalPhone, phone, email, password, firstname, lastname) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var results = [];
        var promises = [
            new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('users').where('fullPhone', '==', ('+' + internationalPhone)).get().then(function (profiles) {
                    profiles.forEach(function (profile) {
                        results.push(profile);
                    });
                    resolve();
                });
            }),
            new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('users').where('phone', '==', phone).get().then(function (profiles) {
                    profiles.forEach(function (profile) {
                        results.push(profile);
                    });
                    resolve();
                });
            }),
            new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('users').where('email', '==', ('+' + email)).get().then(function (profiles) {
                    profiles.forEach(function (profile) {
                        results.push(profile);
                    });
                    resolve();
                });
            }),
        ];
        Promise.all(promises).then(function (values) {
            loading.dismiss();
            if (!results.length) {
                var genDoc_1 = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('users').doc();
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('users').doc(genDoc_1.id).set({
                    $id: genDoc_1.id,
                    phone: phone,
                    fullPhone: internationalPhone,
                    email: email
                });
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('phoneAuths').doc(phone).get().then(function (user) {
                    if (!user.data()) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('phoneAuths').doc(phone).set({
                            $id: genDoc_1.id,
                            password: password,
                        });
                    }
                });
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('emailAuths').doc(email).get().then(function (user) {
                    if (!user.data()) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('emailAuths').doc(email).set({
                            $id: genDoc_1.id,
                            password: password,
                        });
                    }
                });
                localStorage.setItem('user', JSON.stringify({
                    $id: genDoc_1.id,
                    email: email,
                    phone: phone,
                    fullPhone: internationalPhone,
                    firstName: firstname,
                    lastName: lastname
                }));
                setTimeout(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }, 100);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'The email or phone number is already registered.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        });
    };
    LoginPage.prototype.verifyCode = function (code) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
        var credential = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].PhoneAuthProvider.credential(this.verificationId, code);
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithCredential(credential).then(function (res) {
            _this.loading.dismiss();
            _this.doLogin();
        });
    };
    LoginPage.prototype.showPrompt = function () {
        var _this = this;
        this.loading.dismiss();
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        return;
                    }
                },
                {
                    text: 'Verify',
                    handler: function (data) {
                        _this.verifyCode(data.code);
                    }
                }
            ]
        });
        prompt.present();
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, 100);
    };
    LoginPage.prototype.slideChanged = function () {
        if (this.slides.isEnd()) {
            //this.skipMsg = "Alright, I got it";
        }
        else {
            //this.skipMsg = "Skip";
        }
    };
    LoginPage.prototype.GetLanguage = function () {
        var msgListUrl = './assets/language/language.json';
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["map"])(function (response) { return response.array; }));
    };
    LoginPage.prototype.generate = function () {
        return Math.floor(Math.random() * 9000) + 1000;
    };
    LoginPage.prototype.forgotpassword = function (email, countrycode, phoneNumber) {
        var _this = this;
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
                var URL_1 = this.apiURL + '/forgotPasswordEmail';
                this.http.post(URL_1, {
                    email: email,
                }).toPromise().then(function (response) {
                    _this.loading.dismiss();
                    if (response.success == true) {
                        _this.forgotemailorphone = email;
                        _this.Isforgotpasswordcode = 1;
                        var toast = _this.toastCtrl.create({
                            message: response.message,
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                    else {
                        var alert_4 = _this.alertCtrl.create({
                            title: response.message,
                            buttons: ['Ok']
                        });
                        alert_4.present();
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else {
                var URL_2 = this.apiURL + '/forgotPasswordPhone';
                this.http.post(URL_2, {
                    phone: countrycode + phoneNumber,
                }).toPromise().then(function (response) {
                    _this.loading.dismiss();
                    if (response.success == true) {
                        _this.forgotemailorphone = countrycode + phoneNumber;
                        _this.Isforgotpasswordcode = 1;
                        var toast = _this.toastCtrl.create({
                            message: response.message,
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                    else {
                        var alert_5 = _this.alertCtrl.create({
                            title: response.message,
                            buttons: ['Ok']
                        });
                        alert_5.present();
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
        else {
            var alert_6 = this.alertCtrl.create({
                title: 'Please Enter an Email or Phone Number',
                buttons: ['Dismiss']
            });
            alert_6.present();
        }
    };
    LoginPage.prototype.verifyforgotcode = function (code) {
        var _this = this;
        if (code) {
            //this.forgotemailorphone = "jaimin.bhanderi@ymail.com";
            //console.log(code);
            //console.log(this.forgotemailorphone);
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.loading.present();
            __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('forgotPasswordTempCodes').where('emailorphone', '==', this.forgotemailorphone).where('forgotPasswordTempCodes', '==', parseInt(code)).where('hasConfirmed', '==', false).get().then(function (querySnapshot) {
                _this.loading.dismiss();
                if (!querySnapshot.empty) {
                    querySnapshot.forEach(function (doc) {
                        //console.log(doc.id, " => ", doc.data());
                        _this.doc_forgot_id = doc.data().$id;
                    });
                    _this.Isforgotpasswordcode = 2;
                    _this.Isforgotpasswordchange = true;
                }
                else {
                    var alert_7 = _this.alertCtrl.create({
                        title: 'Invalid verification code',
                        buttons: ['Dismiss']
                    });
                    alert_7.present();
                }
            });
        }
        else {
            var alert_8 = this.alertCtrl.create({
                title: 'Please Enter your verification code',
                buttons: ['Dismiss']
            });
            alert_8.present();
        }
    };
    LoginPage.prototype.changepassword = function (password, confpassword) {
        if (password && confpassword) {
            if (password == confpassword) {
                this.loading = this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                this.loading.present();
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('forgotPasswordTempCodes').where('$id', '==', this.doc_forgot_id).get().then(function (authpass) {
                    var doc_id;
                    authpass.forEach(function (doc) {
                        doc_id = doc.id;
                    });
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('forgotPasswordTempCodes').doc(doc_id).update({ hasConfirmed: true });
                });
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('emailAuths').where('$id', '==', this.doc_forgot_id).get().then(function (authpass) {
                    var doc_id;
                    authpass.forEach(function (doc) {
                        doc_id = doc.id;
                    });
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('emailAuths').doc(doc_id).update({ password: password });
                });
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('phoneAuths').where('$id', '==', this.doc_forgot_id).get().then(function (authpass) {
                    var doc_id;
                    authpass.forEach(function (doc) {
                        doc_id = doc.id;
                    });
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('phoneAuths').doc(doc_id).update({ password: password });
                });
                this.mode = 'login';
                this.Isforgotpasswordcode = 0;
                this.Isforgotpasswordchange = false;
                this.loading.dismiss();
                var toast = this.toastCtrl.create({
                    message: 'Your password updated successfully',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                var alert_9 = this.alertCtrl.create({
                    title: 'Password and confirm password does not match',
                    buttons: ['Dismiss']
                });
                alert_9.present();
            }
        }
        else {
            var alert_10 = this.alertCtrl.create({
                title: 'Please Enter your password',
                buttons: ['Dismiss']
            });
            alert_10.present();
        }
    };
    LoginPage.prototype.Gotoforgotpassword = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.mode = "forgots";
            _this.emailOrPhoneforgotpassword = 'email';
            _this.Isforgotpasswordcode = 0;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n<!--<ion-navbar>-->\n<!--<ion-title>Login</ion-title>-->\n<!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n<ion-content padding class="login_pg">\n\n  <div style="margin: 0px auto; display: block;" col-xs-12 col-md-6 col-lg-4>\n    <div class="pg_title">WorldChat</div>\n    <img src="assets/imgs/logo.png" class="logo" />\n\n    <!-- Login -->\n    <ion-grid *ngIf="mode == \'login\'">\n\n      <!--<h1 style="width: 100%; text-align: center;">Login with:</h1>-->\n      <ion-list radio-group [(ngModel)]="emailOrPhone" class="emailOrPhone" col-5 col-xl-12 col-sm-12>\n        <ion-item>\n          <ion-label>Email</ion-label>\n          <ion-radio value="email" [checked]="emailOrPhone === \'email\'"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Phone</ion-label>\n          <ion-radio value="phone" [checked]="emailOrPhone === \'phone\'"></ion-radio>\n        </ion-item>\n      </ion-list>\n      <p>&nbsp;</p>\n      <ion-label [style.display]="emailOrPhone === \'phone\' ? \'block\' : \'none\'" class="formControl_lable">Phone\n      </ion-label>\n      <ion-input type="number" class="formControl" placeholder="Phone"\n        [style.display]="emailOrPhone === \'phone\' ? \'block\' : \'none\'" [(ngModel)]="phone"></ion-input>\n      <ion-label [style.display]="emailOrPhone === \'email\' ? \'block\' : \'none\'" class="formControl_lable">Email\n      </ion-label>\n      <ion-input type="email" class="formControl" placeholder="hello@email.com"\n        [style.display]="emailOrPhone === \'email\' ? \'block\' : \'none\'" [(ngModel)]="email"></ion-input>\n      <p></p>\n      <ion-label class="formControl_lable">Password</ion-label>\n      <ion-input type="password" class="formControl" placeholder="At least 6 characters" [(ngModel)]="password"\n        (keyup.enter)="signIn(email, phone, password)"></ion-input>\n    </ion-grid>\n    <!-- End Login -->\n\n    <!-- <span *ngIf="mode !== \'login\'">\n        <p>International Phone Number</p>\n        <int-phone-prefix defaultCountry="us" [(ngModel)]="phoneNumber"></int-phone-prefix>\n        <p>Local Phone Number</p>\n      </span> -->\n\n    <!-- Register -->\n    <span *ngIf="mode !== \'login\' && mode !== \'forgots\'">\n\n      <ion-label class="formControl_lable">Phone</ion-label>\n      <div class="phoneGroup">\n        <int-phone-prefix class="telCode" defaultCountry="us" [(ngModel)]="phoneNumber"></int-phone-prefix>\n        <!-- <ion-input type="number" class="formControl" placeholder="Please Enter Number" [(ngModel)]="phone" (keyup)="phoneNumber = phone"></ion-input> -->\n        <ion-input type="number" class="formControl" placeholder="Please Enter Number" [(ngModel)]="phone"></ion-input>\n      </div>\n      <ion-label class="formControl_lable" margin-top>Email</ion-label>\n      <ion-input type="email" class="formControl" placeholder="hello@email.com" [(ngModel)]="email"></ion-input>\n      <ion-label class="formControl_lable" margin-top>Password</ion-label>\n      <ion-input type="password" class="formControl" placeholder="At least 6 characters" [(ngModel)]="password">\n      </ion-input>\n      <ion-label class="formControl_lable" margin-top>First Name</ion-label>\n      <ion-input type="text" class="formControl" placeholder="John" [(ngModel)]="firstname"></ion-input>\n      <ion-label class="formControl_lable" margin-top>Last Name</ion-label>\n      <ion-input type="text" class="formControl" placeholder="Legend" [(ngModel)]="lastname"></ion-input>\n    </span>\n    <!-- End Register -->\n\n    <!-- forgotpassword password -->\n    <ion-grid *ngIf="mode !== \'login\' && mode !== \'register\'">\n\n      <div *ngIf="Isforgotpasswordcode==0">\n        <ion-list radio-group [(ngModel)]="emailOrPhoneforgotpassword" class="emailOrPhone" col-5 col-xl-12 col-sm-12>\n          <ion-item>\n            <ion-label>Email</ion-label>\n            <ion-radio value="email" [checked]="emailOrPhoneforgotpassword === \'email\'"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Phone</ion-label>\n            <ion-radio value="phone" [checked]="emailOrPhoneforgotpassword === \'phone\'"></ion-radio>\n          </ion-item>\n        </ion-list>\n        <p>&nbsp;</p>\n        <ion-label [style.display]="emailOrPhoneforgotpassword === \'phone\' ? \'block\' : \'none\'"\n          class="formControl_lable">\n          Phone\n        </ion-label>\n        <div class="phoneGroup">\n          <int-phone-prefix class="telCode" defaultCountry="us" [(ngModel)]="countrycode"\n            [style.display]="emailOrPhoneforgotpassword === \'phone\' ? \'block\' : \'none\'"></int-phone-prefix>\n          <ion-input type="number" class="formControl" placeholder="Please Enter Number"\n            [style.display]="emailOrPhoneforgotpassword === \'phone\' ? \'block\' : \'none\'" [(ngModel)]="forgotphone">\n          </ion-input>\n        </div>\n        <ion-label [style.display]="emailOrPhoneforgotpassword === \'email\' ? \'block\' : \'none\'"\n          class="formControl_lable">\n          Email\n        </ion-label>\n        <ion-input type="email" class="formControl" placeholder="Email"\n          [style.display]="emailOrPhoneforgotpassword === \'email\' ? \'block\' : \'none\'" [(ngModel)]="forgotemail">\n        </ion-input>\n        <br />\n        <div text-center>\n          <button text-center ion-button clear (click)="forgotpassword(forgotemail,countrycode,forgotphone)"\n            class="btnWhite">Submit</button>\n          <p></p>\n          <button text-center ion-button clear (click)="mode = \'login\'" class="btnLink">Back to login</button>\n        </div>\n      </div>\n\n      <div *ngIf="Isforgotpasswordcode==1">\n        <ion-label class="formControl_lable">\n          Code\n        </ion-label>\n        <ion-input type="number" class="formControl" placeholder="Enter your code" [(ngModel)]="forgotcode">\n        </ion-input>\n        <br />\n        <div text-center>\n          <button text-center ion-button clear (click)="verifyforgotcode(forgotcode)" class="btnWhite">Next</button>\n          <p></p>\n          <button text-center ion-button clear (click)="mode = \'login\'" class="btnLink">Back to login</button>\n        </div>\n      </div>\n\n      <div *ngIf="Isforgotpasswordchange==true">\n        <ion-label class="formControl_lable">New Password</ion-label>\n        <ion-input type="password" class="formControl" placeholder="At least 6 characters" [(ngModel)]="newpassword">\n        </ion-input>\n        <p></p>\n        <ion-label class="formControl_lable">Confirm Password</ion-label>\n        <ion-input type="password" class="formControl" placeholder="Confirm Password" [(ngModel)]="confpassword">\n        </ion-input>\n        <br />\n        <div text-center>\n          <button text-center ion-button clear (click)="changepassword(newpassword,confpassword)"\n            class="btnWhite">Save</button>\n        </div>\n      </div>\n\n\n\n    </ion-grid>\n    <!--End forgotpassword password -->\n\n\n    <br />\n\n    <!-- login section -->\n    <div text-center *ngIf="mode === \'login\'">\n      <button text-center ion-button clear (click)="signIn(email, phone, password)" class="btnWhite">Login</button>\n      <!-- <ion-label stacked>OR</ion-label> -->\n      <p></p>\n      <button text-center ion-button clear (click)="mode = \'register\'" class="btnLink">Don\'t Have an Account?</button>\n      <button text-center ion-button clear (click)="Gotoforgotpassword()" class="btnLink">Forgot your password?</button>\n    </div>\n    <!-- End login section -->\n\n    <!-- Register section -->\n    <div text-center *ngIf="mode !== \'login\' && mode !== \'forgots\'">\n      <button text-center ion-button clear (click)="register(phoneNumber, phone, email, password, firstname, lastname)"\n        class="btnWhite">Register</button>\n      <!-- <ion-label stacked>OR</ion-label> -->\n      <p></p>\n      <button text-center ion-button clear (click)="mode = \'login\'" class="btnLink">Already Have an Account?</button>\n    </div>\n    <!-- End Register section -->\n\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatService = /** @class */ (function () {
    function ChatService(http, events) {
        this.http = http;
        this.events = events;
    }
    ChatService.prototype.mockNewMsg = function (msg) {
        var _this = this;
        var mockMsg = {
            messageId: Date.now().toString(),
            userId: '210000198410281948',
            userName: 'Admin',
            userAvatar: './assets/user.png',
            toUserId: '140000198202211138',
            time: Date.now(),
            message: msg.message,
            status: 'success'
        };
        setTimeout(function () {
            _this.events.publish('chat:received', mockMsg, Date.now());
        }, Math.random() * 1800);
    };
    ChatService.prototype.getMsgList = function () {
        var msgListUrl = './assets/mock/msg-list.json';
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (response) { return response.array; }));
    };
    ChatService.prototype.sendMsg = function (msg) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(msg); }, Math.random() * 1000); })
            .then(function () { return _this.mockNewMsg(msg); });
    };
    ChatService.prototype.getUserInfo = function () {
        var userInfo = {
            id: '140000198202211138',
            name: 'User',
            avatar: './assets/to-user.png'
        };
        return new Promise(function (resolve) { return resolve(userInfo); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conversation_conversation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_modal_contact_modal_contact__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__start_group_chat_start_group_chat__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tempConversation_tempConversation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twilioConversation_twilioConversation__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







// import { SMS } from '@ionic-native/sms';




var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl, modalCtrl, alertCtrl, toastCtrl, loadingCtrl, 
        // private sms: SMS,
        barcodeScanner, ngZone, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.ngZone = ngZone;
        this.platform = platform;
        this.searchQuery = '';
        this.chats = [];
        this.hasLoadedChats = false;
        this.isBrowser = false;
        this.isWorldChatPremiumAccount = false;
        this.isBrowser = JSON.parse(localStorage.getItem('isBrowser'));
        this.ngZone.run(function () {
            _this.user = JSON.parse(localStorage.getItem('user'));
            if (_this.user.status == "active") {
                _this.isWorldChatPremiumAccount = true;
            }
        });
        // this.initializeItems();
    }
    ChatsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.user = JSON.parse(localStorage.getItem('user'));
        });
        setTimeout(function () {
            var objDiv;
            if (JSON.parse(localStorage.getItem('isBrowser'))) {
                objDiv = document.getElementsByClassName('scroll-content')[0];
                if (!objDiv)
                    return;
                objDiv.scrollTop = objDiv.scrollHeight;
            }
            else if (_this.content && _this.content.scrollToBottom) {
                // objDiv = document.getElementsByClassName('scroll-content')[0];
                // if (!objDiv) return;
                // objDiv.scrollTop = objDiv.scrollHeight;
                _this.content.scrollToTop();
            }
        }, 200);
    };
    ChatsPage.prototype.ionViewDidLoad = function () {
        this.initializeItems();
    };
    ChatsPage.prototype.initializeItems = function () {
        var _this = this;
        var isFirstTime = true;
        var loading = this.loadingCtrl.create({
            content: 'Gathering messages..'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(this.user.$id).collection('conversations').onSnapshot(function (conversations) {
            _this.initializeTwillioItems();
            conversations.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('conversations').doc(change.doc.data().chatId).onSnapshot(function (newChat) {
                        var isInChat = false;
                        _this.chats.forEach(function (chat, i) {
                            if (chat && newChat.data() && chat.$id === newChat.data().$id) {
                                isInChat = true;
                                _this.chats.splice(i, 1);
                                _this.addToChats(newChat.data());
                            }
                        });
                        if (!isInChat) {
                            _this.addToChats(newChat.data());
                            if (!_this.hasLoadedChats) {
                                _this.hasLoadedChats = true;
                            }
                        }
                    });
                }
                if (change.type === "modified") {
                    // firebase.firestore().collection('conversations').doc(change.doc.data().chatId).get().then((newChat: any) => {
                    //   this.chats.forEach((chat, i) => {
                    //     if (chat.$id === change.doc.data().chatId) {
                    //       this.chats[i] = newChat;
                    //     }
                    //   })
                    // });
                }
                if (change.type === "removed") {
                    _this.chats.forEach(function (chat, i) {
                        if (chat && change.doc.data() && chat.$id === change.doc.data().chatId) {
                            _this.chats.splice(i, 1);
                        }
                    });
                }
            });
            if (isFirstTime) {
                isFirstTime = false;
                loading.dismiss();
            }
        });
    };
    ChatsPage.prototype.initializeTwillioItems = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(this.user.$id).collection('twilioConversations').onSnapshot(function (conversations) {
            conversations.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc(change.doc.data().chatId).onSnapshot(function (newChat) {
                        var isInChat = false;
                        _this.chats.forEach(function (chat, i) {
                            if (chat && newChat.data() && chat.$id === newChat.data().$id) {
                                isInChat = true;
                                _this.chats.splice(i, 1);
                                _this.addToTwillioChats(newChat.data());
                            }
                        });
                        if (!isInChat) {
                            _this.addToTwillioChats(newChat.data());
                            if (!_this.hasLoadedChats) {
                                _this.hasLoadedChats = true;
                            }
                        }
                    });
                }
                if (change.type === "modified") {
                    // firebase.firestore().collection('conversations').doc(change.doc.data().chatId).get().then((newChat: any) => {
                    //   this.chats.forEach((chat, i) => {
                    //     if (chat.$id === change.doc.data().chatId) {
                    //       this.chats[i] = newChat;
                    //     }
                    //   })
                    // });
                }
                if (change.type === "removed") {
                    _this.chats.forEach(function (chat, i) {
                        if (chat && change.doc.data() && chat.$id === change.doc.data().chatId) {
                            _this.chats.splice(i, 1);
                        }
                    });
                }
            });
        });
    };
    ChatsPage.prototype.addToChats = function (chat) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userData;
            return __generator(this, function (_a) {
                if (!chat)
                    return [2 /*return*/];
                if (chat && chat.users) {
                    chat.users.forEach(function (user, i) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(user.$id).get()];
                                case 1:
                                    userData = _a.sent();
                                    chat.users[i].firstName = userData.data().firstName || null;
                                    chat.users[i].lastName = userData.data().lastName || null;
                                    chat.users[i].thumb = userData.data().thumb || '';
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                this.ngZone.run(function () {
                    _this.chats.unshift(chat);
                    _this.chats = _this.chats.sort(function (a, b) {
                        if (!a.lastMessage) {
                            a.lastMessage = {
                                time: Date.now(),
                            };
                        }
                        if (!b.lastMessage) {
                            b.lastMessage = {
                                time: Date.now(),
                            };
                        }
                        return b.lastMessage.time - a.lastMessage.time;
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ChatsPage.prototype.addToTwillioChats = function (chat) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!chat)
                    return [2 /*return*/];
                if (chat && chat.users) {
                    chat.users.forEach(function (user, i) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (user.phoneno != this.user.twilio_phone_number) {
                                chat.users[i].firstName = '';
                                chat.users[i].lastName = '';
                                chat.users[i].thumb = '';
                                chat.users[i].twillioChat = true;
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                this.ngZone.run(function () {
                    _this.chats.unshift(chat);
                    _this.chats = _this.chats.sort(function (a, b) {
                        if (!a.lastMessage) {
                            a.lastMessage = {
                                time: Date.now(),
                            };
                        }
                        if (!b.lastMessage) {
                            b.lastMessage = {
                                time: Date.now(),
                            };
                        }
                        return b.lastMessage.time - a.lastMessage.time;
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ChatsPage.prototype.isEquivalent = function (a, b) {
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        if (aProps.length != bProps.length) {
            return false;
        }
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
    };
    // getItems(ev: any) {
    //
    //   this.initializeItems();
    //   const val = ev.target.value;
    //
    //   // if the value is an empty string don't filter the items
    //   if (val && val.trim() != '') {
    //     this.chats = this.chats.filter((item) => {
    //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //     })
    //   }
    // }
    ChatsPage.prototype.newConversation = function (user) {
        var doc = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('conversations').doc();
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(this.user.$id).collection('conversations').doc(doc.id).set({
            chatId: doc.id
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(user.$id).collection('conversations').doc(doc.id).set({
            chatId: doc.id
        });
        var convo = {
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
        };
        convo.readBy[this.user.$id] = this.user.username;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('conversations').doc(doc.id).set(convo);
        this.viewConversation(convo);
    };
    ChatsPage.prototype.viewConversation = function (convo, isTemp) {
        if (isTemp === void 0) { isTemp = false; }
        this.selectedConversation = null;
        if (this.isBrowser) {
            this.selectedConversation = convo;
        }
        else {
            if (!convo.users[1].twillioChat) {
                this.navCtrl.push(isTemp ? __WEBPACK_IMPORTED_MODULE_7__tempConversation_tempConversation__["a" /* TempConversationPage */] : __WEBPACK_IMPORTED_MODULE_2__conversation_conversation__["a" /* ConversationPage */], {
                    conversation: convo,
                });
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__twilioConversation_twilioConversation__["a" /* TwilioConversationPage */], {
                    conversation: convo
                });
            }
        }
    };
    ChatsPage.prototype.addByGroupChat = function (fab) {
        fab.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__start_group_chat_start_group_chat__["a" /* StartGroupChatPage */]);
    };
    ChatsPage.prototype.addByUsername = function (fab) {
        var _this = this;
        fab.close();
        var alert = this.alertCtrl.create({
            title: 'Start a conversation',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Enter Username'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (!data.username) {
                            return;
                        }
                        if (data.username.toLowerCase() == _this.user.username) {
                            var toast = _this.toastCtrl.create({
                                message: 'You cannot start a chat with yourself.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return;
                        }
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').where('username', '==', data.username.toLowerCase()).get().then(function (profiles) {
                            if (!profiles.docs.length) {
                                var toast = _this.toastCtrl.create({
                                    message: 'User not found.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            profiles.forEach(function (profile) {
                                if (!profile.data()) {
                                    var toast = _this.toastCtrl.create({
                                        message: 'User not found.',
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                }
                                else {
                                    _this.newConversation(profile.data());
                                }
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    // addByContacts(fab: FabContainer) {
    //   fab.close();
    //   let myModal = this.modalCtrl.create(ModalContactPage);
    //   myModal.onDidDismiss(data => {
    //     if (data) {
    //       if (data == this.user.phone) {
    //         let toast = this.toastCtrl.create({
    //           message: 'You cannot start a chat with yourself.',
    //           duration: 3000,
    //           position: 'bottom'
    //         });
    //         toast.present();
    //         return;
    //       }
    //       let loading = this.loadingCtrl.create({
    //         content: 'Searching for user...'
    //       });
    //       loading.present();
    //       let results = [];
    //       let promises = [
    //         new Promise((resolve, reject) => {
    //           firebase.firestore().collection('users').where('fullPhone', '==', ('+' + data)).get().then((profiles: any) => {
    //             profiles.forEach(profile => {
    //               results.push(profile);
    //             })
    //             resolve();
    //           })
    //         }),
    //         new Promise((resolve, reject) => {
    //           firebase.firestore().collection('users').where('phone', '==', data).get().then((profiles: any) => {
    //             profiles.forEach(profile => {
    //               results.push(profile);
    //             })
    //             resolve();
    //           })
    //         })
    //       ]
    //       Promise.all(promises).then(values => {
    //         loading.dismiss();
    //         if (!results.length) {
    //           this.sms.send(data.toString() + ' ', (this.user.firstName || this.user.username) + ' invited you to download World Chat! Android: https://play.google.com/store/apps/details?id=com.letschat.mobile')
    //           let toast = this.toastCtrl.create({
    //             message: 'User not found.',
    //             duration: 3000,
    //             position: 'bottom'
    //           });
    //           toast.present();
    //           return;
    //         }
    //         results.forEach(profile => {
    //           if (!profile.data()) {
    //             let toast = this.toastCtrl.create({
    //               message: 'User not found.',
    //               duration: 3000,
    //               position: 'bottom'
    //             });
    //             toast.present();
    //           } else if (profile.data().username == this.user.username) {
    //             let toast = this.toastCtrl.create({
    //               message: 'You cannot start a chat with yourself.',
    //               duration: 3000,
    //               position: 'bottom'
    //             });
    //             toast.present();
    //             return;
    //           } else {
    //             this.newConversation(profile.data());
    //           }
    //         })
    //       })
    //     }
    //   });
    //   myModal.present();
    // }
    ChatsPage.prototype.addByContacts = function (fab) {
        var _this = this;
        fab.close();
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_modal_contact_modal_contact__["a" /* ModalContactPage */]);
        myModal.onDidDismiss(function (data) {
            //const data = "+15109440279";
            //alert(data);
            if (data) {
                if (data == _this.user.phone) {
                    // alert('You cannot start a chat with yourself.');
                    // return;
                    var toast = _this.toastCtrl.create({
                        message: 'You cannot start a chat with yourself.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    return;
                }
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Searching for user...'
                });
                loading_1.present();
                var results_1 = [];
                var promises = [
                    new Promise(function (resolve, reject) {
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').where('fullPhone', '==', ('+' + data)).get().then(function (profiles) {
                            profiles.forEach(function (profile) {
                                results_1.push(profile);
                            });
                            resolve();
                        });
                    }),
                    new Promise(function (resolve, reject) {
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').where('phone', '==', data).get().then(function (profiles) {
                            profiles.forEach(function (profile) {
                                results_1.push(profile);
                            });
                            resolve();
                        });
                    })
                ];
                Promise.all(promises).then(function (values) {
                    loading_1.dismiss();
                    if (results_1.length > 0) {
                        results_1.forEach(function (profile) {
                            if (!profile.data()) {
                                var toast = _this.toastCtrl.create({
                                    message: 'User not found.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                                alert('User not found.');
                            }
                            else if (profile.data().username == _this.user.username) {
                                var toast = _this.toastCtrl.create({
                                    message: 'You cannot start a chat with yourself.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                                return;
                            }
                            else {
                                _this.newConversation(profile.data());
                            }
                        });
                    }
                    else {
                        _this.newPhoneConversation(data);
                    }
                });
            }
        });
        myModal.present();
    };
    ChatsPage.prototype.newPhoneConversation = function (toPhoneNo) {
        var doc = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc();
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(this.user.$id).collection('twilioConversations').doc(doc.id).set({
            chatId: doc.id
        });
        var convo = {
            $id: doc.id,
            users: [{
                    $id: this.user.$id,
                    phoneno: this.user.twilio_phone_number,
                    firstName: this.user.firstName || '',
                    lastName: this.user.lastName || '',
                    language: this.user.language,
                    username: this.user.username
                }, {
                    $id: '',
                    phoneno: toPhoneNo,
                    firstName: '',
                    lastName: '',
                    language: '',
                    username: toPhoneNo
                }],
            languages: [this.user.language, ''],
            readBy: {}
        };
        convo.readBy[this.user.$id] = this.user.username;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc(doc.id).set(convo);
        //this.viewConversation(convo);
    };
    ChatsPage.prototype.addTempChat = function () {
        var _this = this;
        var options = {
            prompt: "Scan a Profile Code"
        };
        this.barcodeScanner.scan(options).then(function (barcodeData) {
            if (barcodeData.format == "QR_CODE") {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').where('$id', '==', barcodeData.text).get().then(function (profiles) {
                    if (!profiles.docs.length) {
                        var toast = _this.toastCtrl.create({
                            message: 'User not found.',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                    profiles.forEach(function (profile) {
                        if (!profile.data()) {
                            var toast = _this.toastCtrl.create({
                                message: 'User not found.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else {
                            var user = profile.data();
                            var doc = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc();
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(_this.user.$id).collection('tempConversations').doc(doc.id).set({
                                chatId: doc.id
                            });
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(user.$id).collection('tempConversations').doc(doc.id).set({
                                chatId: doc.id
                            });
                            var convo = {
                                $id: doc.id,
                                users: [{
                                        $id: _this.user.$id,
                                        username: _this.user.username,
                                        firstName: _this.user.firstName || '',
                                        lastName: _this.user.lastName || '',
                                        language: _this.user.language
                                    }, {
                                        $id: user.$id,
                                        username: user.username,
                                        firstName: user.firstName || '',
                                        lastName: user.lastName || '',
                                        language: user.language
                                    }],
                                languages: [_this.user.language, user.language],
                                readBy: {}
                            };
                            convo.readBy[_this.user.$id] = _this.user.username;
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('conversations').doc(doc.id).set(convo);
                            _this.viewConversation(convo, true);
                        }
                    });
                });
            }
        });
    };
    ChatsPage.prototype.deleteChat = function (chat, i) {
        if (!chat.users[1].twillioChat) {
            this.chats.splice(i, 1);
            if (!chat.media)
                chat.media = [];
            chat.media.forEach(function (media) {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref('conversations').child(chat.$id).child(media.fileName).delete();
            });
            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('conversations').doc(chat.$id).delete();
            chat.users.forEach(function (user) {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(user.$id).collection('conversations').doc(chat.$id).delete();
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc(chat.$id).delete();
            chat.users.forEach(function (user) {
                if (user.$id != null && user.$id != '' && user.$id != undefined) {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(user.$id).collection('twilioConversations').doc(chat.$id).delete();
                }
            });
        }
    };
    ChatsPage.prototype.viewProfile = function () {
        var _this = this;
        this.selectedConversation = null;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__profile_profile__["a" /* ProfilePage */]);
        myModal.onDidDismiss(function (data) {
            _this.ngZone.run(function () {
                _this.user = JSON.parse(localStorage.getItem('user'));
            });
        });
        myModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChatsPage.prototype, "content", void 0);
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chats',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\chats\chats.html"*/'<div class="profile-tab" *ngIf="isBrowser">\n\n  <img class="user-img self-img" [src]="user?.thumb || \'assets/imgs/nopic-profile.png\'" imageViewer\n\n    onerror="this.src = \'assets/imgs/nopic-profile.png\'">\n\n  <h3>{{user?.firstName}} {{user?.lastName}}</h3>\n\n  <button (click)="viewProfile();">View Profile</button>\n\n</div>\n\n\n\n<!-- <div class="chats-tab"> -->\n\n  <ion-header class="cHeader">\n\n    <ion-navbar>\n\n      <ion-title align-title="center">\n\n        Messages\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-fab class="cFab" top right #fab>\n\n      <button ion-fab mini>\n\n        <ion-icon name="add" role="img" class="icon icon-ios ion-ios-add" aria-label="add"></ion-icon>\n\n      </button>\n\n      <ion-fab-list side="bottom">\n\n        <!-- <button ion-button (click)="addByContacts(fab)" *ngIf="!isBrowser && !isWorldChatPremiumAccount">\n\n          Contacts <ion-icon name="contacts" style="padding-left: 5px;"></ion-icon>\n\n        </button> -->\n\n        <button ion-button (click)="addByContacts(fab)" *ngIf="!isBrowser">\n\n          Contacts <ion-icon name="contacts" style="padding-left: 5px;"></ion-icon>\n\n        </button>\n\n        <button ion-button (click)="addByUsername(fab)">\n\n          Username <ion-icon name="person-add" style="padding-left: 5px;"></ion-icon>\n\n        </button>\n\n        <button ion-button (click)="addByGroupChat(fab)">\n\n          Group Chat <ion-icon name="people" style="padding-left: 5px;"></ion-icon>\n\n        </button>\n\n      </ion-fab-list>\n\n    </ion-fab>\n\n  </ion-header>\n\n\n\n  <ion-content padding>\n\n    <!--<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>-->\n\n\n\n    <div *ngIf="!chats || !chats.length">\n\n      <br>\n\n      <br>\n\n      <br>\n\n      <h4 text-center class="infoMsg">No conversations yet</h4>\n\n    </div>\n\n    <ion-list *ngIf="hasLoadedChats">\n\n      <ion-item-sliding *ngFor="let chat of chats; index as i" #item [class.hasBeenRead]="chat.readBy[user?.$id]">\n\n        <ion-item (click)="viewConversation(chat)" *ngIf="chat"\n\n          [class.multi-container]="chat?.users && chat?.users.length > 2">\n\n          <!--<ion-avatar item-left>-->\n\n          <!--<img src="./assets/user.png">-->\n\n          <!--</ion-avatar>-->\n\n          <ion-row>\n\n            <ion-col class="first-col" *ngIf="chat?.users && chat?.users.length < 3">\n\n              <img class="user-img" [src]="chat?.users[0].thumb || \'assets/imgs/nopic-profile.png\'" imageViewer\n\n                onerror="this.src = \'assets/imgs/nopic-profile.png\'">\n\n            </ion-col>\n\n            <ion-col class="first-col multi-users" *ngIf="chat?.users && chat?.users.length > 2"\n\n              style="overflow: visible;">\n\n              <img class="user-img" [src]="chat?.users[0].thumb || \'assets/imgs/nopic-profile.png\'" imageViewer\n\n                onerror="this.src = \'assets/imgs/nopic-profile.png\'"\n\n                style="position: absolute; z-index: 999; top: 8px; left: 0px; width: 35px; height: 35px;">\n\n              <img class="user-img" [src]="chat?.users[1].thumb || \'assets/imgs/nopic-profile.png\'" imageViewer\n\n                onerror="this.src = \'assets/imgs/nopic-profile.png\'"\n\n                style="position: absolute; top: -8px; left: 0px; width: 35px; height: 35px;">\n\n              <img class="user-img" [src]="chat?.users[2].thumb || \'assets/imgs/nopic-profile.png\'" imageViewer\n\n                onerror="this.src = \'assets/imgs/nopic-profile.png\'"\n\n                style="position: absolute; left: 15px; width: 35px; height: 35px;">\n\n            </ion-col>\n\n            <ion-col class="second-col" style="overflow-x: hidden;">\n\n              <span class="chat-title">\n\n                <span *ngFor="let chatUser of chat.users">\n\n                  <span *ngIf="chatUser?.username !== user?.username">\n\n                    {{chatUser?.firstName || chatUser?.username}} <span\n\n                      *ngIf="chatUser?.firstName">{{chatUser?.lastName}}</span>\n\n                  </span>\n\n                </span>\n\n              </span>\n\n              <span class="chat-last-time" *ngIf="chat?.lastMessage">\n\n                {{chat?.lastMessage?.time | dayOrTime}}\n\n              </span>\n\n              <span class="chat-last-message" *ngIf="chat?.lastMessage?.type && chat?.lastMessage?.type === \'image\'">\n\n                image.jpg\n\n              </span>\n\n              <span class="chat-last-message"\n\n                *ngIf="chat?.lastMessage?.message && (!chat?.lastMessage?.type || chat?.lastMessage?.type === \'text\')">\n\n                {{chat?.lastMessage?.message[user?.language] || \'Click to translate\'}}\n\n              </span>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n        <ion-item-options side="right">\n\n          <button ion-button color="danger" (click)="deleteChat(chat, i)">Delete</button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </ion-content>\n\n<!-- </div> -->\n\n\n\n\n\n<div class="web-navbar">\n\n\n\n</div>\n\n<div class="message-view" *ngIf="selectedConversation">\n\n  <page-conversation [conversation]="selectedConversation"></page-conversation>\n\n</div>\n\n\n\n<div class="message-view message-view-no-chats" *ngIf="!selectedConversation && isBrowser">\n\n  <img src="assets/imgs/logo.png" class="logo" />\n\n  <h1>Welcome to World Chat!</h1>\n\n  <h2>Version 0.34</h2>\n\n  <br>\n\n  <p>Contact us with any questions or concerns:</p>\n\n  <p style="margin-bottom: 7.5px;">Email: TheExhibitionOnTour@gmail.com</p>\n\n  <p style="margin-top: 0px;">Phone: (816) 716-7156</p>\n\n</div>'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the ProfileModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileModalPage = /** @class */ (function () {
    function ProfileModalPage(navCtrl, navParams, viewCtrl, camera, actionSheetCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.language = [];
        this.GetLanguage()
            .subscribe(function (res) {
            _this.language = res;
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        this.originalUser = Object.assign({}, this.user);
        if (!this.user.thumb) {
            this.user.thumb = 'assets/imgs/nopic-profile.png';
        }
        this.lang = this.user.language;
    }
    ProfileModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileModalPage');
        // this.takePhoto(1);
    };
    ProfileModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ProfileModalPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Take Photo',
                    //role: 'destructive',
                    handler: function () {
                        _this.takePhoto(1);
                    }
                },
                {
                    text: 'Add Photo',
                    handler: function () {
                        _this.takePhoto(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    //take Photo
    ProfileModalPage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var self = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // this.base64Image = 'data:image/jpeg;base64,' + imageData;
            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('users').child(_this.user.$id).child('thumb.jpg')
                .putString(imageData, 'base64').then(function (snapshot) {
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('users').child(self.user.$id).child('thumb.jpg').getDownloadURL().then(function (downloadURL) {
                    self.user.thumb = downloadURL;
                    self.saveProfile();
                }).catch(function (e) {
                    __WEBPACK_IMPORTED_MODULE_5_firebase__["firestore"]().collection('testing').add({ downloadUrlPictureError: e });
                });
            }).catch(function (e) {
                __WEBPACK_IMPORTED_MODULE_5_firebase__["firestore"]().collection('testing').add({ savePictureError: e });
            });
        }, function (err) {
            // Handle error
            __WEBPACK_IMPORTED_MODULE_5_firebase__["firestore"]().collection('testing').add({ getPictureError: err });
        });
    };
    ProfileModalPage.prototype.saveProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, oldUserPhoneAuth, oldUserFullPhoneAuth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.originalUser.email && this.user.email)) return [3 /*break*/, 4];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5_firebase__["firestore"]().collection('emailAuths').doc(this.user.email).get()];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5_firebase__["firestore"]().collection('phoneAuths').doc(this.user.phone).get()];
                    case 2:
                        oldUserPhoneAuth = _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5_firebase__["firestore"]().collection('phoneAuths').doc(this.user.fullPhone).get()];
                    case 3:
                        oldUserFullPhoneAuth = _a.sent();
                        if (!user.data()) {
                            __WEBPACK_IMPORTED_MODULE_5_firebase__["firestore"]().collection('emailAuths').doc(this.user.email).set({
                                $id: this.user.$id,
                                password: oldUserPhoneAuth.data() ? oldUserPhoneAuth.data().password : oldUserFullPhoneAuth.data().password,
                            });
                            this.originalUser = this.user;
                        }
                        else {
                            return [2 /*return*/, alert('Email Taken')];
                        }
                        _a.label = 4;
                    case 4:
                        this.user.language = this.lang;
                        localStorage.setItem('user', JSON.stringify(this.user));
                        __WEBPACK_IMPORTED_MODULE_5_firebase__["firestore"]().collection('users').doc(this.user.$id).update(this.user);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileModalPage.prototype.GetLanguage = function () {
        var msgListUrl = './assets/language/language.json';
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["map"])(function (response) { return response.array; }));
    };
    ProfileModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile-modal',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\profile-modal\profile-modal.html"*/'<!--\n  Generated template for the ProfileModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()" class="btnClose"><ion-icon slot="icon-only" ios="ios-close-circle" md="md-close-circle"></ion-icon></button>\n    </ion-buttons>\n    <!-- <ion-title>Set Profile</ion-title>   -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="profile_header">\n        <div class="img_cont">\n            <img [src]="user.thumb" *ngIf="user && user.thumb" (click)="presentActionSheet()"/>\n        </div>\n        <ion-title align="center">Set Profile</ion-title>  \n    </div>\n  <br />\n  \n\n  <br />\n\n  <ion-item *ngIf="!originalUser?.email">\n    <ion-label color="primary" stacked style="overflow: visible;"><b>Set email (can be used to login). !Warning! Cannot\n        be changed.</b></ion-label>\n    <ion-input type="email" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n  <button ion-button (click)="saveProfile()" style="margin-left: 20px;" *ngIf="!originalUser?.email">Finalize Email</button>\n\n  <br>\n\n  <ion-list class="profile_list">\n    <ion-item>\n      <ion-label stacked>First Name</ion-label>\n      <ion-input type="text" placeholder="First Name" [(ngModel)]="user.firstName" (ionChange)="saveProfile()"></ion-input>\n    </ion-item>\n    <br />\n    <ion-item>\n      <ion-label stacked>Last Name</ion-label>\n      <ion-input type="text" placeholder="Last Name" [(ngModel)]="user.lastName" (ionChange)="saveProfile()"></ion-input>\n    </ion-item>\n    <br />\n    <ion-item>\n        <ion-label stacked>Language</ion-label>\n      <ion-select [(ngModel)]="lang" (ionChange)="saveProfile()">\n        <ion-option *ngFor="let o of language" [value]="o.code">{{o.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\profile-modal\profile-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], ProfileModalPage);
    return ProfileModalPage;
}());

//# sourceMappingURL=profile-modal.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiumModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PremiumModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PremiumModalPage = /** @class */ (function () {
    function PremiumModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PremiumModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PremiumModalPage');
    };
    PremiumModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-premium-modal',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\premium-modal\premium-modal.html"*/'<!--\n  Generated template for the PremiumModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>World Chat PREMIUM</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row class="ion-align-items-center">\n      <ion-col>\n        <div class="pricing-item text-center">\n          <div class="prc-head bg-theme">\n            <span>PREMIUM</span>\n            <h4>$1.99/m</h4>\n          </div>\n          <ul class="prc-list">\n            <li>78+ Languages</li>\n            <li>Group Chat</li>\n            <li>Free Updates</li>\n            <li>Support 24/7</li>\n            <li>Unlimited App to App Texts</li>\n            <li>1,000 App to Phone Number Texts</li>\n          </ul>\n          <div class="btn-area">\n            <button ion-button round>buy</button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="ion-align-items-center">\n    <ion-col>\n      <div class="pricing-item text-center">\n        <div class="prc-head bg-theme">\n          <span>UNLIMITED+</span>\n          <h4>$4.99/m</h4>\n        </div>\n        <ul class="prc-list">\n          <li>78+ Languages</li>\n          <li>Group Chat</li>\n          <li>Free Updates</li>\n          <li>Support 24/7</li>\n          <li>Unlimited App to App Texts</li>\n          <li>5,000 App to Phone Number Texts</li>\n        </ul>\n        <div class="btn-area">\n          <button ion-button round>buy</button>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row class="ion-align-items-center">\n    <ion-col>\n      <div class="pricing-item text-center">\n        <div class="prc-head bg-theme">\n          <span>UNLIMITED+</span>\n          <h4>$9.99/m</h4>\n        </div>\n        <ul class="prc-list">\n          <li>78+ Languages</li>\n          <li>Group Chat</li>\n          <li>Free Updates</li>\n          <li>Support 24/7</li>\n          <li>Unlimited App to App Texts</li>\n          <li>Unlimited App to Phone Number Texts</li>\n        </ul>\n        <div class="btn-area">\n          <button ion-button round>buy</button>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\premium-modal\premium-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], PremiumModalPage);
    return PremiumModalPage;
}());

//# sourceMappingURL=premium-modal.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartGroupChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conversation_conversation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { SMS } from '@ionic-native/sms';
var StartGroupChatPage = /** @class */ (function () {
    function StartGroupChatPage(navCtrl, modalCtrl, alertCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.searchQuery = '';
        this.people = [];
        this.browser = false;
        this.browser = !!JSON.parse(localStorage.getItem('isBrowser'));
        this.user = JSON.parse(localStorage.getItem('user'));
        // this.initializeItems();
    }
    StartGroupChatPage.prototype.ionViewWillEnter = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    StartGroupChatPage.prototype.addByUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Start a conversation',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Enter Username'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (!data.username) {
                            return;
                        }
                        if (data.username == _this.user.username) {
                            var toast = _this.toastCtrl.create({
                                message: 'You cannot start a chat with yourself.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return;
                        }
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').where('username', '==', data.username.toLowerCase()).get().then(function (profiles) {
                            if (!profiles.docs.length) {
                                var toast = _this.toastCtrl.create({
                                    message: 'User not found.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            profiles.forEach(function (profile) {
                                if (!profile.data()) {
                                    var toast = _this.toastCtrl.create({
                                        message: 'User not found.',
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                }
                                else {
                                    _this.people.push(profile.data());
                                }
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    // addByContacts() {
    //   let myModal = this.modalCtrl.create(ModalContactPage);
    //   myModal.onDidDismiss(data => {
    //     if (data) {
    //       if (data == this.user.phone) {
    //         let toast = this.toastCtrl.create({
    //           message: 'You cannot start a chat with yourself.',
    //           duration: 3000,
    //           position: 'bottom'
    //         });
    //         toast.present();
    //         return;
    //       }
    //       let loading = this.loadingCtrl.create({
    //         content: 'Searching for user...'
    //       });
    //       loading.present();
    //       let results = [];
    //       let promises = [
    //         new Promise((resolve, reject) => {
    //           firebase.firestore().collection('users').where('fullPhone', '==', ('+' + data)).get().then((profiles: any) => {
    //             profiles.forEach(profile => {
    //               results.push(profile);
    //             })
    //             resolve();
    //           })
    //         }),
    //         new Promise((resolve, reject) => {
    //           firebase.firestore().collection('users').where('phone', '==', data).get().then((profiles: any) => {
    //             profiles.forEach(profile => {
    //               results.push(profile);
    //             })
    //             resolve();
    //           })
    //         })
    //       ]
    //       Promise.all(promises).then(values => {
    //         loading.dismiss();
    //         if (!results.length) {
    //           this.sms.send(data.toString() + ' ', (this.user.firstName || this.user.username) + ' invited you to download World Chat! Android: https://play.google.com/store/apps/details?id=com.letschat.mobile')
    //           let toast = this.toastCtrl.create({
    //             message: 'User not found.',
    //             duration: 3000,
    //             position: 'bottom'
    //           });
    //           toast.present();
    //           return;
    //         }
    //         results.forEach(profile => {
    //           if (!profile.data()) {
    //             let toast = this.toastCtrl.create({
    //               message: 'User not found.',
    //               duration: 3000,
    //               position: 'bottom'
    //             });
    //             toast.present();
    //           } else if (profile.data().username == this.user.username) {
    //             let toast = this.toastCtrl.create({
    //               message: 'You cannot start a chat with yourself.',
    //               duration: 3000,
    //               position: 'bottom'
    //             });
    //             toast.present();
    //             return;
    //           } else {
    //             this.people.push(profile.data());
    //           }
    //         })
    //       })
    //     }
    //   });
    //   myModal.present();
    // }
    StartGroupChatPage.prototype.newConversation = function () {
        var loading = this.loadingCtrl.create({
            content: 'Starting Chat..'
        });
        loading.present();
        var doc = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc();
        var convoUsers = [];
        var languages = [];
        this.people.push(this.user);
        this.people.forEach(function (user) {
            convoUsers.push({
                $id: user.$id,
                username: user.username,
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                language: user.language
            });
            languages.push(user.language);
            __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').doc(user.$id).collection('conversations').doc(doc.id).set({
                chatId: doc.id
            });
        });
        var convo = {
            $id: doc.id,
            users: convoUsers,
            languages: languages,
            readBy: {}
        };
        convo.readBy[this.user.$id] = this.user.username;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(doc.id).set(convo);
        loading.dismiss();
        this.viewConversation(convo);
    };
    StartGroupChatPage.prototype.viewConversation = function (convo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__conversation_conversation__["a" /* ConversationPage */], {
            conversation: convo,
        });
    };
    StartGroupChatPage.prototype.removePerson = function (chat, i) {
        this.people.splice(i, 1);
    };
    StartGroupChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-start-group-chat',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\start-group-chat\start-group-chat.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Start Group Chat\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>-->\n  <ion-list>\n\n<!--    <button ion-button (click)="addByContacts()" *ngIf="!browser">-->\n<!--      Add a person via Contacts <ion-icon name="contacts" style="padding-left: 5px;"></ion-icon>-->\n<!--    </button>-->\n    <button ion-button (click)="addByUsername()">\n      Add a person via Username <ion-icon name="person-add" style="padding-left: 5px;"></ion-icon>\n    </button>\n\n\n    <ion-item-sliding *ngFor="let person of people" #item>\n      <ion-item>\n        <!--<ion-avatar item-left>-->\n          <!--<img src="./assets/user.png">-->\n        <!--</ion-avatar>-->\n        {{person.firstName || person.userName}} <span *ngIf="person.firstName">{{person.lastName || \'\'}}</span>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="removePerson(person, i)">Remove</button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <button ion-button (click)="newConversation()" *ngIf="people && people.length > 0">\n      Start Conversation\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\start-group-chat\start-group-chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], StartGroupChatPage);
    return StartGroupChatPage;
}());

//# sourceMappingURL=start-group-chat.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwilioConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TwilioConversationPage = /** @class */ (function () {
    function TwilioConversationPage(navCtrl, navParams, chatService, events, http, ngZone, modalCtrl, alertCtrl, toastCtrl, loadingCtrl) {
        // this.toUser = {
        //   id: navParams.get('toUserId'),
        //   name: navParams.get('toUserName')
        // };
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatService = chatService;
        this.events = events;
        this.http = http;
        this.ngZone = ngZone;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.hasLoadedMessages = false;
        this.readBy = [];
        this.loadingStopped = true;
        this.hasScrolled = false;
        this.avoidDuplicateAfterSending = {};
        // Get mock user information
        this.user = JSON.parse(localStorage.getItem('user'));
        this.conversation = this.navParams.get('conversation');
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc(this.conversation.$id).onSnapshot(function (querySnapshot) {
            _this.conversation = querySnapshot.data();
            if (!_this.conversation) {
                return;
            }
            var hasUserLanguage = false;
            _this.conversation.languages.forEach(function (lan) {
                if (lan == _this.user.language) {
                    hasUserLanguage = true;
                }
            });
            if (!hasUserLanguage) {
                _this.conversation.languages.push(_this.user.language); //&source=${this.conversation.lastMessage.translatedFrom}
                _this.http.get("https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + _this.user.language + "&q=" + _this.conversation.lastMessage.message[_this.conversation.lastMessage.translatedFrom] + "&format=text")
                    .toPromise()
                    .then(function (response) {
                    _this.conversation.lastMessage.message[_this.user.language] = response.data.translations[0].translatedText;
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc(_this.conversation.$id).update(_this.conversation);
                });
            }
            _this.readBy = [];
            var readByKeys = Object.keys(_this.conversation.readBy);
            readByKeys.forEach(function (key) {
                _this.readBy.push(_this.conversation.readBy[key]);
            });
        });
    }
    TwilioConversationPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ConversationPage');
        this.getMsg();
    };
    TwilioConversationPage.prototype.ionViewWillLeave = function () {
        //firebase.firestore().collection('users').doc(this.user.$id).collection('tempConversations').doc(this.conversation.$id).delete();
    };
    TwilioConversationPage.prototype.ionViewDidEnter = function () {
    };
    TwilioConversationPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    TwilioConversationPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.focus();
        }
        else {
            this.setTextareaScroll();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    TwilioConversationPage.prototype.getMsg = function () {
        var _this = this;
        setTimeout(function () {
        }, 3000);
        if (this.loadingStopped) {
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.loading.present();
            this.loadingStopped = false;
        }
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc(this.conversation.$id).collection('messages').orderBy("time", "desc").limit(25).onSnapshot(function (querySnapshot) {
            if (!_this.loadingStopped) {
                _this.msgList = [];
            }
            setTimeout(function () {
                if (!_this.loadingStopped) {
                    _this.loading.dismiss();
                    _this.loadingStopped = true;
                    _this.hasScrolled = true;
                }
            }, 200);
            var objlstmsgrev = querySnapshot.docChanges().reverse();
            objlstmsgrev.forEach(function (change, index) {
                if (change.type === "added") {
                    var tmpMsg_1 = change.doc.data();
                    if (!tmpMsg_1.message[_this.user.language] && !tmpMsg_1.mediaUrl) {
                        _this.http.get("https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + _this.user.language + "&q=" + tmpMsg_1.message[tmpMsg_1.translatedFrom] + "&format=text")
                            .toPromise()
                            .then(function (response) {
                            tmpMsg_1.message[_this.user.language] = response.data.translations[0].translatedText;
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('conversations').doc(_this.conversation.$id).collection('messages').doc(change.doc.id).update(tmpMsg_1);
                            _this.ngZone.run(function () {
                                if (!_this.avoidDuplicateAfterSending[tmpMsg_1.$id]) {
                                    _this.msgList.unshift(tmpMsg_1);
                                }
                                setTimeout(function () {
                                    _this.scrollToBottom();
                                }, 600);
                            });
                        }, function (msg) {
                            alert('Check Internet Connection');
                        });
                    }
                    else {
                        _this.ngZone.run(function () {
                            _this.avoidDuplicateAfterSending[change.doc.data().$id] = true;
                            _this.msgList.push(change.doc.data());
                            setTimeout(function () {
                                _this.scrollToBottom();
                            }, 600);
                        });
                    }
                }
            });
            if (!_this.hasLoadedMessages) {
                _this.hasLoadedMessages = true;
            }
            setTimeout(function () {
                _this.ngZone.run(function () {
                    _this.conversation.readBy[_this.user.$id] = _this.user.username;
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc(_this.conversation.$id).update({ readBy: _this.conversation.readBy });
                    //this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
                });
            }, 700);
        });
    };
    TwilioConversationPage.prototype.sendMsg = function () {
        var _this = this;
        if (!this.editorMsg.trim())
            return;
        this.editorMsg = this.editorMsg.replace('↵', '');
        var conversation = this.navParams.get('conversation');
        var message = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc(conversation.$id).collection('messages').doc();
        var newMessage = {
            $id: message.id,
            sentBy: this.user.$id,
            username: this.user.username,
            firstName: this.user.firstName || '',
            lastName: this.user.lastName || '',
            translatedFrom: this.user.language,
            thumb: this.user.thumb || '',
            time: Date.now(),
            message: {}
        };
        var promises = [];
        this.conversation.languages.forEach(function (language) {
            // newMessage.message[this.user.language]
            if (language != null && language != undefined && language != '') {
                var promise = new Promise(function (resolve, reject) {
                    var apiURL = "https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + language + "&q=" + _this.editorMsg + "&format=text";
                    _this.http.get(apiURL)
                        .toPromise()
                        .then(function (response) {
                        newMessage.message[language] = response.data.translations[0].translatedText;
                        resolve();
                    }, function (msg) {
                        _this.http.get(apiURL).toPromise().then(function (response) {
                            newMessage.message[language] = response.data.translations[0].translatedText;
                            resolve();
                        }, function (msg) { });
                    });
                });
                promises.push(promise);
            }
        });
        var tokens = [];
        this.conversation.users.forEach(function (user) {
            if (user.$id != null && user.$id != '' && user.$id != undefined) {
                if (user.$id === _this.user.$id)
                    return;
                var promise = new Promise(function (resolve, reject) {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(user.$id).get().then(function (token) {
                        if (token.data().token) {
                            tokens.push({ token: token.data().token, language: user.language, name: (_this.user.firstName + ' (' + _this.user.username + ')') });
                        }
                        resolve();
                    }).catch(function () {
                        resolve();
                    });
                });
                promises.push(promise);
            }
        });
        newMessage.message[this.user.language] = this.editorMsg;
        var objSendTextSMS = {
            $id: '',
            message: '',
            toPhoneno: ''
        };
        objSendTextSMS.message = this.editorMsg;
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.focus();
        }
        var readBy = {};
        if (this.conversation.readBy) {
            var usersRead = Object.keys(this.conversation.readBy);
            usersRead.forEach(function (userId) {
                readBy[userId] = '';
            });
        }
        readBy[this.user.$id] = this.user.username;
        this.conversation.readBy = readBy;
        Promise.all(promises).then(function (values) {
            // newMessage.time = moment.utc().format('YYYY-MM-DD HH:mm:ss')
            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc(conversation.$id).collection('messages').doc(newMessage.$id).set(newMessage);
            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('twilioConversations').doc(conversation.$id).update({
                lastMessage: newMessage,
                readBy: readBy,
                lastUpdated: Date.now()
            });
            _this.conversation.users.forEach(function (user) {
                if (user.$id != null && user.$id != undefined && user.$id != '') {
                    objSendTextSMS.$id = user.$id;
                }
                else
                    objSendTextSMS.toPhoneno = user.phoneno;
            });
            var apiURL = 'https://us-central1-letstalk-205602.cloudfunctions.net/sendTextSMS';
            _this.http.post(apiURL, objSendTextSMS).toPromise().then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        });
        this.scrollToBottom();
    };
    TwilioConversationPage.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    TwilioConversationPage.prototype.viewProfile = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */], {
            profile: user
        });
    };
    TwilioConversationPage.prototype.scrollToBottom = function () {
        if (this.content._scroll)
            this.content.scrollToBottom();
    };
    TwilioConversationPage.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    TwilioConversationPage.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    TwilioConversationPage.prototype.expandMessage = function (msg, i) {
        if (!msg.expanded)
            msg.expanded = false;
        this.msgList[i].expanded = !msg.expanded;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], TwilioConversationPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TwilioConversationPage.prototype, "messageInput", void 0);
    TwilioConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'twilio-conversation',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\twilioConversation\twilioConversation.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <span *ngFor="let chatUser of conversation?.users">\n\n        <!-- <span *ngIf="chatUser?.username !== user?.username" (click)="viewProfile(chatUser)"> -->\n\n        <span *ngIf="chatUser?.username !== user?.username">\n\n          {{chatUser?.username}}\n\n        </span>\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="message-wrap">\n\n\n\n    <div *ngIf="!msgList || !msgList.length">\n\n      <br>\n\n      <br>\n\n      <br>\n\n      <h4 text-center>No messages yet</h4>\n\n    </div>\n\n\n\n    <!-- <div *ngIf="hasLoadedMessages">\n\n      <div *ngFor="let msg of msgList | sortByTime" class="message" [class.left]=" msg?.sentBy !== user.$id "\n\n        [class.right]=" msg?.sentBy !== user.$id">\n\n        <div class="msg-detail">\n\n          <div class="msg-content">\n\n            <span class="triangle"></span>\n\n            <p class="line-breaker ">{{msg?.message[user.language]}}</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <h6 style="color: rgba(150, 150, 150, 0.8); font-size: 0.8em;" *ngIf="msgList.length">\n\n        Read by <span *ngFor="let username of readBy" style="margin-right: 5px;">{{username}}</span>\n\n      </h6>\n\n    </div> -->\n\n\n\n    <div *ngIf="hasLoadedMessages" class="msg_cont">\n\n      <div *ngFor="let msg of msgList; let msgIndex = index;" class="message" [class.left]=" msg?.sentBy !== user.$id "\n\n        [class.right]=" msg?.sentBy === user.$id" lazy-load-images>\n\n        <div class="img_cont">\n\n          <img class="user-img" [src]="msg.thumb || \'assets/imgs/nopic-profile.png\'"\n\n            onerror="this.src=\'assets/imgs/nopic-profile.png\'" (click)="viewProfile({$id: msg?.sentBy})">\n\n        </div>\n\n        <div class="msg-detail" [ngClass]="{\'msg-detail-with-media\': msg?.mediaUrl}">\n\n          <div class="msg-content">\n\n            <!-- <span class="triangle"></span> -->\n\n            <img *ngIf="msg?.mediaUrl && hasScrolled" [attr.data-src]="msg?.mediaUrl || \'\'"\n\n              (press)="copyText(msg?.mediaUrl)" imageViewer />\n\n            <p class="line-breaker">\n\n              <!--{{msg?.message[user.language]}}-->\n\n              <span [innerHTML]="msg?.message[user.language] | linky" (press)="copyText(msg?.message[user.language])"\n\n                (click)="expandMessage(msg, msgIndex)" style="display: block;"></span>\n\n              <span *ngIf="msg?.expanded" [innerHTML]="msg?.message[msg?.translatedFrom] + \' - original\' | linky"\n\n                (click)="expandMessage(msg, msgIndex)"\n\n                style="display: block; padding-top: 10px; font-style: italic;"></span>\n\n            </p>\n\n            <div *ngIf="msg?.meta?.link" class="meta-link" (click)="openLink(msg?.meta?.link?.rawUrl)">\n\n              <div style="width: 100px; float: left;">\n\n                <img id="icon" style="width: 90px;" src="{{msg?.meta?.link?.icon}}" />\n\n              </div>\n\n              <h3>{{msg?.meta?.link?.title  || \'---------\'}}</h3>\n\n              <h6>{{msg?.meta?.link?.rawUrl}}</h6>\n\n              <span>{{msg?.meta?.link?.description || \'--------------------\'}}</span>\n\n            </div>\n\n          </div>\n\n          <!--<div class="msg-info">-->\n\n          <!--<p>-->\n\n          <!--{{msg?.username}}&nbsp;&nbsp;{{msg?.time | relativeTime}}</p>-->\n\n          <!--</div>-->\n\n        </div>\n\n      </div>\n\n      <!-- <h6 style="color: rgba(150, 150, 150, 0.8); font-size: 0.8em;" *ngIf="msgList.length">\n\n        Read by\n\n        <span *ngFor="let id of objectKeys(conversation?.readBy || {})" style="margin-right: 5px;">\n\n          {{conversation?.readBy[id]}}\n\n          <span *ngIf="conversation?.typing && conversation?.typing[id] && id !== profile?.$id">is typing...</span>\n\n        </span>\n\n      </h6> -->\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n  <div class="input-wrap">\n\n    <!-- <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n\n      <ion-icon name="md-happy"></ion-icon>\n\n    </button> -->\n\n    <textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()"\n\n      (focusin)="onFocus()">\n\n    </textarea>\n\n    <button ion-button clear icon-only item-right (click)="sendMsg()">\n\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n    </button>\n\n  </div>\n\n  <!-- <emoji-picker [(ngModel)]="editorMsg"></emoji-picker> -->\n\n</ion-footer>'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\twilioConversation\twilioConversation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], TwilioConversationPage);
    return TwilioConversationPage;
}());

//# sourceMappingURL=twilioConversation.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CompleteProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompleteProfilePage = /** @class */ (function () {
    function CompleteProfilePage(http, viewCtrl) {
        var _this = this;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.language = [];
        this.GetLanguage()
            .subscribe(function (res) {
            _this.language = res;
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('users').doc(this.user.$id).get().then(function (user) {
                _this.user = user.data();
                _this.username = _this.user.username;
                _this.lang = _this.user.language;
            });
        }
    }
    CompleteProfilePage.prototype.GetLanguage = function () {
        var msgListUrl = './assets/language/language.json';
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["map"])(function (response) { return response.array; }));
    };
    CompleteProfilePage.prototype.complete = function (lang, username) {
        var _this = this;
        var self = this;
        this.user.language = lang;
        this.user.username = username.toLowerCase();
        this.user.complete = true;
        var imageData = 'iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAI27AACNuwGddYGAAAAAIGNIUk0AAG2YAABzjgAA+aUAAITIAAB8VwAA+sEAADB2AAARJBeOCnIAABIcSURBVHja7N3tchRHDAVQdspPTQpSkOK5O/8SjG3Yj+ltte45L5Cwo5Zua9b25fPX75+A8sZm/78Xj2y+H9+++BC424uPAAz2hf8uQQEEADDgfT4CAggAYNjz/mcqFIAAAAa9z18wAAEADHzPSSAAAQAMe89SKAABAAx8bAlAAMAAAIEAAQAMfXhdK8IAAgAY+KgjgQABAAx90mtMGEAAAEMfYQAEADD0EQZAAABDH2EABAAw9BEGQAAAg5+wuhYEEADA0MdWAAQANEOwFQABAEMfbAVAAMDgB1sBEAAw+Hnl4tkKAiAAYPAb6hX/H9WDIIAAgKFPYEO/qJ3TzpYwgACAwW/Qt/+c1JatALMO3eev330KGPwGvdpTe9gAgOar6W73+Q/nUU0iAGDwG/aeUWK9CgIIABj8Bj7BWwJBAAEAg9/Q54NnPILOr9pGAMDgN/AJ3A4IAggAxA9/DZDk7cBwBhAASBr8Gh7CgG0AAgAhg19zQxgQBBAACBn8GhnCgCCAAEDI8Ne0EAbO6wnOkwCAwW/oQ2AYsA0QADD4DX54sE4FAQQADH9DH1uBbXuHMygAYPAb/BC4FbANEAAw/A19CN4K2AYIABj8Bj+EbgVsA5o5fASG/8IGqJEgCOx3DobHZgOAw+jGD5kbAdsAGwAMfzd+CD4ntgE2ADh0bvwQuhGwDbABwPB344fgc2QbYAOAwQ+EbgRsA2wACBz+bvzgnNkGCAAEHSSDH5w7IWBDXgE4PI80IKDGOazaL7wSsAGg0fB34wfn0jZAACBw+APOqBDQgFcADofBDz1DQMWe4pWADQCbDH/rftg7CFQ9v7YBAgDFhz/QZyOg9yEAOABu/WAboAem8x0ARe/GD3nbgEo9yPcCbAAMf8MfCD7ztgECgOH/5CZg+ENuCKh2/oUAAcDwd+sHQnuBECAAGP5u/UBoXxACBADD360fCO0RQsBkfgrA4Ad4r19U6GF+QsAGwPA3/AHbAAQAw9/wB4QABAAF+u6hNfyBbv1ECBAADH+3fiC0twgBAoDhb/gDQgACQHYhWvkDaf1GCBAADH+PAQjtPUKAAGD4AwgBCAD9C87KH6gUAlb3IyFAAIgZ/gC2AUKAAGD4AwgBQsBt/C0Awx/1q+44u1eNxbWubgUAwx/1OPm/pTYRAgQAzdbgp2H4vOf/T93ycx2MhbWpFgUAwx+1tvDfopYFASFAANCQDX8aDvxb/q1qWwgQAgQAzdnwV1fhn4FaFwKEAAFAk9YQ1VLw56PuhQAhYAG/B8Dw5/waGob/XZ8ZOSFAKBcADH/D3xBDcxYC1JkAYPhj8Ps8fZ5CgBAgABj+GFQ+X4QAIUAA6FQA/pqfwYQmzfp+GF1fNgBu/Vw/9A0jTRq9UQDQVBS4OsFzoEGPjK2t1ABg+HPtrR8hACFAANBEDH81AggBAoDGbvi79aNJIwQIABqH4a8+8KwQAgQADcPwd+vHc0MIKMsfA8JNkm7PUPgGGwC3fwz/4O2ALYEtgB4RHAAMfwx/BAEhQK8ICwCGP4Y/H20GEALie8bR+KAb/hj+2AoIAXpH4AbA8MfwRxDQcwkKAEMhYvgjCAgB+khWADD8MfxRL0KA+ggLAIY/mjm2AUKAvhK6ATD8MfxRQ3oyQQHAQQX0FtRFWACw+kfTZnY9qSlbgHZ95mhwMA1/DH/UFkJA4AbA8EeDRo2hVwcFgKGgAFjcs7cNhbsGAMMfNzPUGkJA6AYANGTUHAQFALd/QAjAFiAsABj+aMKoP4SA0A2A4Q8IAejpQQHAIUNNAPpSWACw+sfwRz2yS2/foh68AjD8ASFAjw90OFQKQ6MFhIC8PlU9AGj0gHCKegjdALj9o8ECen5QALD6B4RUdu/9ZevhCD9Ahj+AEBAZArwCwM0K1CqBjuCD4/YPQOwW4PDAAWwBhAAbAAcGzRQgoI8dgR+M2z8Aq2ZDmRBweMBIzaB2yZsRh0MCAHkzL2kD4PYPuOBgVhQKAMMDRfMEwkLA8t7mFwEBQKDVAcDtHwBbgLAAYLULpNDvKFcb3V8BuP0DYIYUCgBW/7g1AULAwl7nS4AAEGhFAHD7B8AWYPEWwAYAoM/lB8oGALd/NEvAFqBA3zs8IADImzHPDABudABQZFZ22gC4/QNg1hQLAG7/AFBoZnbZALj9Axo7Zk6xAKDgAaDY7OywAXD7V/gAZk+xAKCRA0DBGbr7BsDtHwAzKDAAAADFAsDs9b/bPwDdtwDTZqkNAADYALj9A0DCFsAGAABsANz+ASBhC2ADAAA2AG7/AJCwBbABAHguvyGVlhsAt38AbAHCAoBUCwBznTZrd9kAuP0DYAtQcAPg9g8AG20BdtgAuP0DYAtQdAMApZItGAwwPwBo2ACw2WWp+gZAUgZgV6Vn2KMBwO0fADbcAlTeALj9S8wAelrRDQAAsKFHAoD1PwCsdfcsrroBsAYGoIuSM80rAAAIdG8AmLn+d/sHwBZg8ky2AQAAGwAAQAB4n/U/ANSacTfPZhsAALABAAAEgLes/wH0OWrWwE0z2gYAAGwAAAAB4DXrfwCoPfOuntU2AKQdDgAEAAAQANz2ACBk9l0bAIZnBeCywxaumtleAQBAoNUBQCIGINXSGXhNALD+B4C9/HF2ewUAAIFWBgDrf9QHoNcFBgAAoGgA8P4fYONbHtGGDQAAUCIASMMAsHAm2gAAgA3AK97/E5mKQR3TyKi0AXAYAGDxbPQKAAACCQAAIAAAAMkBYNYXAL3/R82gfuG59TJsAAAAAQAABAAAIDoA+AVAANDLWLkB8GUYIImeR+m68QoABwIgkAAAAAIAACAAnMcKF0ii51G+fn4NAH4CAA0VoKexYgMAABQiAACcy7YKAQAAEADAzQqgYADwJ4AB9Dt619KwAQAAGwAAQAAAAAQAKMQ7VtQmnODFR8BG/KZKdqhPQQAbAAcBwx+1CjVnqFcAaKigZgneAChWAAgKqDYAuEmB2iV4AwAaKKhhBAAAQAAANydQywgAAIAA8BG/AwAAis5SGwAqsjJFTcPGGwAAQAAAACoFAKspAMgybAAAIHQDAAAIAACAAAAACAAAgAAAAAgA//FrgAGg8Ey1AQAAGwAAQAAAAAQAAEAAgFl8iRQ1DQIAACAAAAACAAAgAAAAAgAb86Up1DIIAACAAAAACAC0ZXWKGgYBAAAQAAAAAYC2rFBRuyAAAAACAG5SoGZBAAAABAAAQABgc1aqqFUQANBYQY2CAAAACAC4YYHaBAEAjRbUJAgAaLigFkEAQOMFNUigFx8BTRrw8FFg8IMAgCAABj8sCADDQaFAgxYGMPTpYEov8x0AAAgkAACAAAAACACwN+9uUUMgAAAAAgAAhAcAKy4AyHKxAQCA0A0AtE65PgLUDggAAMDkAODXsAJA0VlqAwAANgDQkne5qBkQAAAAAQAABAAAICkAeN9Fd2octQI/1bgNAAAEbwBm8bsAcLMDKDhDbQAAhERsAAAAAQDc8FAbIAAAAAIAANAgAMxaf/lJAKqx6kVNUN2YXes2AAAQvgEANz7UAggAAIAAAG5+qAFoGwAcBgAICLzP2gD4SQDcAAEKzUyvAADhDwIJAGAQAAIAgNAHAsC5fA8AAwHPGorMysPhAIC84OsVAAi/njEEEgDAgAAEAADhDpIDgD8NjEEB8FzT/wSwDQAIAZ4n2AAAGP4gAAAGByAATOB7AAgBeH6weDYeDg4YIp4b5J0DrwAAwx8CrQoAXgNgoOBZwcKZaAMABotnBDYADhNccSacC8Mftj8TNgCA4Q82AE/lewAApFs2C20AAMAG4F1WawCwlz/O7tUbAK8BAEi1dAZ6BQAAga4NAF4DAMAerprZFTYAXgMAkGb57PMKAAACCQAAIAD81szvAXgNAECKmTPv6lltAwAANgAAgADwltcAMP8sAH2VWP/bAACADQAAIAB8zGsAAKg1426ezTYAAGADAAAIAB/zGgAAasy2u2ayDQAA2ABEJCUAiJ9pjwQAvwgFBxpgrbtnsVcAABCocgBwwwJgd2Vn2aMBwGsAAFjjoRlc/RWALQAAbv8FNwC2AACw2e1/hw0AAFB0AzCb1wAA7Kb87DorAHgNAADPccrM3eUVgC0AAG7/BTcAtgAAsMntf6cNgC0AAGZV0Q0AALCJyxjnhpW//v5ndvrxqgEpH72BuL7w49uXU2vcBgAAAs0IALNTuJsXAFG3/xmz1QYAAGwAbAEAoPvt3wYAAGwAbAEAIOH2bwMAADYAkheoO88FUmpudgDwizkAoOAM7fAKQOpHveH5oNYKBgBbAAAoNju7fAlQ6ked4TmhxgoGAFsAACg0Mzv9GKDUj/rC80JtFQwAtgA48HhuUGRWHg48qCkgrx88OwBcPCBAw0Ytrb39d9wAgOGB5whFA4AtAIYGnifqZ+Ht3wYADAvPFWwAbAFA3Xi+kHD7T9gAOOyoFzxn1EqxAOD3AuCg43mTbtksPAL+4Q46f6oPNSIEwIr6WHoR9iVAHHDUAASqEABsAdD4WV0L6oGo23/aBsABR7NHj0AdFAsAvhCIg42ASIoSM+8IPNxo6qBXEP/cKwWAiweM543gSPNeUWbjXW0D4FUAmjdqia5Kzbgj+ECjWYO+QeyzrRgAvArA4Eed0W34l9twv3j2OLxwd915bYkNgC0AbmKoQ1wg9rj9Vw4AQgAaLuoSw38irwD+LwSrPIcVzqxTPUU/Ka16ALh4UA4pbF6/gkCu0s/+8AEaNkUbp+eBembnXl8++HkF8LYwpHU3fphd3/qMHmMDUDBJKZA1tyOfO7YCdOntWwS8nX4ToMSsAYJzgFl1Eq8APj6UAsf+KRx2PBd6j75jA7A4WSmY8285PlOwFeg8/LcKbzv+MSAhQCMDwRnD/0FeASA0wT7nyusBojcAtgBu+2ArgNt/aAAQAjQjcP6cPcP/AV4B3FZQ1m8CEVQ+j3qU/hSxAVhR7CP8ULlxgK2A4d8kcB0NHrgQoKEAArvhf6MurwD81UAhB/j9efZ6wPBvtwEwIN32gezzrW+FBwCvAjQGIO+8W/3fqdtPATz7VcDOPxlg4IMgsPtQM/xtAGwC3PaBsL5g+AsAbtMGPxDWJ/QyAaBUUhsONNAsCIyi/28JM0UAEAIMfkAvMfwFACHA4Acye4vhLwAIAQY/EBYEDP8J/DGgHocRYFXv8RsGbQBsAZ48mN34gYRLiNu/ACAEGPxA4RAwq98Z/gJAfAgw+IGkIGD4CwDxIcDgB9KCgOEvAMSHAIMf2D0IGP4CgBBwQ2G79QOJ2wDDXwCITsQGP6D3MV367wG4fFr3S3t+TZ6KH0gJAVV6X/TvMLABWFsAw/AHgoOA4S8ACAEAoSHA8BcAokMAAHq9AKAwANDjBQAFAoDeLgAoFAD0dAFAwQCglwsACgcAPVwAUEAAejcCgEIC0LMRABQUgF4tAKCwAPRoAQAFBqA3CwAoNAA9WQBAwQHoxQKAwgNADxYAFCAAeq8AoBAB0HMFAAUJgF4rAChMAPRYAUCBAqC3CgAKFUBP9RGc78VHML1gh48CwOC3AVDAAOidAoBCBkDPFAAUNIBeiQCgsAH0SAQABQ6gN3IKPwWwttD9hACgH2IDoPAB9EAEAAcAQO9DAHAQAPQ8zuI7APUOhO8FAAY/NgAOCIDehgDgoADoaZzAK4D6B8YrAcDgxwbAAQLQuxAAHCQAPYs7eAWw34HySgAw+LEBcMAA9CZsAGwDAAx+bAAcPAA9CBsA2wAAgx8bAAcSQK+xAcA2AMDgtwHAQQXQU2wAsA0ADH5sAHCAAb0DGwBsAwCDHwEAQQAw+KnNKwAHHUBPsAHANgAw+BEAEAQAgx8BAEEAMPjpwXcA0CDA2cYGAGwDwOBHAEDjEATA4EcAQBDwUYDBjwCAIAAY/AgACAKAwY8AgCAATD1/P7598SkgACAIgBs/CACsb0zCABj6CADYCgAGPwIAggBg8CMAIAgABj8CADkNThgAQx8BAFsBMPhBAMBWAAx9EACwFQCDHwQAbAXA0AcBAGEADH0QABAGwNAHAQBhAAx9EAAQBsDQRwDwERDQqAUCDHwQAAhv5MIAhj4IAGjwAoF6AAEADACBwMAHAQAMCKHAsAcBAAwSgcDABwEADJo3BAODHgQAMJiEAsMeBAAwwN43fD6AAAAGYJegYLBDcf8OAIY0abg1lwZRAAAAAElFTkSuQmCC';
        __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref('users').child(this.user.$id).child('thumb.jpg')
            .putString(imageData, 'base64').then(function (snapshot) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref('users').child(self.user.$id).child('thumb.jpg').getDownloadURL().then(function (downloadURL) {
                _this.user.thumb = downloadURL;
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('users').doc(_this.user.$id).update(_this.user);
                localStorage.setItem('user', JSON.stringify(_this.user));
                _this.viewCtrl.dismiss(_this.user);
            });
        });
    };
    CompleteProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-complete-profile',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\complete-profile\complete-profile.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Complete Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Select Language</ion-label>\n    <ion-select [(ngModel)]="lang">\n      <ion-option *ngFor="let o of language" [value]="o.code">{{o.name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n  <div text-center>\n    <button text-center ion-button clear (click)="complete(lang, username)">Continue</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\complete-profile\complete-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
    ], CompleteProfilePage);
    return CompleteProfilePage;
}());

//# sourceMappingURL=complete-profile.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tempConversation_tempConversation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conversation_conversation__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TempChatPage = /** @class */ (function () {
    function TempChatPage(modalCtrl, navCtrl, toastCtrl, barcodeScanner) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.barcodeScanner = barcodeScanner;
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    TempChatPage.prototype.ngOnInit = function () {
        this.addTempChat();
    };
    TempChatPage.prototype.addTempChat = function () {
        var _this = this;
        var options = {
            prompt: "Scan a Profile Code"
        };
        this.barcodeScanner.scan(options).then(function (barcodeData) {
            if (barcodeData.format == "QR_CODE") {
                __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('users').where('$id', '==', barcodeData.text).get().then(function (profiles) {
                    if (!profiles.docs.length) {
                        var toast = _this.toastCtrl.create({
                            message: 'User not found.',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                    profiles.forEach(function (profile) {
                        if (!profile.data()) {
                            var toast = _this.toastCtrl.create({
                                message: 'User not found.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else {
                            var user = profile.data();
                            var doc = __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('tempConversations').doc();
                            __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('users').doc(_this.user.$id).collection('tempConversations').doc(doc.id).set({
                                chatId: doc.id
                            });
                            __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('users').doc(user.$id).collection('tempConversations').doc(doc.id).set({
                                chatId: doc.id
                            });
                            var convo = {
                                $id: doc.id,
                                users: [{
                                        $id: _this.user.$id,
                                        username: _this.user.username,
                                        firstName: _this.user.firstName || '',
                                        lastName: _this.user.lastName || '',
                                        language: _this.user.language
                                    }, {
                                        $id: user.$id,
                                        username: user.username,
                                        firstName: user.firstName || '',
                                        lastName: user.lastName || '',
                                        language: user.language
                                    }],
                                languages: [_this.user.language, user.language],
                                readBy: {}
                            };
                            convo.readBy[_this.user.$id] = _this.user.username;
                            __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('tempConversations').doc(doc.id).set(convo);
                            _this.viewConversation(convo, true);
                        }
                    });
                });
            }
        });
    };
    TempChatPage.prototype.viewConversation = function (convo, isTemp) {
        if (isTemp === void 0) { isTemp = false; }
        this.navCtrl.push(isTemp ? __WEBPACK_IMPORTED_MODULE_4__tempConversation_tempConversation__["a" /* TempConversationPage */] : __WEBPACK_IMPORTED_MODULE_5__conversation_conversation__["a" /* ConversationPage */], {
            conversation: convo,
        });
    };
    TempChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-temp-chat',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\temp-chat\temp-chat.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Temp Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <button text-center ion-button clear (click)="addTempChat()" class="btn_Rescan">Rescan Now</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\temp-chat\temp-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], TempChatPage);
    return TempChatPage;
}());

//# sourceMappingURL=temp-chat.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_region_post_add_region_post__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(29);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var RegionsPage = /** @class */ (function () {
    function RegionsPage(modalCtrl, navCtrl, toastCtrl, alertCtrl, http) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.regionPosts = [];
        this.hasInitialized = false;
        // this.user = JSON.parse(localStorage.getItem('user'));
    }
    RegionsPage.prototype.ionViewDidEnter = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.hasInitialized) {
            this.ngOnInit();
        }
    };
    RegionsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var yesterday;
            return __generator(this, function (_a) {
                yesterday = Date.now() - 86400000;
                this.regionPosts = [];
                __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('regionPosts').where('timestamp', '>', yesterday).orderBy('timestamp', 'desc').get().then(function (snapshot) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var x, description, locationName, region;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                snapshot.forEach(function (doc) {
                                    _this.regionPosts.push(__assign({ id: doc.id }, doc.data()));
                                });
                                x = 0;
                                _a.label = 1;
                            case 1:
                                if (!(x < this.regionPosts.length)) return [3 /*break*/, 7];
                                console.log(this.regionPosts[x]);
                                if (!!this.regionPosts[x].message[this.user.language]) return [3 /*break*/, 5];
                                return [4 /*yield*/, this.http.get("https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + this.user.language + "&q=" + this.regionPosts[x].message[this.regionPosts[x].translatedFrom].description + "&format=text").toPromise()];
                            case 2:
                                description = _a.sent();
                                return [4 /*yield*/, this.http.get("https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + this.user.language + "&q=" + this.regionPosts[x].message[this.regionPosts[x].translatedFrom].locationName + "&format=text").toPromise()];
                            case 3:
                                locationName = _a.sent();
                                return [4 /*yield*/, this.http.get("https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + this.user.language + "&q=" + this.regionPosts[x].message[this.regionPosts[x].translatedFrom].region + "&format=text").toPromise()];
                            case 4:
                                region = _a.sent();
                                this.regionPosts[x].message[this.user.language] = {
                                    description: description.data.translations[0].translatedText,
                                    locationName: locationName.data.translations[0].translatedText,
                                    region: region.data.translations[0].translatedText
                                };
                                _a.label = 5;
                            case 5:
                                x++;
                                _a.label = 6;
                            case 6:
                                x++;
                                return [3 /*break*/, 1];
                            case 7:
                                this.hasInitialized = true;
                                return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (err) {
                    _this.hasInitialized = true;
                    console.log('Error getting documents', err);
                });
                return [2 /*return*/];
            });
        });
    };
    RegionsPage.prototype.addRegionPost = function () {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_region_post_add_region_post__["a" /* AddRegionPostPage */]);
        myModal.onDidDismiss(function (post) {
            if (!post)
                return;
            _this.regionPosts.push(post);
        });
        myModal.present();
    };
    RegionsPage.prototype.deletePost = function (post, index) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Are you sure you want to delete this post?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        return;
                    }
                },
                {
                    text: 'Yes',
                    handler: function (data) {
                        if (post.image) {
                            __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('regionPosts').child(post.id).child('image.jpg').delete();
                        }
                        __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('regionPosts').doc(post.id).delete();
                        _this.regionPosts.splice(index, 1);
                    }
                }
            ]
        });
        prompt.present();
    };
    RegionsPage.prototype.viewProfile = function (profileId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], {
            profile: { $id: profileId }
        });
    };
    RegionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-regions',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\regions\regions.html"*/'<!--<ion-header class="cHeader">-->\n<!--  <ion-navbar>-->\n<!--    <ion-title>-->\n<!--      Regions-->\n<!--      <button ion-button>-->\n<!--        Username <ion-icon name="person-add" style="padding-left: 5px;"></ion-icon>-->\n<!--      </button>-->\n<!--    </ion-title>-->\n<!--  </ion-navbar>-->\n<!--</ion-header>-->\n<ion-content padding>\n  <ion-title style="text-align: center; margin-bottom: 40px;">\n    Regions\n    <button ion-button style="position: fixed; top: 20px; right: 0px; background-color: #02be98;" (click)="addRegionPost()">\n      Add <ion-icon name="cloud-upload" style="margin-left: 10px; font-size: 1.2em;"></ion-icon>\n    </button>\n  </ion-title>\n\n  <ion-card class="sc-ion-card-ios-h sc-ion-card-ios-s hydrated" *ngFor="let post of regionPosts; let i = index;" style="position: relative;">\n    <ion-icon name="trash" style="color: black; position: absolute; top:0px; right: 0px; font-size: 2em; padding: 5px 10px; background-color: white; border-radius: 10px;"\n              *ngIf="user.$id == post?.authorId" (click)="deletePost(post, i)"></ion-icon>\n    <img *ngIf="post?.image" [src]="post?.image" imageViewer>\n    <ion-card-header class="hydrated" style="padding-bottom: 8px;" (click)="viewProfile(post?.authorId)">\n      <ion-card-subtitle role="heading" aria-level="3" class="hydrated">\n        <span *ngIf="post?.authorThumb" [style.backgroundImage]="\'url(\' + post?.authorThumb + \')\'" style="width: 40px; height: 40px; display: inline-block; background-size: cover; background-position: center; border-radius: 50%; vertical-align: middle;"></span>\n        <span style="width: calc(100% - 40px); display: inline-block; vertical-align: middle; padding-left: 5px;">\n          {{post?.author}}\n          <div style="font-size: 0.7em;">{{post?.timestamp | relativeTime}}</div>\n        </span>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content class="card-content card-content-ios hydrated" *ngIf="post.message[user.language]">\n      <ion-card-title role="heading" aria-level="2" class="hydrated">{{post.message[user.language].locationName}}, {{post.message[user.language].region}}</ion-card-title>\n      {{post.message[user.language].description}}\n    </ion-card-content>\n    <ion-card-content class="card-content card-content-ios hydrated" *ngIf="!post.message[user.language]" style="text-align: center">\n      <ion-card-title role="heading" aria-level="2" class="hydrated">Translation in progress..</ion-card-title>\n    </ion-card-content>\n  </ion-card>\n\n  <div *ngIf="!regionPosts.length" style="text-align: center; padding-top: 100px;">\n    <h1>No Posts Within Last 24 Hours</h1>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\regions\regions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], RegionsPage);
    return RegionsPage;
}());

//# sourceMappingURL=regions.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRegionPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AddRegionPostPage = /** @class */ (function () {
    function AddRegionPostPage(navCtrl, navParams, viewCtrl, camera, actionSheetCtrl, http, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.language = [];
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    }
    AddRegionPostPage.prototype.ngOnInit = function () {
        this.newDoc = __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('regionPosts').doc();
        this.post = {
            $id: this.newDoc.id
        };
    };
    AddRegionPostPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Take Photo',
                    //role: 'destructive',
                    handler: function () {
                        _this.takePhoto(1);
                    }
                },
                {
                    text: 'Add Photo',
                    handler: function () {
                        _this.takePhoto(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    //take Photo
    AddRegionPostPage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var self = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // this.base64Image = 'data:image/jpeg;base64,' + imageData;
            __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('regionPosts').child(_this.newDoc.id).child('1.jpg')
                .putString(imageData, 'base64').then(function (snapshot) {
                __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('regionPosts').child(self.newDoc.id).child('1.jpg').getDownloadURL().then(function (downloadURL) {
                    self.post.image = downloadURL;
                }).catch(function (e) {
                    __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('testing').add({ downloadUrlPictureError: e });
                });
            }).catch(function (e) {
                __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('testing').add({ savePictureError: e });
            });
        }, function (err) {
            // Handle error
            __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('testing').add({ getPictureError: err });
        });
    };
    AddRegionPostPage.prototype.savePost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var language, post;
            return __generator(this, function (_a) {
                language = {};
                language[this.user.language] = {
                    description: this.post.description,
                    locationName: this.post.locationName,
                    region: this.post.region,
                };
                post = {
                    $id: this.post.$id,
                    authorId: this.user.$id,
                    author: this.user.firstName + ' ' + this.user.lastName,
                    authorThumb: this.user.thumb,
                    timestamp: Date.now(),
                    message: language,
                    image: this.post.image || null,
                    translatedFrom: this.user.language
                };
                __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]().collection('regionPosts').doc(this.newDoc.id).set(post);
                this.viewCtrl.dismiss(post);
                return [2 /*return*/];
            });
        });
    };
    AddRegionPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-region-post',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\add-region-post\add-region-post.html"*/'<!--<ion-header class="cHeader">-->\n<!--  <ion-navbar>-->\n<!--    <ion-title>-->\n<!--      Regions-->\n<!--      <button ion-button>-->\n<!--        Username <ion-icon name="person-add" style="padding-left: 5px;"></ion-icon>-->\n<!--      </button>-->\n<!--    </ion-title>-->\n<!--  </ion-navbar>-->\n<!--</ion-header>-->\n<ion-content padding>\n  <ion-title style="text-align: center;">\n    New Post\n    <button ion-button style="position: fixed; top: 0px; left: 0px; background-color: transparent; box-shadow: none; color: black; height: 25px;font-size: 1.2em; padding: 0px; margin: 0px;"\n            (click)="viewCtrl.dismiss()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n  </ion-title>\n\n  <div class="profile_header">\n    <div class="img_cont" style="width: 100%; text-align: center;">\n      <img [src]="post.image" *ngIf="post && post.image" (click)="presentActionSheet()" style="max-height: 100px;" />\n      <button ion-button style="background-color: #02be98; margin-top: 20px;" (click)="presentActionSheet()" *ngIf="!post.image">Add Picture</button>\n    </div>\n  </div>\n\n  <ion-item>\n    <ion-label stacked>Name of Location (Momument, State, etc.)</ion-label>\n    <ion-input [(ngModel)]="post.locationName"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Country</ion-label>\n    <ion-input [(ngModel)]="post.region"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Description</ion-label>\n    <ion-textarea rows="3" [(ngModel)]="post.description"></ion-textarea>\n  </ion-item>\n\n  <button ion-button full style="background-color: #02be98; margin-top: 20px;" (click)="savePost()">Post</button>\n</ion-content>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\add-region-post\add-region-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */]])
    ], AddRegionPostPage);
    return AddRegionPostPage;
}());

//# sourceMappingURL=add-region-post.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
var EmojiProvider = /** @class */ (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(385);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chats_chats__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modal_contact_modal_contact__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng4_intl_phone__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_conversation_conversation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_emoji__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_emoji_picker_emoji_picker__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_chat_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_relative_time__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_complete_profile_complete_profile__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_sort_by_time__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_sort_by_last_message__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profile_modal_profile_modal__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_premium_modal_premium_modal__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_admob_free__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_admob_pro_ngx__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_day_or_time__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_start_group_chat_start_group_chat__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_barcode_scanner__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_qrcode__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_tempConversation_tempConversation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_twilioConversation_twilioConversation__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_temp_chat_temp_chat__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_regions_regions__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_add_region_post_add_region_post__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_device__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ionic_img_viewer__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_lazy_load_images__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_lazy_load_images___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ngx_lazy_load_images__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular_linky__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular_linky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_angular_linky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_clipboard__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_fcm__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// import { Firebase } from '@ionic-native/firebase';



// import { SMS } from '@ionic-native/sms';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_temp_chat_temp_chat__["a" /* TempChatPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_start_group_chat_start_group_chat__["a" /* StartGroupChatPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_conversation_conversation__["a" /* ConversationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_tempConversation_tempConversation__["a" /* TempConversationPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_twilioConversation_twilioConversation__["a" /* TwilioConversationPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_regions_regions__["a" /* RegionsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_complete_profile_complete_profile__["a" /* CompleteProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_relative_time__["a" /* RelativeTime */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_day_or_time__["a" /* DayOrTime */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_sort_by_time__["a" /* SortByTime */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_sort_by_last_message__["a" /* SortByLastMessage */],
                __WEBPACK_IMPORTED_MODULE_16__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_contact_modal_contact__["a" /* ModalContactPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_modal_profile_modal__["a" /* ProfileModalPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_premium_modal_premium_modal__["a" /* PremiumModalPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_add_region_post_add_region_post__["a" /* AddRegionPostPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng4_intl_phone__["a" /* InternationalPhoneModule */],
                __WEBPACK_IMPORTED_MODULE_30_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_37_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_38_ngx_lazy_load_images__["LazyLoadImagesModule"],
                __WEBPACK_IMPORTED_MODULE_39_angular_linky__["LinkyModule"],
                // IonicModule.forRoot(MyApp)
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                    preloadModules: true,
                    mode: 'md'
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_temp_chat_temp_chat__["a" /* TempChatPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_start_group_chat_start_group_chat__["a" /* StartGroupChatPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_conversation_conversation__["a" /* ConversationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_tempConversation_tempConversation__["a" /* TempConversationPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_twilioConversation_twilioConversation__["a" /* TwilioConversationPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_regions_regions__["a" /* RegionsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_complete_profile_complete_profile__["a" /* CompleteProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_contact_modal_contact__["a" /* ModalContactPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_modal_profile_modal__["a" /* ProfileModalPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_premium_modal_premium_modal__["a" /* PremiumModalPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_add_region_post_add_region_post__["a" /* AddRegionPostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__providers_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_17__providers_chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_admob_pro_ngx__["a" /* AdMobPro */],
                // Firebase,
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__["a" /* Camera */],
                // SMS,
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_device__["a" /* Device */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_free__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_pro_ngx__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { Firebase } from '@ionic-native/firebase';


// import { Keyboard } from "@ionic-native/keyboard/ngx";
var MyApp = /** @class */ (function () {
    function MyApp(platform, splashScreen, admobFree, admob, device, 
        // private firebaseMessaging: Firebase,
        fcm) {
        var _this = this;
        this.platform = platform;
        this.admobFree = admobFree;
        this.admob = admob;
        this.device = device;
        this.fcm = fcm;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.isIphoneX = false;
        this.isIphone = false;
        this.isBrowser = false;
        splashScreen.show();
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.initializeApp({
            apiKey: "AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk",
            authDomain: "letstalk-205602.firebaseapp.com",
            databaseURL: "https://letstalk-205602.firebaseio.com",
            projectId: "letstalk-205602",
            storageBucket: "letstalk-205602.appspot.com",
            messagingSenderId: "893888740923"
        });
        var firestore = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.firestore();
        var settings = { timestampsInSnapshots: true };
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
        platform.ready().then(function () {
            if (platform.is('ios')) {
                _this.isIphone = true;
            }
            if (_this.device.model === 'iPhone10,3' || _this.device.model === 'iPhone10,6') {
                _this.isIphone = false;
                _this.isIphoneX = true;
            }
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (localStorage.getItem('user')) {
                var user_1 = JSON.parse(localStorage.getItem('user'));
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */];
                if (!_this.isBrowser && window.cordova) {
                    _this.fcm.getToken().then(function (token) {
                        user_1.token = token;
                        // firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: JSON.stringify({ token: token }) })
                        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.firestore().collection('users').doc(user_1.$id).update(user_1);
                    }).catch(function (error) { return console.error('Error getting token', error); });
                    _this.fcm.onTokenRefresh().subscribe(function (token) {
                        user_1.token = token;
                        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.firestore().collection('users').doc(user_1.$id).update(user_1);
                    });
                }
            }
            setTimeout(function () {
                splashScreen.hide();
            }, 1000);
            // ca-app-pub-2963906649426641~2020960624
            // id: 'ca-app-pub-2963906649426641/2811298114'
            if (!_this.isBrowser) {
                window.addEventListener('keyboardDidHide', function () {
                    console.log("Keyboard is Hidden");
                    _this.admobFree.banner.hide().then(function () {
                        setTimeout(function () { return _this.admobFree.banner.show(); }, 100);
                    });
                });
                // this.keyboard.onKeyboardHide().subscribe(() => {
                //   this.admobFree.banner.hide().then(() => {
                //     setTimeout(() => this.admobFree.banner.show(), 100);
                //   });
                // });
                try {
                    var adId = void 0;
                    if (_this.platform.is('android')) {
                        adId = 'ca-app-pub-9161240946129783/3619767735';
                        adId = 'ca-app-pub-9161240946129783/8770907313';
                        adId = 'ca-app-pub-9161240946129783/5293507360';
                        adId = 'ca-app-pub-9161240946129783/3619767735';
                        adId = 'ca-app-pub-9161240946129783/5293507360';
                    }
                    else if (_this.platform.is('ios')) {
                        adId = 'ca-app-pub-9161240946129783/2043371307';
                        adId = 'ca-app-pub-9161240946129783/8071444445';
                    }
                    //ios:ca-app-pub-9161240946129783~6568514644
                    //android: ca-app-pub-9161240946129783~4517916437
                    // this.admob.prepareInterstitial({adId: adId})
                    // .then(() => { this.admob.showInterstitial(); });
                    // this.admob.createBanner({adId: adId, isTesting: true})
                    //   .then(() => { this.admob.showBanner(4); });
                    var bannerConfig = {
                        isTesting: false,
                        offsetTopBar: false,
                        overlap: false,
                        id: adId,
                        autoShow: true
                    };
                    _this.admobFree.banner.config(bannerConfig);
                    //firebase.firestore().collection('hello').doc(Date.now() + '').set({data: '3'})
                    _this.admobFree.banner.prepare().then(function () {
                        console.log('success prepare');
                        _this.admobFree.banner.show();
                        // success
                    }).catch(function (e) {
                        console.log(e);
                    });
                }
                catch (e) {
                    console.log(e);
                    //firebase.firestore().collection('hello').doc(Date.now() + '').set({ data: JSON.stringify(e) })
                }
            }
        });
    }
    MyApp.prototype.convertArrayOfObjectsToCSV = function (args) {
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
        data.forEach(function (item) {
            ctr = 0;
            keys.forEach(function (key) {
                if (ctr > 0)
                    result += columnDelimiter;
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    };
    MyApp.prototype.downloadCSV = function (csvData, args) {
        var data, filename, link;
        var csv = this.convertArrayOfObjectsToCSV({
            data: csvData
        });
        if (csv == null)
            return;
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
    };
    MyApp.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter");
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\app\app.html"*/'<ion-nav [root]="rootPage" [ngClass]="{\'isIphoneX\': isIphoneX, \'isIphone\': isIphone, \'isBrowser\': isBrowser}"></ion-nav>\n\n<div>\n  <!-- Global site tag (gtag.js) - Google Analytics -->\n  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-68876110-7"></script>\n  <script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag(\'js\', new Date());\n\n    gtag(\'config\', \'UA-68876110-7\');\n  </script>\n</div>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_pro_ngx__["a" /* AdMobPro */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_modal_profile_modal__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__premium_modal_premium_modal__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, modalCtrl, ngZone, alertCtrl, viewCtrl, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.ngZone = ngZone;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.viewingSomeone = false;
        this.browser = false;
        this.IsCloseButton = false;
        var profile = this.navParams.get('profile');
        if (profile) {
            this.viewingSomeone = true;
            this.IsCloseButton = true;
            __WEBPACK_IMPORTED_MODULE_7_firebase__["firestore"]().collection('users').doc(profile.$id).get().then(function (prof) {
                _this.user = prof.data();
                _this.loadUserInfo();
            });
        }
        else {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.loadUserInfo();
        }
        this.browser = !!JSON.parse(localStorage.getItem('isBrowser'));
    }
    ProfilePage.prototype.loadUserInfo = function () {
        var _this = this;
        if (!this.user.thumb) {
            this.user.thumb = 'assets/imgs/nopic-profile.png';
        }
        this.getLanguage()
            .subscribe(function (res) {
            _this.langList = res;
            _this.formatLanguage();
        });
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__profile_modal_profile_modal__["a" /* ProfileModalPage */]);
        myModal.onDidDismiss(function (user) {
            _this.user = JSON.parse(localStorage.getItem('user'));
            _this.formatLanguage();
        });
        myModal.present();
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Are you sure?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        return;
                    }
                },
                {
                    text: 'Yes',
                    handler: function (data) {
                        localStorage.removeItem('user');
                        _this.ngZone.run(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                            var loading = _this.loadingCtrl.create({
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
    };
    ProfilePage.prototype.getLanguage = function () {
        var msgListUrl = './assets/language/language.json';
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["map"])(function (response) { return response.array; }));
    };
    ProfilePage.prototype.formatLanguage = function () {
        var _this = this;
        this.langList.forEach(function (lang) {
            if (_this.user.language === lang.code) {
                _this.language = lang.name;
            }
        });
    };
    ProfilePage.prototype.gotoPremium = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__premium_modal_premium_modal__["a" /* PremiumModalPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <!--<ion-buttons left *ngIf="browser">-->\n    <!--<button ion-button icon-only (click)="viewCtrl.dismiss()">-->\n    <!--<ion-icon name="arrow-back"></ion-icon>-->\n    <!--</button>-->\n    <!--</ion-buttons>-->\n    <ion-title align-title="center">\n      Profile\n      <span *ngIf="browser">*Editing profile on browser coming soon</span>\n    </ion-title>\n    <ion-buttons class="btnClose" end>\n      <button ion-button *ngIf="IsCloseButton" (click)="viewCtrl.dismiss()">\n        <ion-icon slot="icon-only" ios="ios-close-circle" md="md-close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <qr-code [value]="user?.$id" [size]="150" class="qrCode"></qr-code>\n  <ion-buttons *ngIf="!viewingSomeone && !browser && !IsCloseButton" class="btn_edit" end>\n    <button ion-button (click)="editProfile()">Edit</button>\n  </ion-buttons>\n  <!-- <ion-buttons class="btnClose" end>\n    <button ion-button  *ngIf="IsCloseButton" (click)="viewCtrl.dismiss()" >\n      <ion-icon slot="icon-only" ios="ios-close-circle" md="md-close-circle"></ion-icon>\n    </button>\n  </ion-buttons> -->\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <div class="profile_header">\n      <div class="img_cont">\n        <img [src]="user.thumb" imageViewer *ngIf="user && user.thumb" />\n      </div>\n    </div>\n    <!-- <span style="display: block; width: 100%; height: 175px; text-align: center; margin: 20px 0px 0px;"></span> -->\n\n    <br>\n    <ion-list class="profile_list">\n      <ion-item>\n        <ion-label>Username</ion-label>\n        <ion-label>{{user?.username || \'Not Set\'}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Phone</ion-label>\n        <ion-label>{{user?.fullPhone || \'Not Set\'}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-label>{{user?.email || \'Not Set\'}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-label>{{user?.firstName || \'Not Set\'}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Last Name</ion-label>\n        <ion-label>{{user?.lastName || \'Not Set\'}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Current Language</ion-label>\n        <ion-label>{{language || \'Not Set\'}}</ion-label>\n      </ion-item>\n      <ion-item *ngIf="user?.twilio_phone_number">\n        <ion-label>Premium Account No</ion-label>\n        <ion-label>{{user.twilio_phone_number}} &nbsp;&nbsp; {{user.status}}</ion-label>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label><button ion-button color="secondary" clear (click)="gotoPremium()">GET PREMIUM ></button></ion-label>\n      </ion-item> -->\n    </ion-list>\n    <p *ngIf="!viewingSomeone" (click)="logout()" class="btn_logout">\n      Sign Out\n    </p>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_contact_modal_contact__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_clipboard__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import { ChatService, UserInfo } from "../../providers/chat-service";


// import * as moment from 'moment';




var ConversationPage = /** @class */ (function () {
    function ConversationPage(navCtrl, navParams, 
        // private chatService: ChatService,
        // private events: Events,
        http, ngZone, modalCtrl, alertCtrl, toastCtrl, loadingCtrl, camera, actionSheetCtrl, platform, clipboard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.ngZone = ngZone;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.clipboard = clipboard;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.hasLoadedMessages = false;
        this.readBy = [];
        this.typing = false;
        this.objectKeys = Object.keys;
        this.link = 'www.google.com';
        this.info = {
            title: '',
            description: '',
            icon: '',
            site: '',
        };
        this.urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        this.lastInputScrollHeight = 0;
        this.isBrowser = false;
        this.loadingStopped = true;
        this.hasScrolled = false;
        this.firebaseSubs = [];
        this.lastMessageSent = {
            $id: ''
        };
        this.avoidDuplicateAfterSending = {};
        this.loadingMore = false;
        this.lastInputTextLength = 0;
        this.profile = JSON.parse(localStorage.getItem('user'));
        this.ngZone.run(function () {
            _this.firebaseSubs.forEach(function (sub) {
                sub();
            });
        });
    }
    ConversationPage.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes && changes.conversation) {
            this.ngZone.run(function () {
                _this.firebaseSubs.forEach(function (sub) {
                    sub();
                });
                _this.conversation = changes.conversation.currentValue;
                _this.ngOnInit();
            });
        }
    };
    ConversationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.hasScrolled = false;
        this.isBrowser = (this.platform.is('core') || this.platform.is('mobileweb'));
        // this.toUser = {
        //   id: navParams.get('toUserId'),
        //   name: navParams.get('toUserName')
        // };
        // Get mock user information
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.navParams.get('conversation')) {
            this.conversation = this.navParams.get('conversation');
        }
        if (!this.conversation) {
            return;
        }
        this.getMsg();
        var users = this.conversation.users;
        this.firebaseSubs.push(__WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(this.conversation.$id).onSnapshot(function (querySnapshot) {
            _this.conversation = querySnapshot.data();
            if (!_this.conversation) {
                return;
            }
            var hasUserLanguage = false;
            _this.conversation.languages.forEach(function (lan) {
                if (lan == _this.user.language) {
                    hasUserLanguage = true;
                }
            });
            _this.conversation.users.forEach(function (user) {
                users.forEach(function (userData, i) {
                    if (userData.$id === user.$id) {
                        _this.conversation.users[i].firstName = userData.firstName || '';
                        _this.conversation.users[i].lastName = userData.lastName || '';
                        _this.conversation.users[i].thumb = userData.thumb || '';
                    }
                });
            });
            if (!hasUserLanguage) {
                _this.conversation.languages.push(_this.user.language); //&source=${this.conversation.lastMessage.translatedFrom}
                _this.http.get("https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + _this.user.language + "&q=" + _this.conversation.lastMessage.message[_this.conversation.lastMessage.translatedFrom] + "&format=text")
                    .toPromise()
                    .then(function (response) {
                    _this.conversation.lastMessage.message[_this.user.language] = response.data.translations[0].translatedText;
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(_this.conversation.$id).update(_this.conversation);
                });
            }
            _this.readBy = [];
            var readByKeys = Object.keys(_this.conversation.readBy);
            readByKeys.forEach(function (key) {
                _this.readBy.push(_this.conversation.readBy[key]);
            });
        }));
        var objDiv;
        if (JSON.parse(localStorage.getItem('isBrowser'))) {
            objDiv = document.getElementsByClassName('scroll-content')[1];
            if (!objDiv)
                return;
            objDiv.scrollTop = objDiv.scrollHeight;
            objDiv.onscroll = function () {
                if (objDiv.scrollTop && objDiv.scrollTop < 100 && !_this.loadingMore) {
                    _this.loadingMore = true;
                    _this.getNextSetOfMessages(objDiv);
                }
            };
        }
        else if (this.content._scroll) {
            objDiv = document.getElementsByClassName('scroll-content')[0];
            if (!objDiv)
                return;
            objDiv.scrollTop = objDiv.scrollHeight;
            // this.content.scrollToBottom();
        }
    };
    ConversationPage.prototype.didScroll = function (e) {
        if (JSON.parse(localStorage.getItem('isBrowser')))
            return;
        if (e && e.scrollTop && parseInt(e.scrollTop) < 100 && !this.loadingMore) {
            this.loadingMore = true;
            var objDiv = document.getElementsByClassName('scroll-content')[0];
            this.getNextSetOfMessages(objDiv);
        }
    };
    ConversationPage.prototype.resizeView = function () {
        document.getElementById('message-entry').style.height = document.getElementById('message-entry').scrollHeight + 'px';
        var scrollBottom = document.getElementById('message-entry').scrollHeight - 35 > 65 ? 65 : document.getElementById('message-entry').scrollHeight - 35;
        document.getElementsByClassName('message-wrap')[0].style.marginBottom = scrollBottom + 'px';
        this.scrollToBottom();
        this.lastInputScrollHeight = document.getElementById('message-entry').scrollHeight;
    };
    ConversationPage.prototype.resetView = function () {
        document.getElementById('message-entry').style.height = 'auto';
        document.getElementsByClassName('message-wrap')[0].style.marginBottom = '0px';
        this.lastInputScrollHeight = document.getElementById('message-entry').scrollHeight;
    };
    ConversationPage.prototype.isTyping = function (e) {
        var _this = this;
        var hadToSizeDown = false;
        if (this.editorMsg.length < this.lastInputTextLength) {
            if (!JSON.parse(localStorage.getItem('isBrowser'))) {
                document.getElementById('message-entry').style.height = 'auto';
                hadToSizeDown = true;
            }
        }
        this.lastInputTextLength = this.editorMsg.length;
        if (hadToSizeDown || document.getElementById('message-entry').scrollHeight !== this.lastInputScrollHeight) {
            if (!JSON.parse(localStorage.getItem('isBrowser'))) {
                this.resizeView();
            }
        }
        if (!this.conversation.typing) {
            this.conversation.typing = {};
        }
        if (!this.typing) {
            this.conversation.typing[this.user.$id] = true;
            __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(this.conversation.$id).update(this.conversation);
        }
        this.typing = true;
        setTimeout(function () {
            _this.typing = false;
            setTimeout(function () {
                if (!_this.typing) {
                    _this.conversation.typing[_this.user.$id] = false;
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(_this.conversation.$id).update(_this.conversation);
                }
            }, 200);
        }, 1000);
    };
    ConversationPage.prototype.copyText = function (text) {
        if (JSON.parse(localStorage.getItem('isBrowser'))) {
            var content = document.getElementById('copy-container');
            content.value = text;
            content.select();
            document.execCommand("copy");
        }
        else {
            this.clipboard.copy(text);
        }
        var toast = this.toastCtrl.create({
            message: 'Copied to clipboard!',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ConversationPage.prototype.ionViewDidLoad = function () {
        // translate('Ik spreek Engels', {to: 'en'}).then(res => {
        //   console.log(res.text);
        //   //=> I speak English
        //   console.log(res.from.language.iso);
        //   //=> nl
        // }).catch(err => {
        //   console.error(err);
        // });
    };
    ConversationPage.prototype.ionViewWillLeave = function () {
        this.firebaseSubs.forEach(function (sub) {
            sub();
        });
    };
    ConversationPage.prototype.ionViewDidEnter = function () {
        // setTimeout(() => {
        //   this.showPreview()
        // }, 3000)
    };
    ConversationPage.prototype.onFocus = function () {
        if (!JSON.parse(localStorage.getItem('isBrowser'))) {
            this.showEmojiPicker = false;
            this.content.resize();
            this.scrollToBottom();
        }
    };
    ConversationPage.prototype.switchEmojiPicker = function () {
        if (!JSON.parse(localStorage.getItem('isBrowser'))) {
            this.showEmojiPicker = !this.showEmojiPicker;
            if (!this.showEmojiPicker) {
                this.focus();
            }
            else {
                this.setTextareaScroll();
            }
            this.content.resize();
            this.scrollToBottom();
        }
    };
    ConversationPage.prototype.getMsg = function () {
        var _this = this;
        setTimeout(function () {
        }, 3000);
        if (this.loadingStopped) {
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.loading.present();
            this.loadingStopped = false;
        }
        this.firebaseSubs.push(__WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(this.conversation.$id).collection('messages').orderBy("time", "desc").limit(25).onSnapshot(function (querySnapshot) {
            if (!_this.loadingStopped) {
                _this.msgList = [];
            }
            setTimeout(function () {
                if (!_this.loadingStopped) {
                    _this.loading.dismiss();
                    _this.loadingStopped = true;
                    _this.hasScrolled = true;
                }
            }, 200);
            var objlstmsgrev = querySnapshot.docChanges().reverse();
            objlstmsgrev.forEach(function (change, index) {
                if (change.type === "added") {
                    var tmpMsg_1 = change.doc.data();
                    if (!tmpMsg_1.message[_this.user.language] && !tmpMsg_1.mediaUrl) {
                        _this.http.get("https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + _this.user.language + "&q=" + tmpMsg_1.message[tmpMsg_1.translatedFrom] + "&format=text")
                            .toPromise()
                            .then(function (response) {
                            tmpMsg_1.message[_this.user.language] = response.data.translations[0].translatedText;
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(_this.conversation.$id).collection('messages').doc(change.doc.id).update(tmpMsg_1);
                            _this.ngZone.run(function () {
                                if (!_this.avoidDuplicateAfterSending[tmpMsg_1.$id]) {
                                    _this.msgList.unshift(tmpMsg_1);
                                }
                                setTimeout(function () {
                                    _this.scrollToBottom();
                                }, 600);
                            });
                        }, function (msg) {
                            alert('Check Internet Connection');
                            //   this.http.get(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=${this.user.language}&q=${tmpMsg.message[tmpMsg.translatedFrom]}&format=text`).toPromise().then(
                            //     (response: any) => { // Success
                            //       tmpMsg.message[this.user.language] = response.data.translations[0].translatedText;
                            //       firebase.firestore().collection('conversations').doc(this.conversation.$id).collection('messages').doc(change.doc.id).update(tmpMsg);
                            //       this.ngZone.run(() => {
                            //         this.msgList.push(tmpMsg);
                            //         setTimeout(() => {
                            //           this.scrollToBottom();
                            //         }, 200);
                            //         setTimeout(() => {
                            //           this.scrollToBottom();
                            //         }, 400);
                            //       })
                            //     },msg => {})
                        });
                    }
                    else {
                        _this.ngZone.run(function () {
                            // if (change.doc.data().$id == this.lastMessageSent.$id && !this.avoidDuplicateAfterSending[change.doc.data().$id]) {
                            //   this.avoidDuplicateAfterSending[change.doc.data().$id] = true;
                            //   this.msgList.push(change.doc.data());
                            // } else if (!this.avoidDuplicateAfterSending[change.doc.data().$id]) {
                            //   //this.msgList.unshift(change.doc.data());
                            //   this.msgList.push(change.doc.data());
                            // }
                            _this.avoidDuplicateAfterSending[change.doc.data().$id] = true;
                            _this.msgList.push(change.doc.data());
                            setTimeout(function () {
                                _this.scrollToBottom();
                            }, 600);
                        });
                    }
                }
            });
            if (!_this.hasLoadedMessages) {
                _this.hasLoadedMessages = true;
            }
            setTimeout(function () {
                _this.ngZone.run(function () {
                    console.log("---------------------------");
                    _this.conversation.readBy[_this.user.$id] = _this.user.username;
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(_this.conversation.$id).update({ readBy: _this.conversation.readBy });
                    _this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
                });
            }, 700);
            // this.conversation.readBy[this.user.$id] = this.user.username;
            // firebase.firestore().collection('conversations').doc(this.conversation.$id).update({ readBy: this.conversation.readBy });
            // this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        }));
    };
    ConversationPage.prototype.getNextSetOfMessages = function (el) {
        var _this = this;
        var localHasScrolled = false;
        if (!this.conversation || !this.conversation.$id || !this.lastVisible)
            return;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(this.conversation.$id).collection('messages').orderBy("time", "desc").startAfter(this.lastVisible).limit(25).get().then(function (querySnapshot) {
            _this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            _this.loadingMore = false;
            querySnapshot.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    if (el && !localHasScrolled) {
                        localHasScrolled = true;
                        el.scrollTop = 5;
                    }
                    _this.msgList.unshift(change.doc.data());
                }
            });
        });
    };
    ConversationPage.prototype.openLink = function (url) {
        window.open(url);
    };
    ConversationPage.prototype.linkify = function (text) {
        var returnVal = null;
        text.replace(this.urlRegex, function (url) {
            returnVal = url;
        });
        return returnVal;
    };
    ConversationPage.prototype.sendMsg = function (downloadUrl) {
        if (downloadUrl === void 0) { downloadUrl = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta, _a, conversation, message, newMessage, promises, tokens, readBy, usersRead;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!downloadUrl && !this.editorMsg.trim())
                            return [2 /*return*/];
                        if (this.editorMsg.trim()) {
                            this.editorMsg = this.editorMsg.replace('↵', '');
                        }
                        meta = {
                            link: null
                        };
                        if (!this.linkify(this.editorMsg)) return [3 /*break*/, 2];
                        _a = meta;
                        return [4 /*yield*/, this.loadLinkPreview(this.linkify(this.editorMsg))];
                    case 1:
                        _a.link = _b.sent();
                        _b.label = 2;
                    case 2:
                        conversation = this.conversation;
                        message = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(conversation.$id).collection('messages').doc();
                        newMessage = {
                            $id: message.id,
                            sentBy: this.user.$id,
                            username: this.user.username,
                            firstName: this.user.firstName || '',
                            lastName: this.user.lastName || '',
                            translatedFrom: this.user.language,
                            thumb: this.user.thumb || '',
                            time: Date.now(),
                            type: downloadUrl ? 'image' : 'text',
                            mediaUrl: downloadUrl,
                            message: {},
                            meta: meta
                        };
                        promises = [];
                        this.conversation.languages.forEach(function (language) {
                            // newMessage.message[this.user.language]
                            // if (language !== this.user.language) {
                            var promise = new Promise(function (resolve, reject) {
                                var apiURL = "https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + language + "&q=" + _this.editorMsg + "&format=text";
                                _this.http.get(apiURL)
                                    .toPromise()
                                    .then(function (response) {
                                    newMessage.message[language] = response.data.translations[0].translatedText;
                                    resolve();
                                }, function (msg) {
                                    _this.http.get(apiURL).toPromise().then(function (response) {
                                        newMessage.message[language] = response.data.translations[0].translatedText;
                                        resolve();
                                    }, function (msg) {
                                    });
                                });
                            });
                            promises.push(promise);
                            // }
                        });
                        tokens = [];
                        this.conversation.users.forEach(function (user) {
                            if (user.$id === _this.user.$id)
                                return;
                            var promise = new Promise(function (resolve, reject) {
                                __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').doc(user.$id).get().then(function (token) {
                                    if (token.data().token) {
                                        tokens.push({ token: token.data().token, language: user.language, name: (_this.user.firstName + ' (' + _this.user.username + ')') });
                                    }
                                    resolve();
                                }).catch(function () {
                                    resolve();
                                });
                            });
                            promises.push(promise);
                        });
                        newMessage.message[this.user.language] = this.editorMsg || '';
                        this.editorMsg = '';
                        if (!JSON.parse(localStorage.getItem('isBrowser'))) {
                            this.resetView();
                        }
                        if (!this.showEmojiPicker) {
                            this.focus();
                        }
                        readBy = {};
                        if (this.conversation.readBy) {
                            usersRead = Object.keys(this.conversation.readBy);
                            usersRead.forEach(function (userId) {
                                readBy[userId] = '';
                            });
                        }
                        readBy[this.user.$id] = this.user.username;
                        this.conversation.readBy = readBy;
                        Promise.all(promises).then(function (values) {
                            // newMessage.time = moment.utc().format('YYYY-MM-DD HH:mm:ss')
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(conversation.$id).collection('messages').doc(newMessage.$id).set(newMessage);
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(conversation.$id).update({
                                lastMessage: newMessage,
                                readBy: readBy
                            });
                            _this.lastMessageSent = newMessage;
                            var apiURL = 'https://us-central1-letstalk-205602.cloudfunctions.net/sendMessage';
                            _this.http.post(apiURL, {
                                // conversation: this.conversation,
                                message: newMessage,
                                // readBy: readBy,
                                tokens: tokens
                            }).toPromise().then(function (response) {
                            }).catch(function (error) {
                                console.log(error);
                            });
                        });
                        this.scrollToBottom();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConversationPage.prototype.pushNewMsg = function (msg) {
        // const userId = this.user.id,
        //   toUserId = this.toUser.id;
        // // Verify user relationships
        // if (msg.userId === userId && msg.toUserId === toUserId) {
        //   let translationSub = this.http.post(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&source=en&target=af&q=${msg.message}`, {}).subscribe((response: any) => {
        //     console.log(response)
        //     msg.message = response.data.translations[0].translatedText;
        //     this.msgList.push(msg);
        //     translationSub.unsubscribe();
        //   });
        // } else if (msg.toUserId === userId && msg.userId === toUserId) {
        //   this.msgList.push(msg);
        // }
        // this.scrollToBottom();
    };
    ConversationPage.prototype.addByUsername = function (fab) {
        var _this = this;
        fab.close();
        var alert = this.alertCtrl.create({
            title: 'Start a conversation',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Enter Username'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (!data.username) {
                            return;
                        }
                        if (data.username == _this.user.username) {
                            var toast = _this.toastCtrl.create({
                                message: 'You cannot invite yourself.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return;
                        }
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').where('username', '==', data.username.toLowerCase()).get().then(function (profiles) {
                            if (!profiles.docs.length) {
                                var toast = _this.toastCtrl.create({
                                    message: 'User not found.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            profiles.forEach(function (profile) {
                                if (!profile.data()) {
                                    var toast = _this.toastCtrl.create({
                                        message: 'User not found.',
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                }
                                else {
                                    _this.addUser(profile.data());
                                }
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ConversationPage.prototype.addByContacts = function (fab) {
        var _this = this;
        fab.close();
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_contact_modal_contact__["a" /* ModalContactPage */]);
        myModal.onDidDismiss(function (data) {
            if (data) {
                if (data == _this.user.phone) {
                    var toast = _this.toastCtrl.create({
                        message: 'You cannot start a chat with yourself.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    return;
                }
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Searching for user...'
                });
                loading_1.present();
                var results_1 = [];
                var promises = [
                    new Promise(function (resolve, reject) {
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').where('fullPhone', '==', ('+' + data)).get().then(function (profiles) {
                            profiles.forEach(function (profile) {
                                results_1.push(profile);
                            });
                            resolve();
                        });
                    }),
                    new Promise(function (resolve, reject) {
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').where('phone', '==', data).get().then(function (profiles) {
                            profiles.forEach(function (profile) {
                                results_1.push(profile);
                            });
                            resolve();
                        });
                    })
                ];
                Promise.all(promises).then(function (values) {
                    loading_1.dismiss();
                    if (!results_1.length) {
                        var toast = _this.toastCtrl.create({
                            message: 'User not found.',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        return;
                    }
                    results_1.forEach(function (profile) {
                        if (!profile.data()) {
                            var toast = _this.toastCtrl.create({
                                message: 'User not found.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else if (profile.data().username == _this.user.username) {
                            var toast = _this.toastCtrl.create({
                                message: 'You cannot start a chat with yourself.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return;
                        }
                        else {
                            _this.addUser(profile.data());
                        }
                    });
                });
            }
        });
        myModal.present();
    };
    ConversationPage.prototype.addUser = function (user) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').doc(this.user.$id).collection('conversations').doc(this.conversation.$id).set({
            chatId: this.conversation.$id
        });
        this.conversation.users.push({
            $id: user.$id,
            language: user.language,
            username: user.username,
            firstName: user.firstName || '',
            lastName: user.lastName || ''
        });
        var hasLanguage = false;
        this.conversation.languages.forEach(function (language) {
            if (language == user.language) {
                hasLanguage = true;
            }
        });
        if (!hasLanguage) {
            this.conversation.languages.push(user.language);
        }
        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(this.conversation.$id).update(this.conversation);
    };
    ConversationPage.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    ConversationPage.prototype.viewProfile = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], {
            profile: user
        });
    };
    ConversationPage.prototype.scrollToBottom = function () {
        var objDiv;
        if (JSON.parse(localStorage.getItem('isBrowser'))) {
            objDiv = document.getElementsByClassName('scroll-content')[1];
            if (!objDiv)
                return;
            objDiv.scrollTop = objDiv.scrollHeight;
        }
        else if (this.content && this.content.scrollToBottom) {
            // objDiv = document.getElementsByClassName('scroll-content')[0];
            // if (!objDiv) return;
            // objDiv.scrollTop = objDiv.scrollHeight;
            this.content.scrollToBottom();
        }
    };
    ConversationPage.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    ConversationPage.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    ConversationPage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var self = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            var loading = _this.loadingCtrl.create({
                content: 'Sending Image...'
            });
            loading.present();
            // this.base64Image = 'data:image/jpeg;base64,' + imageData;
            var timestamp = Date.now();
            if (!_this.conversation.media)
                _this.conversation.media = [];
            __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref('conversations').child(_this.conversation.$id).child(timestamp + '.jpg')
                .putString(imageData, 'base64').then(function (snapshot) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref('conversations').child(_this.conversation.$id).child(timestamp + '.jpg').getDownloadURL().then(function (downloadURL) {
                    loading.dismiss();
                    _this.sendMsg(downloadURL);
                    _this.conversation.media.push({
                        downloadUrl: downloadURL,
                        fileName: timestamp + '.jpg'
                    });
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('conversations').doc(_this.conversation.$id).update(_this.conversation);
                }).catch(function (e) {
                    loading.dismiss();
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('testing').add({ downloadUrlPictureError: e });
                    alert('error');
                });
            }).catch(function (e) {
                loading.dismiss();
                __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('testing').add({ savePictureError: e });
                alert('error');
            });
        }, function (err) {
            // Handle error
            __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('testing').add({ getPictureError: err });
            alert('error');
        });
    };
    ConversationPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Take Photo',
                    //role: 'destructive',
                    handler: function () {
                        _this.takePhoto(1);
                    }
                },
                {
                    text: 'Add Photo',
                    handler: function () {
                        _this.takePhoto(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ConversationPage.prototype.loadLinkPreview = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var urlEncoded, requestUrl, apiKey, returnVal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlEncoded = encodeURIComponent(url);
                        requestUrl = "https://opengraph.io/api/1.0/site/" + urlEncoded;
                        apiKey = '5b85babfd90988b55a3f7034';
                        // If the apiKey is set then we build the URL like this!
                        if (apiKey) {
                            requestUrl = "https://opengraph.io/api/1.0/site/" + urlEncoded + '?app_id=' + apiKey;
                        }
                        returnVal = {
                            title: '',
                            description: '',
                            icon: '',
                            site: url,
                            rawUrl: url
                        };
                        return [4 /*yield*/, new Promise(function (resolve) {
                                var request = new XMLHttpRequest();
                                request.open('GET', requestUrl, true);
                                request.onload = function () {
                                    if (request.status >= 200 && request.status < 400) {
                                        // Success!
                                        var data = JSON.parse(request.responseText);
                                        if (!data || !data.hybridGraph) {
                                            resolve();
                                        }
                                        ;
                                        returnVal.title = data.hybridGraph.title;
                                        returnVal.description = data.hybridGraph.description;
                                        returnVal.icon = data.hybridGraph.image;
                                        returnVal.site = data.hybridGraph.site_name;
                                    }
                                    else {
                                        // We reached our target server, but it returned an error
                                    }
                                    resolve();
                                };
                                request.onerror = function () {
                                    // There was a connection error of some sort
                                };
                                request.send();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, returnVal];
                }
            });
        });
    };
    ConversationPage.prototype.expandMessage = function (msg, i) {
        if (!msg.expanded)
            msg.expanded = false;
        this.msgList[i].expanded = !msg.expanded;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ConversationPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ConversationPage.prototype, "messageInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ConversationPage.prototype, "conversation", void 0);
    ConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-conversation',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\conversation\conversation.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span *ngFor="let chatUser of conversation?.users">\n        <span class="innerCont" *ngIf="chatUser?.username !== user?.username" (click)="viewProfile(chatUser)">\n          <div class="img_cont">\n            <img class="user-img" [src]="chatUser?.thumb || \'assets/imgs/nopic-profile.png\'" onerror="this.src = \'assets/imgs/nopic-profile.png\'">\n          </div>\n          <div class="titleName">{{chatUser?.firstName || chatUser?.username}} <span *ngIf="chatUser?.firstName">{{chatUser?.lastName}}</span></div>\n        </span>\n      </span>\n    </ion-title>\n    <!--<ion-fab style="top: 0px;" top right #fab>-->\n      <!--<button ion-fab mini>-->\n        <!--<ion-icon name="add" role="img" class="icon icon-ios ion-ios-add" aria-label="add"></ion-icon>-->\n      <!--</button>-->\n      <!--<ion-fab-list side="left">-->\n        <!--<button ion-button (click)="addByContacts(fab)">-->\n          <!--Contacts <ion-icon name="contacts" style="padding-left: 5px;"></ion-icon>-->\n        <!--</button>-->\n        <!--<button ion-button (click)="addByUsername(fab)">-->\n          <!--Username <ion-icon name="person-add" style="padding-left: 5px;"></ion-icon>-->\n        <!--</button>-->\n      <!--</ion-fab-list>-->\n    <!--</ion-fab>-->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content (ionScroll)="didScroll($event)">\n\n  <div class="message-wrap">\n\n    <div *ngIf="!msgList || !msgList.length">\n      <br>\n      <br>\n      <br>\n      <h4 text-center>No messages yet</h4>\n    </div>\n\n    <div *ngIf="hasLoadedMessages" class="msg_cont">\n      <div *ngFor="let msg of msgList; let msgIndex = index;" class="message" [class.left]=" msg?.sentBy !== user.$id " [class.right]=" msg?.sentBy === user.$id" lazy-load-images>\n        <!-- <div class="img_cont">\n            <img class="user-img" [src]="msg.thumb || \'assets/imgs/nopic-profile.png\'" onerror="this.src=\'assets/imgs/nopic-profile.png\'" (click)="viewProfile({$id: msg?.sentBy})">\n        </div> -->\n        <div class="msg-detail" [ngClass]="{\'msg-detail-with-media\': msg?.mediaUrl}">\n          <div class="msg-content">\n            <!-- <span class="triangle"></span> -->\n            <img *ngIf="msg?.mediaUrl && hasScrolled" [attr.data-src]="msg?.mediaUrl || \'\'" (press)="copyText(msg?.mediaUrl)" imageViewer />\n            <p class="line-breaker">\n              <!--{{msg?.message[user.language]}}-->\n              <span [innerHTML]="msg?.message[user.language] | linky" (press)="copyText(msg?.message[user.language])" (click)="expandMessage(msg, msgIndex)" style="display: block;"></span>\n              <span *ngIf="msg?.expanded" [innerHTML]="msg?.message[msg?.translatedFrom] + \' - original\' | linky" (click)="expandMessage(msg, msgIndex)" style="display: block; padding-top: 10px; font-style: italic;"></span>\n            </p>\n            <div *ngIf="msg?.meta?.link" class="meta-link" (click)="openLink(msg?.meta?.link?.rawUrl)">\n              <div style="width: 100px; float: left;">\n                <img id="icon" style="width: 90px;" src="{{msg?.meta?.link?.icon}}" />\n              </div>\n              <h3>{{msg?.meta?.link?.title  || \'---------\'}}</h3>\n              <h6>{{msg?.meta?.link?.rawUrl}}</h6>\n              <span>{{msg?.meta?.link?.description || \'--------------------\'}}</span>\n            </div>\n          </div>\n          <!--<div class="msg-info">-->\n            <!--<p>-->\n              <!--{{msg?.username}}&nbsp;&nbsp;{{msg?.time | relativeTime}}</p>-->\n          <!--</div>-->\n        </div>\n      </div>\n      <h6 style="color: rgba(150, 150, 150, 0.8); font-size: 0.8em;" *ngIf="msgList.length">\n        Read by\n        <span *ngFor="let id of objectKeys(conversation?.readBy || {})" style="margin-right: 5px;">\n          {{conversation?.readBy[id]}}\n          <span *ngIf="conversation?.typing && conversation?.typing[id] && id !== profile?.$id">is typing...</span>\n        </span>\n      </h6>\n    </div>\n\n  </div>\n\n  <input type="text" id="copy-container" style="position: fixed; left: -50px; opacity: 0;" />\n\n</ion-content>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'45px\'">\n  <div class="input-wrap" style="padding-left: 0px;">\n    <!--<button ion-button clear icon-only item-right (click)="switchEmojiPicker()">-->\n      <!--<ion-icon name="md-happy"></ion-icon>-->\n    <!--</button>-->\n    <!-- <button ion-button clear icon-only item-right (click)="presentActionSheet()" *ngIf="!isBrowser"> -->\n      <button ion-button clear icon-only item-right (click)="presentActionSheet()" >\n          <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n    </button>\n    <input type="text" #chat_input id="message-entry" placeholder="Message" [(ngModel)]="editorMsg" (ngModelChange)="isTyping($event)" (keyup.enter)="sendMsg()" (focusin)="onFocus()">\n    <!-- <textarea autosize #chat_input id="message-entry" placeholder="Message" [(ngModel)]="editorMsg" (ngModelChange)="isTyping($event)" (keyup.enter)="sendMsg()" (focusin)="onFocus()">\n    </textarea> -->\n    <button ion-button clear icon-only item-right (click)="sendMsg()">\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n    </button>\n  </div>\n  <!--<emoji-picker [(ngModel)]="editorMsg"></emoji-picker>-->\n</ion-footer>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\conversation\conversation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_clipboard__["a" /* Clipboard */]])
    ], ConversationPage);
    return ConversationPage;
}());

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Status</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  My Status\n</ion-content>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_emoji__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = /** @class */ (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    EmojiPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'emoji-picker',
            providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\components\emoji-picker\emoji-picker.html"*/'<!-- Generated template for the EmojiPickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item" (click)="setValue(item)" *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\components\emoji-picker\emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_emoji__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RelativeTime = /** @class */ (function () {
    function RelativeTime() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTime.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default()(new Date(value), { addSuffix: true });
    };
    RelativeTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'relativeTime',
        })
    ], RelativeTime);
    return RelativeTime;
}());

//# sourceMappingURL=relative-time.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByTime = /** @class */ (function () {
    function SortByTime() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortByTime.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        value.sort(function (a, b) {
            return a.time - b.time;
        });
        return value;
    };
    SortByTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sortByTime',
        })
    ], SortByTime);
    return SortByTime;
}());

//# sourceMappingURL=sort-by-time.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByLastMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByLastMessage = /** @class */ (function () {
    function SortByLastMessage() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortByLastMessage.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log(value);
        value.sort(function (a, b) {
            console.log(a, b);
            if (!a.lastMessage) {
                a.lastMessage = {
                    time: Date.now(),
                };
            }
            if (!b.lastMessage) {
                b.lastMessage = {
                    time: Date.now(),
                };
            }
            return b.lastMessage.time - a.lastMessage.time;
        });
        return value;
    };
    SortByLastMessage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sortByLastMessage',
        })
    ], SortByLastMessage);
    return SortByLastMessage;
}());

//# sourceMappingURL=sort-by-last-message.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayOrTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DayOrTime = /** @class */ (function () {
    function DayOrTime() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    DayOrTime.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var date = new Date(value);
        var today = new Date();
        var showDay = true;
        var ampm;
        if (today.getDate() == date.getDate() && today.getMonth() == date.getMonth() && today.getFullYear() == date.getFullYear()) {
            showDay = false;
            ampm = (date.getHours() >= 12) ? "pm" : "am";
        }
        return showDay ? (date.getMonth() + 1 + '-' + date.getDate()) : ((date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) + ':' + date.getMinutes() + ampm);
    };
    DayOrTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dayOrTime',
        })
    ], DayOrTime);
    return DayOrTime;
}());

//# sourceMappingURL=day-or-time.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalContactPage = /** @class */ (function () {
    function ModalContactPage(navCtrl, navParams, viewCtrl, contacts, toastCtrl, alertCtrl, ngZone, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.contacts = contacts;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.ngZone = ngZone;
        this.loadingCtrl = loadingCtrl;
        this.allContacts = [];
        this.allTempContacts = [];
        this.searchTerm = "";
        this.getContacts();
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ModalContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalContactPage');
    };
    ModalContactPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalContactPage.prototype.selectContact = function (phone) {
        this.viewCtrl.dismiss(phone.split(/[^0-9]+/).join(''));
    };
    ModalContactPage.prototype.capitalizeFirstLetter = function (string) {
        if (!string)
            return null;
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    ModalContactPage.prototype.getContacts = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading contacts...'
        });
        loading.present();
        this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], { filter: "", multiple: true })
            .then(function (data) {
            var contacts = [];
            data.forEach(function (contact) {
                if (contact && (_this.capitalizeFirstLetter(contact.displayName) || _this.capitalizeFirstLetter(contact.name) || _this.capitalizeFirstLetter(contact.nickname)) && (contact.phoneNumbers && contact.phoneNumbers[0].value)) {
                    contacts.push({
                        name: _this.capitalizeFirstLetter(contact.displayName || contact.name || contact.nickname),
                        phone: contact.phoneNumbers && contact.phoneNumbers[0].value ? contact.phoneNumbers[0].value : 'Number not found'
                    });
                }
            });
            contacts.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.ngZone.run(function () {
                _this.allContacts = contacts;
                _this.allTempContacts = contacts;
                loading.dismiss();
            });
            // firebase.firestore().collection('users').doc('this.user.$id').set({sdf: JSON.stringify(this.allContacts)});
            // firebase.firestore().collection('users').doc('this.user.$id').update({fds: JSON.stringify(data)});
        });
    };
    ModalContactPage.prototype.getContacts123 = function () {
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
    };
    ModalContactPage.prototype.setFilteredItems = function () {
        var _this = this;
        if (this.searchTerm.trim() !== '') {
            this.allContacts = this.allContacts.filter(function (item) {
                return item.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1 || item.phone.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
            });
        }
        else {
            this.ngZone.run(function () {
                _this.allContacts = [];
                _this.allContacts = _this.allTempContacts;
            });
        }
    };
    ModalContactPage.prototype.addNewPhoneNo = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (!data.phoneno) {
                            return;
                        }
                        if (data.phoneno == _this.user.phone || data.phoneno == _this.user.fullPhone) {
                            var toast = _this.toastCtrl.create({
                                message: 'You cannot start a chat with yourself.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return;
                        }
                        _this.selectContact(data.phoneno);
                    }
                }
            ]
        });
        alert.present();
    };
    ModalContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-contact',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\modal-contact\modal-contact.html"*/'<!--\n  Generated template for the ModalContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n    <ion-title>Select Contact</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionChange)="setFilteredItems()"></ion-searchbar>\n  <div style="height:100%">\n    <ion-list [virtualScroll]="allContacts" approxItemHeight="50px">\n      <ion-item *virtualItem="let o" (click)="selectContact(o.phone)">\n        {{ o.name }} - {{ o.phone }}\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf="allContacts.length==0" approxItemHeight="50px">\n      <ion-item>\n        No Record Found for {{searchTerm}}\n      </ion-item>\n      <ion-item>\n        <button ion-button color="secondary" clear (click)="addNewPhoneNo()">Add New Contact</button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\modal-contact\modal-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], ModalContactPage);
    return ModalContactPage;
}());

//# sourceMappingURL=modal-contact.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_contact_modal_contact__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TempConversationPage = /** @class */ (function () {
    function TempConversationPage(navCtrl, navParams, chatService, events, http, ngZone, modalCtrl, alertCtrl, toastCtrl, loadingCtrl) {
        // this.toUser = {
        //   id: navParams.get('toUserId'),
        //   name: navParams.get('toUserName')
        // };
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatService = chatService;
        this.events = events;
        this.http = http;
        this.ngZone = ngZone;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.hasLoadedMessages = false;
        this.readBy = [];
        // Get mock user information
        this.user = JSON.parse(localStorage.getItem('user'));
        this.conversation = this.navParams.get('conversation');
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc(this.conversation.$id).onSnapshot(function (querySnapshot) {
            _this.conversation = querySnapshot.data();
            if (!_this.conversation) {
                return;
            }
            var hasUserLanguage = false;
            _this.conversation.languages.forEach(function (lan) {
                if (lan == _this.user.language) {
                    hasUserLanguage = true;
                }
            });
            if (!hasUserLanguage) {
                _this.conversation.languages.push(_this.user.language); //&source=${this.conversation.lastMessage.translatedFrom}
                _this.http.get("https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + _this.user.language + "&q=" + _this.conversation.lastMessage.message[_this.conversation.lastMessage.translatedFrom] + "&format=text")
                    .toPromise()
                    .then(function (response) {
                    _this.conversation.lastMessage.message[_this.user.language] = response.data.translations[0].translatedText;
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc(_this.conversation.$id).update(_this.conversation);
                });
            }
            _this.readBy = [];
            var readByKeys = Object.keys(_this.conversation.readBy);
            readByKeys.forEach(function (key) {
                _this.readBy.push(_this.conversation.readBy[key]);
            });
        });
    }
    TempConversationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConversationPage');
        // translate('Ik spreek Engels', {to: 'en'}).then(res => {
        //   console.log(res.text);
        //   //=> I speak English
        //   console.log(res.from.language.iso);
        //   //=> nl
        // }).catch(err => {
        //   console.error(err);
        // });
        this.getMsg();
    };
    TempConversationPage.prototype.ionViewWillLeave = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(this.user.$id).collection('tempConversations').doc(this.conversation.$id).delete();
    };
    TempConversationPage.prototype.ionViewDidEnter = function () {
    };
    TempConversationPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    TempConversationPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.focus();
        }
        else {
            this.setTextareaScroll();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    TempConversationPage.prototype.getMsg = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc(this.conversation.$id).collection('messages').onSnapshot(function (querySnapshot) {
            querySnapshot.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    var tmpMsg_1 = change.doc.data();
                    if (!tmpMsg_1.message[_this.user.language]) {
                        _this.http.get("https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + _this.user.language + "&q=" + tmpMsg_1.message[tmpMsg_1.translatedFrom] + "&format=text")
                            .toPromise()
                            .then(function (response) {
                            tmpMsg_1.message[_this.user.language] = response.data.translations[0].translatedText;
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc(_this.conversation.$id).collection('messages').doc(change.doc.id).update(tmpMsg_1);
                            _this.ngZone.run(function () {
                                _this.msgList.push(tmpMsg_1);
                                setTimeout(function () {
                                    _this.scrollToBottom();
                                }, 200);
                            });
                        }, function (msg) {
                            _this.http.get("https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + _this.user.language + "&q=" + tmpMsg_1.message[tmpMsg_1.translatedFrom] + "&format=text").toPromise().then(function (response) {
                                tmpMsg_1.message[_this.user.language] = response.data.translations[0].translatedText;
                                __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc(_this.conversation.$id).collection('messages').doc(change.doc.id).update(tmpMsg_1);
                                _this.ngZone.run(function () {
                                    _this.msgList.push(tmpMsg_1);
                                    setTimeout(function () {
                                        _this.scrollToBottom();
                                    }, 200);
                                });
                            }, function (msg) { });
                        });
                    }
                    else {
                        _this.ngZone.run(function () {
                            _this.msgList.push(change.doc.data());
                            setTimeout(function () {
                                _this.scrollToBottom();
                            }, 200);
                        });
                    }
                }
            });
            if (!_this.hasLoadedMessages) {
                _this.hasLoadedMessages = true;
            }
            _this.conversation.readBy[_this.user.$id] = _this.user.username;
            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc(_this.conversation.$id).update({ readBy: _this.conversation.readBy });
        });
    };
    TempConversationPage.prototype.sendMsg = function () {
        var _this = this;
        if (!this.editorMsg.trim())
            return;
        this.editorMsg = this.editorMsg.replace('↵', '');
        var conversation = this.navParams.get('conversation');
        var message = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc(conversation.$id).collection('messages').doc();
        var newMessage = {
            $id: message.id,
            sentBy: this.user.$id,
            username: this.user.username,
            firstName: this.user.firstName || '',
            lastName: this.user.lastName || '',
            translatedFrom: this.user.language,
            thumb: this.user.thumb || '',
            time: Date.now(),
            message: {}
        };
        var promises = [];
        this.conversation.languages.forEach(function (language) {
            // newMessage.message[this.user.language]
            // if (language !== this.user.language) {
            var promise = new Promise(function (resolve, reject) {
                var apiURL = "https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&target=" + language + "&q=" + _this.editorMsg + "&format=text";
                _this.http.get(apiURL)
                    .toPromise()
                    .then(function (response) {
                    newMessage.message[language] = response.data.translations[0].translatedText;
                    resolve();
                }, function (msg) {
                    _this.http.get(apiURL).toPromise().then(function (response) {
                        newMessage.message[language] = response.data.translations[0].translatedText;
                        resolve();
                    }, function (msg) { });
                });
            });
            promises.push(promise);
            // }
        });
        var tokens = [];
        this.conversation.users.forEach(function (user) {
            if (user.$id === _this.user.$id)
                return;
            var promise = new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(user.$id).get().then(function (token) {
                    if (token.data().token) {
                        tokens.push({ token: token.data().token, language: user.language, name: (_this.user.firstName + ' (' + _this.user.username + ')') });
                    }
                    resolve();
                }).catch(function () {
                    resolve();
                });
            });
            promises.push(promise);
        });
        newMessage.message[this.user.language] = this.editorMsg;
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.focus();
        }
        var readBy = {};
        if (this.conversation.readBy) {
            var usersRead = Object.keys(this.conversation.readBy);
            usersRead.forEach(function (userId) {
                readBy[userId] = '';
            });
        }
        readBy[this.user.$id] = this.user.username;
        this.conversation.readBy = readBy;
        Promise.all(promises).then(function (values) {
            // newMessage.time = moment.utc().format('YYYY-MM-DD HH:mm:ss')
            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc(conversation.$id).collection('messages').doc(newMessage.$id).set(newMessage);
            __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc(conversation.$id).update({
                lastMessage: newMessage,
                readBy: readBy,
                lastUpdated: Date.now()
            });
            var apiURL = 'https://us-central1-letstalk-205602.cloudfunctions.net/sendMessage';
            _this.http.post(apiURL, {
                // conversation: this.conversation,
                // message: newMessage,
                // readBy: readBy,
                tokens: tokens
            }).toPromise().then(function (response) {
            }).catch(function (error) {
                console.log(error);
            });
        });
        this.scrollToBottom();
        // this.pushNewMsg(newMsg);
        // this.chatService.sendMsg(newMsg)
        //   .then(() => {
        //     let index = this.getMsgIndexById(id);
        //     if (index !== -1) {
        //       this.msgList[index].status = 'success';
        //     }
        //   })
    };
    TempConversationPage.prototype.pushNewMsg = function (msg) {
        // const userId = this.user.id,
        //   toUserId = this.toUser.id;
        // // Verify user relationships
        // if (msg.userId === userId && msg.toUserId === toUserId) {
        //   let translationSub = this.http.post(`https://www.googleapis.com/language/translate/v2?key=AIzaSyDI8IMTkk6Qdp7z7Ez-yvkRQH3V4gE0Xkk&source=en&target=af&q=${msg.message}`, {}).subscribe((response: any) => {
        //     console.log(response)
        //     msg.message = response.data.translations[0].translatedText;
        //     this.msgList.push(msg);
        //     translationSub.unsubscribe();
        //   });
        // } else if (msg.toUserId === userId && msg.userId === toUserId) {
        //   this.msgList.push(msg);
        // }
        // this.scrollToBottom();
    };
    TempConversationPage.prototype.addByUsername = function (fab) {
        var _this = this;
        fab.close();
        var alert = this.alertCtrl.create({
            title: 'Start a conversation',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Enter Username'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (!data.username) {
                            return;
                        }
                        if (data.username == _this.user.username) {
                            var toast = _this.toastCtrl.create({
                                message: 'You cannot invite yourself.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return;
                        }
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').where('username', '==', data.username.toLowerCase()).get().then(function (profiles) {
                            if (!profiles.docs.length) {
                                var toast = _this.toastCtrl.create({
                                    message: 'User not found.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            profiles.forEach(function (profile) {
                                if (!profile.data()) {
                                    var toast = _this.toastCtrl.create({
                                        message: 'User not found.',
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                }
                                else {
                                    _this.addUser(profile.data());
                                }
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    TempConversationPage.prototype.addByContacts = function (fab) {
        var _this = this;
        fab.close();
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modal_contact_modal_contact__["a" /* ModalContactPage */]);
        myModal.onDidDismiss(function (data) {
            if (data) {
                if (data == _this.user.phone) {
                    var toast = _this.toastCtrl.create({
                        message: 'You cannot start a chat with yourself.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    return;
                }
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Searching for user...'
                });
                loading_1.present();
                var results_1 = [];
                var promises = [
                    new Promise(function (resolve, reject) {
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').where('fullPhone', '==', ('+' + data)).get().then(function (profiles) {
                            profiles.forEach(function (profile) {
                                results_1.push(profile);
                            });
                            resolve();
                        });
                    }),
                    new Promise(function (resolve, reject) {
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').where('phone', '==', data).get().then(function (profiles) {
                            profiles.forEach(function (profile) {
                                results_1.push(profile);
                            });
                            resolve();
                        });
                    })
                ];
                Promise.all(promises).then(function (values) {
                    loading_1.dismiss();
                    if (!results_1.length) {
                        var toast = _this.toastCtrl.create({
                            message: 'User not found.',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        return;
                    }
                    results_1.forEach(function (profile) {
                        if (!profile.data()) {
                            var toast = _this.toastCtrl.create({
                                message: 'User not found.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else if (profile.data().username == _this.user.username) {
                            var toast = _this.toastCtrl.create({
                                message: 'You cannot start a chat with yourself.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return;
                        }
                        else {
                            _this.addUser(profile.data());
                        }
                    });
                });
            }
        });
        myModal.present();
    };
    TempConversationPage.prototype.addUser = function (user) {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('users').doc(this.user.$id).collection('tempConversations').doc(this.conversation.$id).set({
            chatId: this.conversation.$id
        });
        this.conversation.users.push({
            $id: user.$id,
            language: user.language,
            username: user.username,
            firstName: user.firstName || '',
            lastName: user.lastName || ''
        });
        var hasLanguage = false;
        this.conversation.languages.forEach(function (language) {
            if (language == user.language) {
                hasLanguage = true;
            }
        });
        if (!hasLanguage) {
            this.conversation.languages.push(user.language);
        }
        __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('tempConversations').doc(this.conversation.$id).update(this.conversation);
    };
    TempConversationPage.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    TempConversationPage.prototype.viewProfile = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */], {
            profile: user
        });
    };
    TempConversationPage.prototype.scrollToBottom = function () {
        if (this.content._scroll)
            this.content.scrollToBottom();
    };
    TempConversationPage.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    TempConversationPage.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    TempConversationPage.prototype.expandMessage = function (msg, i) {
        if (!msg.expanded)
            msg.expanded = false;
        this.msgList[i].expanded = !msg.expanded;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], TempConversationPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TempConversationPage.prototype, "messageInput", void 0);
    TempConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-temp-conversation',template:/*ion-inline-start:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\tempConversation\tempConversation.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span *ngFor="let chatUser of conversation?.users">\n        <span *ngIf="chatUser?.username !== user?.username" (click)="viewProfile(chatUser)">\n          {{chatUser?.username}}\n        </span>\n      </span>\n    </ion-title>\n    <!--<ion-fab style="top: 0px;" top right #fab>-->\n      <!--<button ion-fab mini>-->\n        <!--<ion-icon name="add" role="img" class="icon icon-ios ion-ios-add" aria-label="add"></ion-icon>-->\n      <!--</button>-->\n      <!--<ion-fab-list side="left">-->\n        <!--<button ion-button (click)="addByContacts(fab)">-->\n          <!--Contacts <ion-icon name="contacts" style="padding-left: 5px;"></ion-icon>-->\n        <!--</button>-->\n        <!--<button ion-button (click)="addByUsername(fab)">-->\n          <!--Username <ion-icon name="person-add" style="padding-left: 5px;"></ion-icon>-->\n        <!--</button>-->\n      <!--</ion-fab-list>-->\n    <!--</ion-fab>-->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="message-wrap">\n\n    <div *ngIf="!msgList || !msgList.length">\n      <br>\n      <br>\n      <br>\n      <h4 text-center>No messages yet</h4>\n    </div>\n\n    <div *ngIf="hasLoadedMessages">\n      <div *ngFor="let msg of msgList | sortByTime" class="message" [class.left]=" msg?.sentBy !== user.$id " [class.right]=" msg?.sentBy === user.$id">\n        <img class="user-img" [src]="msg.thumb || \'assets/imgs/nopic-profile.png\'" imageViewer onerror="this.src = \'assets/imgs/nopic-profile.png\'">\n        <div class="msg-detail">\n          <div class="msg-content">\n            <span class="triangle"></span>\n            <p class="line-breaker ">{{msg?.message[user.language]}}</p>\n          </div>\n          <!--<div class="msg-info">-->\n            <!--<p>-->\n              <!--{{msg?.username}}&nbsp;&nbsp;{{msg?.time | relativeTime}}</p>-->\n          <!--</div>-->\n        </div>\n      </div>\n      <h6 style="color: rgba(150, 150, 150, 0.8); font-size: 0.8em;" *ngIf="msgList.length">\n        Read by <span *ngFor="let username of readBy" style="margin-right: 5px;">{{username}}</span>\n      </h6>\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n  <div class="input-wrap">\n    <!--<button ion-button clear icon-only item-right (click)="switchEmojiPicker()">-->\n      <!--<ion-icon name="md-happy"></ion-icon>-->\n    <!--</button>-->\n    <textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()" (focusin)="onFocus()">\n    </textarea>\n    <button ion-button clear icon-only item-right (click)="sendMsg()">\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n    </button>\n  </div>\n  <!--<emoji-picker [(ngModel)]="editorMsg"></emoji-picker>-->\n</ion-footer>\n'/*ion-inline-end:"E:\Freelancer\20190902_ionic\ionic_worldChat\src\pages\tempConversation\tempConversation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], TempConversationPage);
    return TempConversationPage;
}());

//# sourceMappingURL=tempConversation.js.map

/***/ })

},[380]);
//# sourceMappingURL=main.js.map