import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import {NewUser} from '../../model/new-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  connectedUser: NewUser;
  constructor(private authentification: AuthentificationService) { }
  showFiller = false;
  roles;

  ngOnInit() {
    this.getUser();
  }
  getUser() {
   this.authentification.getConnectedUser().subscribe(
     data => {
       this.connectedUser = data;
       console.log(this.connectedUser);
     }
   );
  }

}
