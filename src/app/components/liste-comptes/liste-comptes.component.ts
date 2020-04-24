import { Component, OnInit } from '@angular/core';
import {AddCompteService} from '../../services/add-compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-comptes',
  templateUrl: './liste-comptes.component.html',
  styleUrls: ['./liste-comptes.component.scss']
})
export class ListeComptesComponent implements OnInit {
  constructor(private listCompte: AddCompteService, private router: Router) { }
  comptes;

  ngOnInit() {
    this.getComptes();
  }
  getComptes() {
    this.listCompte.getComptes().subscribe(
      data => {
        this.comptes = data['hydra:member'];
      }
    );
  }
}
