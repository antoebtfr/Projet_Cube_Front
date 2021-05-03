import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
