import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrdersRoutes } from './orders.route';

@NgModule({
  imports: [RouterModule.forChild(OrdersRoutes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule { }
