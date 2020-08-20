import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {

  }
  onSubmit() {
    this.auth.signUp(this.form.controls.email.value, this.form.controls.password.value).subscribe(response => {
      this.router.navigateByUrl('/dashboard');
      console.log(response)
    }),
      (error) => {
        console.log(error)
        this.error.message = error.error.error.message;

        if (this.error.message === "EMAIL_EXISTS") {
          this.message = "This email address already exists!";
        }

      },
      () => {
        console.log('The POST observable is now completed.');
      }
  }
}
