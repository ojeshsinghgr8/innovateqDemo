import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models';
/**
 * Name: User Managemnt service
 * Desc: Service serves user data from external API
 * **/
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {
    this.totalUsers.next(0);
  }

  totalUsers: Subject<number> = new Subject<number>();
  getUsers(): Observable<User[]> {
    let url =
      'http://my-json-server.typicode.com/ojeshsinghgr8/innovateqDemo/users';
    const headers = new HttpHeaders({
      accept: 'text/plain',
    });
    return this.httpClient.get<any>(url, { headers: headers });
  }
}
