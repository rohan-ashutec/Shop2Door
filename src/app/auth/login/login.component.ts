import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  constructor(private formBuilder: FormBuilder, private auth: AuthServiceService) {
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
    this.auth.login();
  }
}
