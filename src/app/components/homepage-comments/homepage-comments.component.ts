import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/classes/comment';
import { User } from 'src/app/shared/classes/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-homepage-comments',
  templateUrl: './homepage-comments.component.html',
  styleUrls: ['./homepage-comments.component.css']
})
export class HomepageCommentsComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  public commentsArray: Comment[] = [
    {
      text: 'Test de message'
    },
    {
      text: 'Test de message n2'
    },
  ];

  public currentUser: User; 

  ngOnInit(): void {
      this.currentUser = this.userService.getCurrentUser();
  }

}
