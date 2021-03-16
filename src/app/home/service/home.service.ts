import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog, SummaryList } from '../models';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}
  getSummary(): Observable<SummaryList> {
    let url =
      'http://my-json-server.typicode.com/ojeshsinghgr8/innovateqDemo/cardData';
    const headers = new HttpHeaders({
      accept: 'text/plain',
    });
    return this.httpClient.get<any>(url, { headers: headers });
  }

  getBlogs(): Observable<Blog[]> {
    let url =
      'http://my-json-server.typicode.com/ojeshsinghgr8/innovateqDemo/blogs';
    const headers = new HttpHeaders({
      accept: 'text/plain',
    });
    return this.httpClient.get<any>(url, { headers: headers });
  }
}
