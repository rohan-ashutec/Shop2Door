import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { User } from './auth.model';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
export interface responseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<String>(null);
  public id: string;
  public email: string;
  private _token: string;
  private tokenExpirationDate: Date;
  user: User;
  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {
  }

  token() {
    if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
      return null;
    }
    else {
      return this._token;
    }
  }


  get isAuthenticated() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return !!this.token;
      } else {
        return false;
      }
    })
    );
  }
  get userId() {
    return this.id;
  }

  signUp(email: string, password: string) {
    return this.http.post<responseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe((tap(responseData => {
      const expire = new Date(new Date().getTime() + (+responseData.expiresIn * 1000));
      // this._user.next(
      //   new User(responseData.localId, responseData.email, responseData.idToken, expire)
      // );
      this.storeAuthData(responseData.localId, responseData.idToken, expire.toISOString());
    })))
  }
  signIn(email: string, password: string) {
    return this.http.post<responseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe((tap(responseData => {
      const expire = new Date(new Date().getTime() + (+responseData.expiresIn * 1000));
      // this._user.next(
      //    new User(responseData.localId, responseData.email, responseData.idToken, expire)
      // );
      this.storeAuthData(responseData.localId, responseData.idToken, expire.toISOString());
    })));
  }
  logout() {
    this._user.next(null);
    Plugins.Storage.remove({ key: 'authData' });
    this.router.navigateByUrl('/login');
  }
  private storeAuthData(
    userId: string,
    token: string,
    tokenExpirationDate: string
  ) {
    const data = JSON.stringify({
      userId: userId,
      token: token,
      tokenExpirationDate: tokenExpirationDate
    });
    Plugins.Storage.set({ key: 'authData', value: data })
  }
}
