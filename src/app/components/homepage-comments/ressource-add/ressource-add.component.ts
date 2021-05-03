import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Ressource } from 'src/app/shared/classes/ressource';
import { RessourceService } from 'src/app/shared/services/ressource.service';

@Component({
  selector: 'app-ressource-add',
  templateUrl: './ressource-add.component.html',
  styleUrls: ['./ressource-add.component.css']
})
export class RessourceAddComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private ressourceService: RessourceService
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

    this.ressourceService.save(ressource).subscribe();
    ressourceForm.reset();
  }

  public switchSelectedType(typeId: number){
    this.selectedType = typeId;
  }

}
