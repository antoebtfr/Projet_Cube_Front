import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Ressource } from 'src/app/shared/classes/ressource';
import { ModalService } from 'src/app/shared/services/modal.service';
import { RessourceService } from 'src/app/shared/services/ressource.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-ressource-add',
  templateUrl: './ressource-add.component.html',
  styleUrls: ['./ressource-add.component.css']
})
export class RessourceAddComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private ressourceService: RessourceService,
    private userService: UserService,
    private modalService: ModalService
  ) { }

  public submitted = false;
  public ressourceForm = this.fb.group({
    title: ['', [Validators.required]],
    cont: ['', [Validators.required]],
    img: ['', [Validators.required]]
  });

  public ressourceTypes = [
    { name : 'Photo', id : 1}, 
    { name : 'Audio', id : 2}, 
    { name : 'Jeu', id : 3}, 
  ];

  public selectedType;

  ngOnInit(): void {
  }

  public onSubmit(){
    let ressourceForm = this.ressourceForm;
    let ressource: Ressource = ressourceForm.value;


    ressource.typeId = this.selectedType;
    ressource.userId = this.userService.getCurrentUserId();

    this.ressourceService.save(ressource).subscribe();
    ressourceForm.reset();
    this.closeRessourceModal()
  }

  public switchSelectedType(typeId: number){
    this.selectedType = typeId;
  }

  private closeRessourceModal(){
    this.modalService.ressourceModalToFalse();
  }
}
