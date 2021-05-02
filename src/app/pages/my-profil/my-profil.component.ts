import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
})
export class MyProfilComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    ) { }

  ngOnInit(): void {
  }

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

}
