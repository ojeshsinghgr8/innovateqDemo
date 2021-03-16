import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'um-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
/**
 * Name: User module header
 * Desc: This component shows the header for user module and Total number of users.
 * */
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) {}
  count$: Subject<number> = new Subject<number>();
  ngOnInit(): void {
    this.count$ = this.userService.totalUsers;
  }
}
