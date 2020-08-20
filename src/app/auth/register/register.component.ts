import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookService } from '../../shared/services/facebook.service';
import { GoogleService } from '../../shared/services/google.service';
import { TwitterService } from '../../shared/services/twitter.service';
import { NewAuthService } from '../../shared/services/auth.service';

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
  constructor(private formBuilder: FormBuilder, private newAuthService: NewAuthService, private router: Router,
    public fb: FacebookService,
    public google: GoogleService,
    public twitter: TwitterService) {
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
    // this.auth.signUp(this.form.controls.email.value, this.form.controls.password.value).subscribe(response => {
    //   this.router.navigateByUrl('/dashboard');
    //   console.log(response)
    // }),
    //   (error) => {
    //     console.log(error)
    //     this.error.message = error.error.error.message;

    //     if (this.error.message === "EMAIL_EXISTS") {
    //       this.message = "This email address already exists!";
    //     }

    //   },
    //   () => {
    //     console.log('The POST observable is now completed.');
    //   }
  }
}
