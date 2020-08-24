import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedRoutes } from './shared.route';

@NgModule({
  imports: [RouterModule.forChild(SharedRoutes)],
  exports: [RouterModule],
})
export class SharedRoutingModule { }
