import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { NewAuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  constructor(public afAuth: AngularFireAuth, public router: Router,
    public ngZone: NgZone, public newAuthService: NewAuthService) { }
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('/dashboard');
        });
        console.log('You have been successfully logged in!', result)
        this.newAuthService.SetUserData(result.user);
      }).catch((error) => {
        console.log(error)
      })
  }
}
