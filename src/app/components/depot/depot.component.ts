import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DepotService} from '../../services/depot.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
  id;
  idCompte;
  addDepotForm: FormGroup;
  message;
  correspondingAccount;
  constructor(private route: ActivatedRoute, private depotService: DepotService) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idCompte = '/api/comptes/' + this.id;
    this.addDepotForm = new FormGroup({
      montant: new FormControl('', Validators.required)
    });
    this.message = 'depot';
    this.findOneById();
  }
  addDepot() {
    const depot = {
      compte: this.idCompte,
      montant: this.addDepotForm.value.montant
    };
    this.depotService.faireDepot(depot).subscribe(
      data => {
        this.message = data;
        this.message = this.message.message;
        this.findOneById();
      },
      error => {
        this.message = error;
        this.message = error.error.message;
      }
    );
  }
  findOneById() {
    this.depotService.getCorrespondingAccount(this.id).subscribe(
      data => {
        this.correspondingAccount = data;
      },
      error => {
        this.correspondingAccount = 'Veuillez selectionner un compte existant';
      }
    );
  }
}
