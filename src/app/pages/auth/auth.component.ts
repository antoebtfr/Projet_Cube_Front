import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public modal = 'signup';
  constructor() { }

  ngOnInit(): void {
  }

  public switchTo(event){
    this.modal = event;
  }

}
