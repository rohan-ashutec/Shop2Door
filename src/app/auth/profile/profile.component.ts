import { Component, OnInit } from '@angular/core';
import { NewAuthService } from '../../shared/services/auth.service';
import { DataService } from '../../shared/services/data.service';
import { Data } from '../../shared/services/data.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  Data: Data[];
  uid = localStorage.getItem('uid'); key: string;
  constructor(
    public newAuthService: NewAuthService,
    public dataService: DataService
  ) {
  }
  ionViewWillEnter() {
    let s = this.dataService.GetDatasList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Data = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.key = item.key;
        this.Data.push(a as Data);
      })
    })
  }
  ngOnInit() { }

}
