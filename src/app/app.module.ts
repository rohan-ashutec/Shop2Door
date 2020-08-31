import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { NewAuthGuard } from './shared/guard/auth.guard';
import { NewAuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FacebookService } from './shared/services/facebook.service';
import { GoogleService } from './shared/services/google.service';
import { TwitterService } from './shared/services/twitter.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { MobauthService } from './services/mobile/mobauth.service';
import { MobgoogleService } from './services/mobile/mobgoogle.service';
import { MobguardGuard } from './services/guards/mobguard.guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Facebook } from '@ionic-native/facebook/ngx';
import { MobfacebookService } from './services/mobile/mobfacebook.service';
import { DataService } from './shared/services/data.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    RoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FacebookService,
    GoogleService,
    TwitterService,
    NewAuthService,
    NewAuthGuard,
    GooglePlus,
    MobauthService,
    MobgoogleService,
    MobguardGuard,
    Facebook,
    MobfacebookService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
