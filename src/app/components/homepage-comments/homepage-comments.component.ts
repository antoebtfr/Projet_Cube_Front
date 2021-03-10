import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/class/comment';
import { User } from 'src/app/shared/class/user';
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

  public connectedUser: User; 

  ngOnInit(): void {
      this.connectedUser = this.userService.getUser();
  }

}
