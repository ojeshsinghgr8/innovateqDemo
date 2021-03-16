import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((val) => {
      this.users = val;
      this.userService.totalUsers.next(val.length);
    });
  }
}
