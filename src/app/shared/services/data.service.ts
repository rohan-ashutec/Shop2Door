import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  datasRef: AngularFireList<any>;
  dataRef: AngularFireObject<any>;
  uid: string = localStorage.getItem('uid');
  constructor(private db: AngularFireDatabase,
    public storage: Storage) {
    this.datasRef = this.db.list('datas-list')
    this.dataRef = this.db.object('datas-list')
    // this.uid = this.storage.get('uid');
  }
  AddData(data: Data) {
    this.datasRef.push({
      uid: data.uid,
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
      uid: data.uid,
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
