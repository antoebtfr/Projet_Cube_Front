import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthError } from '../classes/auth-error';
import { User } from '../classes/user';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private settings: SettingsService
  ) { }

  private _URL = this.settings.getDatabaseUrl() + 'auth/';

  public signup(user: User): Observable<User>{
    return this.http.post<User>(this._URL + 'signup', user);
  }

  public login(user: User): Observable<User | AuthError>{
    return this.http.post<User | AuthError>(this._URL + 'login', user);
  }
}