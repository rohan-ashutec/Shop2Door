// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { AboutUsComponent } from './about-us/about-us.component';
import { ModalsComponent } from './modals/modals.component';
import { NeedHelpComponent } from './need-help/need-help.component';
import { OfferComponent } from './offer/offer.component';
import { RateUsComponent } from './rate-us/rate-us.component';
import { ShareComponent } from './share/share.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedRoutingModule,
  ],
  declarations: [
    AboutUsComponent,
    ModalsComponent,
    NeedHelpComponent,
    OfferComponent,
    RateUsComponent,
    ShareComponent
  ],
  entryComponents: [ModalsComponent
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  exports: [
    AboutUsComponent,
    ModalsComponent,
    NeedHelpComponent,
    OfferComponent,
    RateUsComponent,
    ShareComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
