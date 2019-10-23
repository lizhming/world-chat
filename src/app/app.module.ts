import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChatsPage } from '../pages/chats/chats';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ModalContactPage } from '../pages/modal-contact/modal-contact';

import { SplashScreen } from '@ionic-native/splash-screen';
import { Contacts } from '@ionic-native/contacts';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { ConversationPage } from "../pages/conversation/conversation";
import { EmojiProvider } from '../providers/emoji';
import { HttpClientModule } from "@angular/common/http";
import { EmojiPickerComponent } from '../components/emoji-picker/emoji-picker';
import { ChatService } from '../providers/chat-service';
import { RelativeTime } from '../pipes/relative-time';
import { CompleteProfilePage } from "../pages/complete-profile/complete-profile";
import { SortByTime } from "../pipes/sort-by-time";
import { SortByLastMessage } from "../pipes/sort-by-last-message";
import { ProfileModalPage } from "../pages/profile-modal/profile-modal";
import { PremiumModalPage } from "../pages/premium-modal/premium-modal";

import { AdMobFree } from '@ionic-native/admob-free';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
// import { Firebase } from '@ionic-native/firebase';

import { Camera } from '@ionic-native/camera';
import { DayOrTime } from "../pipes/day-or-time";
import { StartGroupChatPage } from "../pages/start-group-chat/start-group-chat";
// import { SMS } from '@ionic-native/sms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRCodeModule } from 'angular2-qrcode';
import { TempConversationPage } from "../pages/tempConversation/tempConversation";
import { TwilioConversationPage } from "../pages/twilioConversation/twilioConversation";
import { TempChatPage } from "../pages/temp-chat/temp-chat";
import { RegionsPage } from "../pages/regions/regions";
import { AddRegionPostPage } from "../pages/add-region-post/add-region-post";

import { Device } from '@ionic-native/device';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { LinkyModule } from 'angular-linky';
import { Clipboard } from "@ionic-native/clipboard";
import { FCM } from '@ionic-native/fcm';

@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    TempChatPage,
    StartGroupChatPage,
    ProfilePage,
    HomePage,
    ConversationPage,
    TempConversationPage,
    TwilioConversationPage,
    RegionsPage,
    TabsPage,
    LoginPage,
    CompleteProfilePage,
    RelativeTime,
    DayOrTime,
    SortByTime,
    SortByLastMessage,
    EmojiPickerComponent,
    ModalContactPage,
    ProfileModalPage,
    PremiumModalPage,
    AddRegionPostPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InternationalPhoneModule,
    QRCodeModule,
    IonicImageViewerModule,
    LazyLoadImagesModule,
    LinkyModule,
    // IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      preloadModules: true,
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    TempChatPage,
    StartGroupChatPage,
    ProfilePage,
    HomePage,
    ConversationPage,
    TempConversationPage,
    TwilioConversationPage,
    RegionsPage,
    TabsPage,
    LoginPage,
    CompleteProfilePage,
    ModalContactPage,
    ProfileModalPage,
    PremiumModalPage,
    AddRegionPostPage
  ],
  providers: [
    SplashScreen,
    EmojiProvider,
    Clipboard,
    ChatService,
    Contacts,
    AdMobFree,
    AdMobPro,
    // Firebase,
    FCM,
    Camera,
    // SMS,
    BarcodeScanner,
    Device,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
