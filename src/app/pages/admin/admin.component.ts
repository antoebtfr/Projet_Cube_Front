import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public submitted = false;

  public adminForm = this.fb.group({
    email: ['', [Validators.required]],
    password : ['', [Validators.required]],
  });

  public onSubmit(){
    
  }
}
