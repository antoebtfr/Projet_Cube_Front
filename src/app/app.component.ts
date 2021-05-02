import { Component, OnInit } from '@angular/core';
import { ConnectionLog } from './shared/classes/connection-log';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-front';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.registerConnectionInBDD()
  }

  private registerConnectionInBDD() {
    $.getJSON('https://api.db-ip.com/v2/free/self', data => {
      if (!data) {
        return false;
      }


      let connectionLog: ConnectionLog = {
        ipAdress: data.ipAddress,
      }

      // this.userService.logConnection(connectionLog).subscribe();
    })
  }
}
