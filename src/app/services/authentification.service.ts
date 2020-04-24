import { environment } from './../../environments/environment';
import { User } from './../model/user';
import { Role } from './../model/role';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {NewUser} from '../model/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>;
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
  getToken(user: User) {
    return this.httpClient.post<User>(`${environment.apiUrl}/login_check`, user).
    pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
  }));
  }
  getRoles() {
    return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);
  }
  getConnectedUser() {
    return this.httpClient.get<NewUser>(`${environment.apiUrl}/api/user`);
  }
}
