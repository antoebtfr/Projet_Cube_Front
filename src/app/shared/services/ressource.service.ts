import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ressource } from '../classes/ressource';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  constructor(
    private settings: SettingsService,
    private http: HttpClient
  ) { }

  private _URL = this.settings.getDatabaseUrl() + 'ressource';

  public getAll(){
    return this.http.get(this._URL);
  }

  public getRessourceByUserId(userId: number){
    return this.http.get(this._URL + '/' + userId);
  };

  public save(ressource: Ressource){
    console.log(ressource);
    return this.http.post(this._URL, ressource);
  }
}

