import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MobgoogleService {

  constructor(
    public afAuth: AngularFireAuth,
    public googleplus: GooglePlus,
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { }
  submit() {

    let params;
    params = {
      'webClientId': '801464825576-8b0tkdk2lpst0vpngjdlvh0l555k87vq.apps.googleusercontent.com',
      'offline': true
    }

    this.googleplus.login(params)
      .then((response) => {
        const { idToken, accessToken } = response
        this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
        console.log(error)
      });
  }
  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider.credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider.credential(accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((response) => {
        this.router.navigate(["/main/dashboard"]);
      })


  }
}
