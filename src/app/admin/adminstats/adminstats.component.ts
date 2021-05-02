import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminstats',
  templateUrl: './adminstats.component.html',
  styleUrls: ['./adminstats.component.css']
})
export class AdminstatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log($.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
      console.log(JSON.stringify(data, null, 2));
    }))
  }

}
