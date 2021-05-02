import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  private serverUrl = 'http://64.225.97.45';

  getDatabaseUrl(): string{
    const PORT = 3000;
    return this.serverUrl + ':' + PORT + '/';
  }
  
}
