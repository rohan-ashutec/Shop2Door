import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Data } from './data.model';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  datasRef: AngularFireList<any>;
  dataRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {
    this.datasRef =this.db.list('datas-list')
   }

  AddData(data: Data) {
    this.datasRef.push({
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      state: data.state,
      country: data.country
    })
  }

  GetData(id: string) {
    this.dataRef = this.db.object('datas-list/' + id);
    return this.dataRef;
  }

  // Fetch Students List
  GetDatasList() {
    this.datasRef = this.db.list('datas-list');
    return this.datasRef;
  }

  // Update Student Object
  UpdateData(data: Data) {
    this.dataRef.update({
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      state: data.state,
      country: data.country
    })
  }

  // Delete Student Object
  DeleteStudent(id: string) {
    this.dataRef = this.db.object('datas-list/' + id);
    this.dataRef.remove();
  }
}
