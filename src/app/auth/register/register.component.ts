import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookService } from '../../shared/services/facebook.service';
import { GoogleService } from '../../shared/services/google.service';
import { TwitterService } from '../../shared/services/twitter.service';
import { NewAuthService } from '../../shared/services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { MobgoogleService } from 'src/app/services/mobile/mobgoogle.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error = { message: null, statusCode: null };
  message: string;
  errorValidationMessages = [
    {
      serverError: 'email in_use',
      userError: 'This email address has already been registered.',
    },
    {
      serverError: 'email invalid',
      userError: 'The e-mail address you have specified is an invalid format.',
    },
  ];
  constructor(private formBuilder: FormBuilder, private newAuthService: NewAuthService,
    public fb: FacebookService,
    public google: GoogleService,
    public twitter: TwitterService,
    public platform: Platform,
    public afAuth: AngularFireAuth,
    public googleplus: GooglePlus,
    public mobgoogleservice: MobgoogleService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.form.controls.email.value, this.form.controls.password.value);
    this.newAuthService.SignUp(this.form.controls.email.value, this.form.controls.password.value);
  }
}
