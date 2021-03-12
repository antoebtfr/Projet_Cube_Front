import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { checkPasswords } from 'src/app/shared/validators/checkpassword.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public submitted = false;
  @Output() public goToLogInEvent = new EventEmitter();


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  public signUpForm = this.fb.group({
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, { validators: checkPasswords });

  ngOnInit(): void {
  }

  public onSubmit(): boolean {
    this.submitted = true;

    if (!this.signUpForm.valid) {
      return false;
    }
    const user = this.signUpForm.value;
    this.authService.signup(user).subscribe();
    this.signUpForm.reset();
    this.submitted = false;
    this.router.navigateByUrl(this.router.url + '/validation');

    return true;
  }

  public goToLogIn(): void {
    this.goToLogInEvent.emit('login');
  }
}
