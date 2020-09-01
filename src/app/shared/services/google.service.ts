import { FormGroup } from '@angular/forms';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { NewAuthService } from './auth.service';
import { DataService } from './data.service';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class GoogleService {
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
  ) {
  }
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('/main/dashboard');
        })
        this.obj.uid = result.user.uid;
        // this.storag.set('uid', this.obj.uid);
        localStorage.setItem('uid', this.obj.uid);
        this.obj.fullName = result.user.displayName;
        this.obj.email = result.user.email;
        this.obj.phoneNumber = result.user.phoneNumber;
        this.dataService.AddData(this.obj);
        this.newAuthService.SetUserData(result.user);
        console.log('You have been successfully logged in!', result)
      }).catch((error) => {
        window.alert(error)
      })
  }
}
