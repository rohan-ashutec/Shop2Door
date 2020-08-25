import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class RoutingModule { }
