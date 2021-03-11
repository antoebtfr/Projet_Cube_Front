import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { SignupComponent } from 'src/app/components/auth/signup/signup.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AccountCreatedComponent } from '../account-created/account-created.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AccountCreatedComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [
    AuthService
  ]
})
export class AuthModule { }
