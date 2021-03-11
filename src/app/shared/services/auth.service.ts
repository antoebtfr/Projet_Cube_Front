import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  private _URL = 'http://165.22.202.73:3000/';

  public signup(user: User): Observable<User>{
    return this.http.post<User>(this._URL + 'signup', user);
  }

  public login(user: User): Observable<User>{
    return this.http.post<User>(this._URL + 'login', user);
  }
}