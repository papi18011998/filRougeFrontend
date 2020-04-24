import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Depot} from '../model/depot';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private httpClient: HttpClient) { }
  faireDepot(depot: Depot) {
    return this.httpClient.post<Depot>(`${environment.apiUrl}/api/depots`, depot);
  }
  getCorrespondingAccount(id) {
    return this.httpClient.get(`${environment.apiUrl}/api/comptes/${id}`);
  }
}
