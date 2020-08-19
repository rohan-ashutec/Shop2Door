import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from '../app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertControl: AlertController,
    private auth: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.auth.authenticationState.subscribe(state => {
      if (state) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/registerorlogin']);
      }
    });
  }
  logout() {
    this.auth.logout();
  }
  async presentAlert() {
    const alert = await this.alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Rate Us',
      message: 'How was your experiance of shopping with us?',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: '5 star'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
