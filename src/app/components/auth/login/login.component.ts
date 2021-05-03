import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthError } from 'src/app/shared/classes/auth-error';
import { User } from 'src/app/shared/classes/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

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
    private userService: UserService,
    private router: Router
  ) { }

  public submitted = false;
  public afterSubmittedMessage: string ; 

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
  
      if ('error' in data) {
        this.afterSubmittedMessage = data.error;
        return false;
      }

      this.userService.setCurrentUser(data);
      this.logInForm.reset();
      this.submitted = false;
      this.router.navigate(['']);
      return true; 

    });

    return true;
  }

  public goToSignUp(): void {
    this.goToSignUpEvent.emit('signup');
  }
}
