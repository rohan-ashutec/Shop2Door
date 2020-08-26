import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MobfacebookService {

  constructor(private fb: Facebook, public router: Router) { }
  facebookLogin(): Promise<any> {
    return this.fb.login(['email'])
      .then(response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
          .then(success => {
            console.log("Firebase success: " + JSON.stringify(success));
            this.router.navigateByUrl('/main/dashboard');
          });

      }).catch((error) => { console.log(error) });
  }
}
