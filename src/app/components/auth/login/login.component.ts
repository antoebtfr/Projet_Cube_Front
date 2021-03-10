import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Output() goToSignUpEvent = new EventEmitter();

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

  public goToSignUp(){
      this.goToSignUpEvent.emit('signup');
  }
}
