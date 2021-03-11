import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private settings: SettingsService,
  ) { }

  private currentUser: User;
  private _URL = this.settings.getDatabaseUrl();

  getCurrentUserFullName(): string {
    const { firstname, lastname } = this.currentUser;
    return firstname + ' ' + lastname;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
    console.log(this.currentUser);
    return true;
  }

}
