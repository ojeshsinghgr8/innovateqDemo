import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  getUserCount() {
    return this.users.length;
  }
  users = [
    {
      name: 'Lorem Epsum',
      designation: 'consectetur adipiscing',
      photo: 'user-1.jpg',
      joiningDate: '2020-07-12',
    },
    {
      name: 'Lorem Epsum',
      designation: 'consectetur adipiscing',
      photo: 'user-2.jpg',
      joiningDate: '2020-07-12',
    },
    {
      name: 'Lorem Epsum',
      designation: 'consectetur adipiscing',
      photo: 'user-3.jpg',
      joiningDate: '2020-07-12',
    },
    {
      name: 'Lorem Epsum',
      designation: 'consectetur adipiscing',
      photo: 'user-1.jpg',
      joiningDate: '2020-07-12',
    },
    {
      name: 'Lorem Epsum',
      designation: 'consectetur adipiscing',
      photo: 'user-2.jpg',
      joiningDate: '2020-07-12',
    },
    {
      name: 'Lorem Epsum',
      designation: 'consectetur adipiscing',
      photo: 'user-3.jpg',
      joiningDate: '2020-07-12',
    },
    {
      name: 'Lorem Epsum',
      designation: 'consectetur adipiscing',
      photo: 'user-1.jpg',
      joiningDate: '2020-07-12',
    },
    {
      name: 'Lorem Epsum',
      designation: 'consectetur adipiscing',
      photo: 'user-2.jpg',
      joiningDate: '2020-07-12',
    },
    {
      name: 'Lorem Epsum',
      designation: 'consectetur adipiscing',
      photo: 'user-3.jpg',
      joiningDate: '2020-07-12',
    },
  ];
}
