import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { NewAuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(public afAuth: AngularFireAuth, public router: Router,
    public ngZone: NgZone, public newAuthService: NewAuthService) { }
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('/main/dashboard');
        })
        this.newAuthService.SetUserData(result.user);
        console.log('You have been successfully logged in!', result)
      }).catch((error) => {
        window.alert(error)
      })
  }
}
