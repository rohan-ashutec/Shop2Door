import { Component, OnInit } from '@angular/core';
import { NewAuthService } from '../../shared/services/auth.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  datasRef: AngularFireList<any>;
  obj: any = {
    id: String,
    uid: String,
    fullName: "",
    email: "",
    phoneNumber: "",
    state: "",
    country: ""
  };
  constructor(
    public newAuthService: NewAuthService,
    private db: AngularFireDatabase
  ) {
    this.datasRef = this.db.list('datas-list');
    this.obj;
  }
  ionViewWillEnter() {
    var query = this.db.database.ref("datas-list").orderByKey();
    query.once("value")
      .then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          
          const uid = localStorage.getItem('uid');
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          console.log(uid, key, childData)
          if (childData.uid = uid) {
            console.log(childData.fullName)
            this.obj.fullname = childData.fullName;
            this.obj.country = childData.country;
            this.obj.state = childData.state;
            this.obj.email = childData.email;
            this.obj.phoneNumber = childData.phoneNumber;
          }
        });
      });

  }
  ngOnInit() { }

}
