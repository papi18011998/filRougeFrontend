import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss']
})
export class FormAuthComponent implements OnInit {
  public badCredentials:string
  formConnexion:FormGroup
  showProgress=false
  constructor(private authentification:AuthentificationService, private router:Router) { }
  ngOnInit() {
    this.formConnexion=new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }
 verify(){
  let user={
    username: this.formConnexion.value.username,
    password: this.formConnexion.value.password
  }
  this.showProgress= true
  setTimeout(()=>{
    this.showProgress=false
  },2000);
  this.authentification.getToken(user).subscribe(
    data=>{
      console.log(data);
      this.router.navigate(['/dashboard'])
    },
    erreur=>{
      console.log(erreur);
       this.badCredentials = erreur.error.message

    }
  )
 }
}
