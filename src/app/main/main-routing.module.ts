import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './main.route';

@NgModule({
  imports: [RouterModule.forChild(MainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
