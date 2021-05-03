import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConnectionLog } from '../classes/connection-log';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionLogService {

  constructor(
    private http: HttpClient,
    private settings: SettingsService,
  ) { }

  private _URL = this.settings.getDatabaseUrl() + 'connection-log'

  public logConnection(log: ConnectionLog){
    return this.http.post(this._URL, log);
  }

  public getAllConnectionLogs(){
      return this.http.get(this._URL);
  }
}
