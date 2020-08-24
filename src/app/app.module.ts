import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SidemenuComponent } from './main/sidemenu/sidemenu.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { NeedHelpComponent } from './shared/need-help/need-help.component';
import { CommonModule } from '@angular/common';
import { RateUsComponent } from './shared/rate-us/rate-us.component';
import { OfferComponent } from './shared/offer/offer.component';
import { ShopByCategoryComponent } from './main/shop-by-category/shop-by-category.component';
import { ItemsComponent } from './main/shop-by-category/items/items.component';
import { MyordersComponent } from './orders/myorders/myorders.component';
import { ItemsDetailsComponent } from './main/shop-by-category/items-details/items-details.component';
import { MyaddressComponent } from './orders/myaddress/myaddress.component';
import { MycardsComponent } from './orders/mycards/mycards.component';
import { ShareComponent } from './shared/share/share.component';
import { ModalsComponent } from './shared/modals/modals.component';
import { RegisterorloginComponent } from './auth/registerorlogin/registerorlogin.component';
import { RegisterComponent } from './auth/register/register.component';
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
import { ProfileComponent } from './auth/profile/profile.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { MobauthService } from './services/mobile/mobauth.service';
import { MobgoogleService } from './services/mobile/mobgoogle.service';
import { MobguardGuard } from './services/guards/mobguard.guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    SidemenuComponent,
    AboutUsComponent,
    NeedHelpComponent,
    RateUsComponent,
    OfferComponent,
    ShopByCategoryComponent,
    ItemsComponent,
    MyordersComponent,
    ItemsDetailsComponent,
    MyaddressComponent,
    MycardsComponent,
    ShareComponent,
    ModalsComponent,
    RegisterorloginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  entryComponents: [ModalsComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
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
    MobguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
