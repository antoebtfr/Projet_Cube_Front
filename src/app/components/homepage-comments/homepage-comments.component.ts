import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    @ViewChild('messageBox') messageBox: ElementRef;
  
  public ressourceModalStatus = false;
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
      console.log(this.currentUser);
  }

  sendMessage(){
    let messageTxt = this.messageBox.nativeElement.value;
    this.messageBox.nativeElement.value = '';
  }

  openRessouceModal(){
    this.ressourceModalStatus = true;
  }

}
