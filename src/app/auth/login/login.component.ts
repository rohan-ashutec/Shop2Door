import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookService } from '../../shared/services/facebook.service';
import { GoogleService } from '../../shared/services/google.service';
import { TwitterService } from '../../shared/services/twitter.service';
import { NewAuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private newAuthService: NewAuthService,
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit() { }
  login() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.newAuthService.SignIn(this.form.controls.email.value, this.form.controls.password.value)
    // this.auth.signIn(this.form.controls.email.value, this.form.controls.password.value).subscribe(response => {
    //   console.log(response)
    //   this.router.navigateByUrl('/dashboard');
    // });
  }
}
