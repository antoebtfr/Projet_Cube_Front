import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/class/user';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() goToSignUpEvent = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  public submitted = false;

  public logInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  }   
  );

  ngOnInit(): void {
  }

  public onSubmit(): boolean {
    this.submitted = true;

    if (!this.logInForm.valid) {
      return false;
    }
    
    const user: User = this.logInForm.value;

    this.authService.login(user).subscribe( data => {
      console.log(data);
    });
    //this.logInForm.reset();

    return true;
  }

  public goToSignUp(): void {
    this.goToSignUpEvent.emit('signup');
  }
}
