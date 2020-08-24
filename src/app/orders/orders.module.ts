// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MycardsComponent } from './mycards/mycards.component';
import { MyordersComponent } from './myorders/myorders.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    OrdersRoutingModule,
  ],
  declarations: [
    MyaddressComponent,
    MycardsComponent,
    MyordersComponent
  ],
  entryComponents: [
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  exports: [
    MyaddressComponent,
    MycardsComponent,
    MyordersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
