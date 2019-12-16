import { Injectable } from '@angular/core';
import { User } from './User';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userList: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createUser(user: User) {
    return this.userList.push({
      name: user.name,
      email: user.email,
      mobile: user.mobile
    })
  }

  // Get single object
  getUser(id: string) {
    this.userRef = this.db.object('/user/' + id);
    return this.userRef;
  }

  // Get List
  getUserList() {
    this.userList = this.db.list('/user');
    return this.userList;
  }

  // Update
  updateUser(id, user: User) {
    return this.userRef.update({
      name: user.name,
      email: user.email,
      mobile: user.mobile
    })
  }

  // Delete
  deleteUser(id: string) {
    this.userRef = this.db.object('/user/' + id);
    this.userRef.remove();
  }
}