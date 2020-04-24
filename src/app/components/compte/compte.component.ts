import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddCompteService} from '../../services/add-compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  addCompteForm: FormGroup;
  ninea;
  prenom;
  nom;
  tel;
  email;
  rc;
  successOrErrorAccount;
  correspondingPartner;
  constructor(private addCompte: AddCompteService) {
  }

  ngOnInit() {
    this.addCompteForm = new FormGroup({
      prenom : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.email, Validators.required]),
      nom : new FormControl('', [Validators.required]),
      ninea : new FormControl('', [Validators.required]),
      rc : new FormControl('', [Validators.required]),
      solde : new FormControl('', [Validators.required]),
      tel : new FormControl('', [Validators.pattern('^(77|78|76|70)[0-9]{7}$'), Validators.required])
    });
  }
  addNewCompte() {
    const newAccount = {
      user: {
        prenom: this.addCompteForm.value.prenom,
        nom: this.addCompteForm.value.nom,
        email: this.addCompteForm.value.email,
        isActive: true,
        tel: this.addCompteForm.value.tel
      },
      partenaire: {
        ninea: this.addCompteForm.value.ninea,
        rc: this.addCompteForm.value.rc
        },
      solde: this.addCompteForm.value.solde
    };
    this.addCompte.addCompte(newAccount).subscribe(
      data => {
        // this.successOrErrorAccount = data;
        // this.successOrErrorAccount = this.successOrErrorAccount.message
          console.log(data)
      },
      error =>{
        this.successOrErrorAccount = error
        this.successOrErrorAccount = error.error.message

      }
    );
    console.log(newAccount);
  }
  getNineaUser() {
      const test = { ninea: this.ninea };
      this.addCompte.getNinea(test).subscribe(
          data => {
            this.correspondingPartner = data;
            this.prenom = this.correspondingPartner[0].prenom;
            this.nom = this.correspondingPartner[0].nom;
            this.email = this.correspondingPartner[0].email;
            this.tel = this.correspondingPartner[0].tel;
            this.rc = this.correspondingPartner[0].rc;
            console.log(this.correspondingPartner);
          }
        );
  }
}
