import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private lastname: string;
  private firstname: string;
  private avatar = 'https://www.ideation.fr/wp-content/uploads/2018/03/avatar-matthieu-le-go.png';

  constructor() { }

  getUserFullname(id: number) {
    return this.firstname + ' ' + this.lastname;
  }

  getUser() {

    return {
      lastname: this.lastname,
      firstname: this.firstname,
      avatar: this.avatar,
    }
  }
}
