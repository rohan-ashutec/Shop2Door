import { Component, OnInit } from '@angular/core';
import { NewAuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(public newAuthService: NewAuthService) { }

  ngOnInit() { }

}
