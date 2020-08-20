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
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
