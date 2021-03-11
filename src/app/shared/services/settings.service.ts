import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  private serverUrl = 'http://165.22.202.73';

  getDatabaseUrl(): string{
    const PORT = 3000;
    return this.serverUrl + ':' + PORT + '/';
  }
  
}
