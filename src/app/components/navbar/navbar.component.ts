import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }


  ngOnInit(): void {
  }

  public isConnectedStatus(){
    return this.userService.isConnectedStatus();
  }

  public disconnectUser(){
    this.userService.disconnect();
  }





}
