import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from '../config/firebase.config';
import { AngularFireAuth } from 'angularfire2/auth';
import { StorageService } from '..//service/storage.service'

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NoticiaService } from '../service/post.service';
import { HttpClientModule} from "@angular/common/http";


@NgModule({

  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), AngularFireModule.initializeApp(firebaseConfig), HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, AngularFireAuth, StorageService, NoticiaService
  ]
})
export class AppModule {}
