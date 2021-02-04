import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-comments',
  templateUrl: './homepage-comments.component.html',
  styleUrls: ['./homepage-comments.component.css']
})
export class HomepageCommentsComponent implements OnInit {

  constructor() { }

  public commentsArray = [1,2,3];

  ngOnInit(): void {
  }

}
