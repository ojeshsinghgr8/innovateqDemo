import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models';
import { UserService } from '../../service/user.service';
/**
 * Name: User List view
 * Desc: This component is list view for user.
 */
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
  searchTerm = '';
  filteredData: User[] = [];
  displayedColumns: string[] = ['photo', 'name', 'designation', 'joiningDate'];
  /**
   * Load user data from user service on onInit event
   */
  ngOnInit(): void {
    this.userService.getUsers().subscribe((val) => {
      this.users = val;
      this.userService.totalUsers.next(val.length);
      this.filteredUsers();
    });
  }
  /**
   * Trigger the filteredUsers method on number of entries dropdown change
   */
  onChange(val: number) {
    this.filteredUsers();
  }
  /**
   * filteredUsers user based on the entries selected and searchTerm
   */
  filteredUsers() {
    let data: User[] = this.users.filter((item: User) => {
      const val = JSON.stringify(item).toLocaleLowerCase();
      return val.includes(this.searchTerm.toLocaleLowerCase());
    });
    console.log(data);
    this.filteredData =
      this.searchTerm == ''
        ? this.users.slice(0, this.selectedEntries)
        : data.slice(0, this.selectedEntries);
  }
  /**
   * Trigger the filteredUsers method on searchTerm change
   */
  search() {
    this.filteredUsers();
  }
}
