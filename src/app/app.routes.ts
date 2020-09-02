import { Routes } from '@angular/router';
import { RegisterorloginComponent } from './auth/registerorlogin/registerorlogin.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NewAuthGuard } from './shared/guard/auth.guard';
import { ProfileComponent } from './auth/profile/profile.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ShopByCategoryComponent } from './main/shop-by-category/shop-by-category.component';
import { ItemsComponent } from './main/shop-by-category/items/items.component';
import { MyordersComponent } from './orders/myorders/myorders.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { NeedHelpComponent } from './shared/need-help/need-help.component';
import { RateUsComponent } from './shared/rate-us/rate-us.component';
import { OfferComponent } from './shared/offer/offer.component';
import { UpdateComponent } from './auth/update/update.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/registerorlogin',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'registerorlogin',
        component: RegisterorloginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'profile',
        canLoad: [NewAuthGuard],
        component: ProfileComponent
      },
      {
        path: 'update/:id',
        canLoad: [NewAuthGuard],
        component: UpdateComponent
      },
    ]
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
  },
  {
    path: 'main',
    children: [
      {
        path: 'dashboard',
        canLoad: [NewAuthGuard],
        component: DashboardComponent
      },
      {
        path: 'category',
        canLoad: [NewAuthGuard],
        component: ShopByCategoryComponent
      }, {
        path: 'items',
        canLoad: [NewAuthGuard],
        component: ItemsComponent
      },
    ]
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule)
  },
  {
    path: 'orders',
    children: [
      {
        path: 'myorders',
        canLoad: [NewAuthGuard],
        component: MyordersComponent
      },
    ]
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then((m) => m.SharedModule)
  },
  {
    path: 'shared',
    children: [
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

    ]
  },
];
