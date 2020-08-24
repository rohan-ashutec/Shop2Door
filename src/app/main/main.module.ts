// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ItemsComponent } from './shop-by-category/items/items.component';
import { ItemsDetailsComponent } from './shop-by-category/items-details/items-details.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MainRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    ShopByCategoryComponent,
    SidemenuComponent,
    ItemsComponent,
    ItemsDetailsComponent
  ],
  entryComponents: [
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [
    DashboardComponent,
    ShopByCategoryComponent,
    SidemenuComponent,
    ItemsComponent,
    ItemsDetailsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
