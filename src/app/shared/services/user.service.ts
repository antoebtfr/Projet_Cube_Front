import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConnectionLog } from '../classes/connection-log';
import { User } from '../classes/user';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private settings: SettingsService,
    private http: HttpClient
  ) { }

  private currentUser: User;
  private _URL = this.settings.getDatabaseUrl() + 'user';

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

  
  public logConnection(log: ConnectionLog){
    console.log('A uncomment - testws20 >>> Uncomment aussi la chaine dexecution jusqua bdd' );
    //return this.http.post(this._URL + '/log', log);
  }

}
