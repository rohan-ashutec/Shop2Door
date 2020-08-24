import { Routes } from '@angular/router';
import { NewAuthGuard } from '../shared/guard/auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { NeedHelpComponent } from './need-help/need-help.component';
import { RateUsComponent } from './rate-us/rate-us.component';
import { OfferComponent } from './offer/offer.component';

export const SharedRoutes: Routes = [
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

];
