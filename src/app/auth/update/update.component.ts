import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  editForm: FormGroup;
  uid: string = localStorage.getItem('uid');
  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    public crudApi: DataService
  ) {
    this.editForm = this.fb.group({
      uid: [this.uid],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.GetData(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
    })

  }
  get fullName() {
    return this.editForm.get('fullName');
  }

  get email() {
    return this.editForm.get('email');
  }

  get phoneNumber() {
    return this.editForm.get('phoneNumber');
  }

  get state() {
    return this.editForm.get('state');
  }
  get country() {
    return this.editForm.get('country');
  }

  // Below methods fire when somebody click on submit button
  updateForm() {
    this.crudApi.UpdateData(this.editForm.value);       // Update student data using CRUD API
    this.router.navigate(['auth/profile']);               // Navigate to student's list page when student data is updated
  }
}
