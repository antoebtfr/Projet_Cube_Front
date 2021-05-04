import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  public userList: User[];

  private getUserList(){
    this.userService.getAll().subscribe( (data: User[]) => {
      console.log(data);
      this.userList = data;
    })
  }


}
