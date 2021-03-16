import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private userService: UserService) {}
  selectedEntries: any = 7;
  entries: any[] = [{ value: 5 }, { value: 7 }, { value: 10 }];
  users: User[] = [];
  displayedColumns: string[] = ['photo', 'name', 'designation', 'joiningDate'];
  ngOnInit(): void {
    this.userService.getUsers().subscribe((val) => {
      this.users = val;
      this.userService.totalUsers.next(val.length);
    });
  }
}
