import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  public submitted = false; 

  public logInForm = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  }
  );

  ngOnInit(): void {
  }

  public onSubmit(){
    this.submitted = true;
    console.log(this.logInForm);
    
  }
}
