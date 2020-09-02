import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { NewAuthService } from './auth.service';
import { Storage } from '@ionic/storage';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  obj = ({
    id: String(),
    uid: String(),
    fullName: String(),
    email: String(),
    phoneNumber: String(),
    state: String(),
    country: String()
  });
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public newAuthService: NewAuthService,
    public dataService: DataService,
    public storag: Storage
  ) { }
  TwitterAuth() {
    return this.AuthLogin(new auth.TwitterAuthProvider());
  }
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('/main/dashboard');
        });
        // this.storag.set('uid', this.obj.uid);
        this.obj.uid = result.user.uid;
        localStorage.setItem('uid', this.obj.uid);
        this.obj.fullName = result.user.displayName || "";
        this.obj.email = result.user.email || "";
        this.obj.phoneNumber = result.user.phoneNumber || "";
        this.obj.state = "";
        this.obj.country = "";
        this.dataService.AddData(this.obj);
        console.log('You have been successfully logged in!', result)
        this.newAuthService.SetUserData(result.user);
      }).catch((error) => {
        console.log(error)
      })
  }
  NoTwitterAuth() {
    return this.NoAuthLogin(new auth.TwitterAuthProvider());
  }
  NoAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('/main/dashboard');
        });
        localStorage.setItem('uid', result.user.uid);
        console.log('You have been successfully logged in!', result)
        this.newAuthService.SetUserData(result.user);
      }).catch((error) => {
        console.log(error)
      })
  }
}
