import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../shared/User';
import { UserService } from '../shared/user.service';
import { IonReorderGroup } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  UsersArray = [];

  constructor(
    private apiService: UserService
  ) { }

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.apiService.getUserList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.UsersArray = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.UsersArray.push(a as User);
      })
    })
  }

  fetchBookings() {
    this.apiService.getUserList().valueChanges().subscribe(res => {
      console.log('Fetched users list!')
    })
  }


  @ViewChild(IonReorderGroup, { static: true }) reorderGroup: IonReorderGroup;
  reorderList(ev: any) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
}