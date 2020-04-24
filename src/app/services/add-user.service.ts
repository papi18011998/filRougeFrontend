import { environment } from './../../environments/environment';
import { NewUser } from './../model/new-user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  constructor(private httpClient: HttpClient) {}
  // Ajout de l'utilisateur
  addUser(newUser: NewUser) {
      return this.httpClient.post<NewUser>(`${environment.apiUrl}/api/users`, newUser);
  }
  // Listes des utilisateurs
  getUsers() {
     return this.httpClient.get<NewUser>(`${environment.apiUrl}/api/users`);
  }
}
