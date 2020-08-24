import { Routes } from '@angular/router';
import { NewAuthGuard } from '../shared/guard/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { ItemsComponent } from './shop-by-category/items/items.component';

export const MainRoutes: Routes = [
  {
    path: 'dashboard',
    // canLoad: [NewAuthGuard],
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
];
