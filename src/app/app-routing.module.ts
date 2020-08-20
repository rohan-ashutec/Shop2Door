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
import { NewAuthGuard } from './shared/guard/auth.guard';
import { ProfileComponent } from './auth/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/registerorlogin',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canLoad: [NewAuthGuard],
    component: DashboardComponent
  },
  {
    path: 'aboutUs',
    canLoad: [NewAuthGuard],
    component: AboutUsComponent
  },
  {
    path: 'needHelp',
    canLoad: [NewAuthGuard],
    component: NeedHelpComponent
  },
  {
    path: 'rateUs',
    canLoad: [NewAuthGuard],
    component: RateUsComponent
  },
  {
    path: 'offer',
    canLoad: [NewAuthGuard],
    component: OfferComponent
  },
  {
    path: 'category',
    canLoad: [NewAuthGuard],
    component: ShopByCategoryComponent
  },
  {
    path: 'items',
    canLoad: [NewAuthGuard],
    component: ItemsComponent
  },
  {
    path: 'myorders',
    canLoad: [NewAuthGuard],
    component: MyordersComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'registerorlogin',
    component: RegisterorloginComponent
  },
  {
    path: 'profile',
    canLoad: [NewAuthGuard],
    component: ProfileComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
