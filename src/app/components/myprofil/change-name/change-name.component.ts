import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  changeNameForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lasrname: ['', [Validators.required]],
  });

  changeNameSubmit(){
    let newNameForm = this.changeNameForm;

    console.log(newNameForm.value);
    newNameForm.reset;

  }
}
