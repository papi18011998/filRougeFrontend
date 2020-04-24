import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Compte} from '../model/compte';
import {environment} from '../../environments/environment';
import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {ListingCompte} from '../model/listing-compte';
import {FindByNinea} from '../model/find-by-ninea';

@Injectable({
  providedIn: 'root'
})
export class AddCompteService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:max-line-length
  addCompte(compte: Compte) {
    // Ajout de compte
    return this.httpClient.post<Compte>(`${environment.apiUrl}/api/compte`, compte);
  }


  getComptes() {
    return this.httpClient.get<ListingCompte>(`${environment.apiUrl}/api/comptes`);
  }
  getNinea(ninea: FindByNinea) {
    return this.httpClient.post<FindByNinea>(`${environment.apiUrl}/api/ninea`, ninea);
  }
}
