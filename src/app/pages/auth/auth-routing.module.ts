import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountCreatedComponent } from '../account-created/account-created.component';

import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'validation', component: AccountCreatedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
