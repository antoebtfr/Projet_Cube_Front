import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ressource-add',
  templateUrl: './ressource-add.component.html',
  styleUrls: ['./ressource-add.component.css']
})
export class RessourceAddComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  public submitted = false;
  public ressourceForm = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
    file: ['']
  });

  ngOnInit(): void {
  }

  public onSubmit(){
    let ressourceForm = this.ressourceForm;
    let ressourceVal = ressourceForm.value;


    console.log(ressourceVal);
    ressourceForm.reset();
  }

}
