import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionLog } from '../classes/connection-log';
import { User } from '../classes/user';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private settings: SettingsService,
    private http: HttpClient,
    private router: Router
  ) { }

  private currentUser: User;
  private _URL = this.settings.getDatabaseUrl() + 'user';
  private isConnected = false;

  getCurrentUserFullName(): string {
    const { firstname, lastname } = this.currentUser;
    return firstname + ' ' + lastname;
  }

  getCurrentUser(): User {
    
    // const devUser: User = {id: 0, firstname: 'Theo', lastname: "PPDA", avatar: "https://www.hayalanka.com/wp-content/uploads/2017/07/avtar-image.jpg"};
    // return devUser;
    
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
    this.switchConnection();
    console.log(this.currentUser);
    return true;
  }

  public getAll(){
    return this.http.get(this._URL);
  }


  public isConnectedStatus(){
    return this.isConnected;
  }

  public switchConnection(){
    this.isConnected = true;
  }

  public disconnect(){
    this.currentUser = undefined;
    this.isConnected = false;
    this.router.navigate(['auth']);
  }

  public getCurrentUserId(){
    return this.getCurrentUser().id;
  }

}
