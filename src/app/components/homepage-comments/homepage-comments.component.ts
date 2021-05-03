import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comment } from 'src/app/shared/classes/comment';
import { Ressource } from 'src/app/shared/classes/ressource';
import { User } from 'src/app/shared/classes/user';
import { ModalService } from 'src/app/shared/services/modal.service';
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
    private modalService: ModalService,
  ) { }
    @ViewChild('messageBox') messageBox: ElementRef;
  
  public ressourcesArray: Ressource[]; 

  public currentUser: User; 

  ngOnInit(): void {
      this.currentUser = this.userService.getCurrentUser();
      console.log(this.currentUser);
      this.getRessources();
  }

  sendMessage(){
    let messageTxt = this.messageBox.nativeElement.value;
    this.messageBox.nativeElement.value = '';
  }

  toggleRessourceModal(){
    this.modalService.toggleRessourceModalStatus();
  }

  public modalServiceStatus(){
    return this.modalService.getRessourceModalStatus();
  }

  private getRessources(){
    this.RessourceService.getAll().subscribe( (data: Ressource[]) => {
      this.ressourcesArray = data.reverse();
    })
  }


}
