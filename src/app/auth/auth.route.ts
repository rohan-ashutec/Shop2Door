import { RegisterComponent } from './register/register.component';
import { RegisterorloginComponent } from './registerorlogin/registerorlogin.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { NewAuthGuard } from '../shared/guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'registerorlogin',
    component: RegisterorloginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    canLoad: [NewAuthGuard],
    component: ProfileComponent
  },
];
