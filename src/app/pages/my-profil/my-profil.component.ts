import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
})
export class MyProfilComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private userService: UserService,
    private themeService: ThemeService,
    ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  public currentUser: User;
  public defaultAvatar = this.themeService.getDefaultAvatar();
  public fileToUpload: File = null;

  public changeNameStatus(){
    return this.modalService.getChangeNameStatus();
  }

  public openChangeNameModal(){
    return this.modalService.changeNameModalOpen();
  }

  
  public changeAvatarPicture(){
    let input = document.getElementById('input-update-image');
    input.click();
  }

  public handleFileInput(files){
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  private getCurrentUser(){
    this.currentUser = this.userService.getCurrentUser();
  }

}
