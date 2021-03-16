import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor() {}
  blogs = [
    {
      title: 'Lorem ipsum dolor sit amet',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      venenatis, ligula in feugiat rutrum, lacus tellus tincidunt tortor`,
      image: 'oilfield-1.jpg',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      venenatis, ligula in feugiat rutrum, lacus tellus tincidunt tortor`,
      image: 'oilfield-2.jpeg',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      venenatis, ligula in feugiat rutrum, lacus tellus tincidunt tortor`,
      image: 'oilfield-3.jpg',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      venenatis, ligula in feugiat rutrum, lacus tellus tincidunt tortor`,
      image: 'oilfield-1.jpg',
    },
  ];
  ngOnInit(): void {}
}
