import { AddUserService } from './../../services/add-user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.scss']
})
export class ListeUsersComponent implements OnInit {

  constructor(private list: AddUserService) { }
  users;
   ngOnInit() {
     this.getUsers();
  }
  getUsers() {
    this.list.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);

      }
    );
  }

}
