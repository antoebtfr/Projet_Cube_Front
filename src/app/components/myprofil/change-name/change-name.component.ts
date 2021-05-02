import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  public changeNameForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lasrname: ['', [Validators.required]],
  });

  public changeNameSubmit(){
    let newNameForm = this.changeNameForm;

    console.log(newNameForm.value);
    newNameForm.reset;
    this.modalService.changeNameModalClose();
  }
}
