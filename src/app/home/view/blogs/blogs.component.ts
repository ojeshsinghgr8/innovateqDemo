import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'home-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  blogs: Blog[] = [];
  ngOnInit(): void {
    this.homeService.getBlogs().subscribe((val) => {
      this.blogs = val;
    });
  }
}
