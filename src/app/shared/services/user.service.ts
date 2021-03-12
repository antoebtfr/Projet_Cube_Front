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
    
    const devUser: User = {firstname: 'Theo', lastname: "PPDA", avatar: "https://www.hayalanka.com/wp-content/uploads/2017/07/avtar-image.jpg"};
    return devUser;
    
    // return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
    console.log(this.currentUser);
    return true;
  }

}
