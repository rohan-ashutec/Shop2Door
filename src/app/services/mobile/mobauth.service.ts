import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MobauthService {
  user: any = {}
  constructor(private router: Router,
    private fireAuth: AngularFireAuth) { }
  setData() {
    this.fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.user = {
          uid: user.uid,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
          isAnonymous: user.isAnonymous,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
          refreshToken: user.refreshToken
        }
      }
      else {
        this.router.navigate(["/main/dashboard"]);
      }
    });
  }

  logout() {
    this.fireAuth.signOut().then(() => {
      this.router.navigate(["/auth/login"]);
    })
  }
}
