import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comment } from 'src/app/shared/classes/comment';
import { Ressource } from 'src/app/shared/classes/ressource';
import { User } from 'src/app/shared/classes/user';
import { RessourceService } from 'src/app/shared/services/ressource.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-homepage-comments',
  templateUrl: './homepage-comments.component.html',
  styleUrls: ['./homepage-comments.component.css']
})
export class HomepageCommentsComponent implements OnInit {

  constructor(
    private userService: UserService,
    private RessourceService: RessourceService,
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

  public ressourcesArray: Ressource[]; 

  public currentUser: User; 

  ngOnInit(): void {
      this.currentUser = this.userService.getCurrentUser();
      console.log(this.currentUser);
      this.getRessources();
      this.loadYoutubeIFrames();
  }

  sendMessage(){
    let messageTxt = this.messageBox.nativeElement.value;
    this.messageBox.nativeElement.value = '';
  }

  openRessouceModal(){
    this.ressourceModalStatus = true;
  }

  private getRessources(){
    this.RessourceService.getAll().subscribe( (data: Ressource[]) => {
      console.log(data);
      this.ressourcesArray = data; 
    })
  }

  private loadYoutubeIFrames(){
    
    let player;


    console.log('testws20');
  }



}
