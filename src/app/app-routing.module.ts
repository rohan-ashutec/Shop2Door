import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { NeedHelpComponent } from './shared/need-help/need-help.component';
import { RateUsComponent } from './shared/rate-us/rate-us.component';
import { OfferComponent } from './shared/offer/offer.component';
import { ShopByCategoryComponent } from './main/shop-by-category/shop-by-category.component';
import { ItemsComponent } from './main/shop-by-category/items/items.component';
import { MyordersComponent } from './orders/myorders/myorders.component';
import { RegisterorloginComponent } from './auth/registerorlogin/registerorlogin.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/registerorlogin', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'needHelp', component: NeedHelpComponent },
  { path: 'rateUs', component: RateUsComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'category', component: ShopByCategoryComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'myorders', component: MyordersComponent },
  { path: 'registerorlogin', component: RegisterorloginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
