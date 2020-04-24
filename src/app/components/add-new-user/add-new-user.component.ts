import { AddUserService } from './../../services/add-user.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
  constructor(private auth: AuthentificationService, private addUser: AddUserService) { }
  // initialisation de l'objet Formulaire
  addUserForm: FormGroup;
  hide = true;
  roles;

  ngOnInit() {
    this.getRoles();
    this.addUserForm = new FormGroup({
      prenom : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.email, Validators.required]),
      password : new FormControl('', [Validators.minLength(6)]),
      nom : new FormControl('', [Validators.required]),
      role : new FormControl('', [Validators.required]),
      tel : new FormControl('', [Validators.pattern('^(77|78|76|70)[0-9]{7}$'), Validators.required])
    });
  }
  getRoles() {
    this.auth.getRoles().subscribe(
      data => {this.roles = data;
        // tslint:disable-next-line:prefer-for-of
               for (let i = 0; i < this.roles.length; i++) {
          this.roles[i].id = '/api/roles/' + this.roles[i].id;

        }
               console.log(this.roles);
          }
    );
  }
  addNewUser() {
    const newUser = {
      prenom: this.addUserForm.value.prenom,
      nom: this.addUserForm.value.nom,
      email: this.addUserForm.value.email,
      password : this.addUserForm.value.password,
      role : this.addUserForm.value.role,
      isActive: true,
      tel: this.addUserForm.value.tel
    };
    this.addUser.addUser(newUser).subscribe(
      data => {
        console.log(data);
      }
    );
    console.log(newUser);
  }
}
