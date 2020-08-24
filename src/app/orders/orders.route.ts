import { Routes } from '@angular/router';
import { NewAuthGuard } from '../shared/guard/auth.guard';
import { MyordersComponent } from './myorders/myorders.component';

export const OrdersRoutes: Routes = [
  {
    path: 'myorders',
    canLoad: [NewAuthGuard],
    component: MyordersComponent
  },
];
