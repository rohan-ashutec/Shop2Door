// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RegisterorloginComponent } from './registerorlogin/registerorlogin.component';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateComponent } from './update/update.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
    IonicModule.forRoot(),
    RouterTestingModule,
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    RegisterComponent,
    RegisterorloginComponent,
    UpdateComponent
  ],
  entryComponents: [
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  exports: [
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    RegisterComponent,
    RegisterorloginComponent,
    UpdateComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule { }
