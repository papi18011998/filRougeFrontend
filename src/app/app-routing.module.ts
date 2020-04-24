import { ListeUsersComponent } from './components/liste-users/liste-users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import {CompteComponent} from './components/compte/compte.component';
import {ListeComptesComponent} from './components/liste-comptes/liste-comptes.component';
import { DepotComponent } from './components/depot/depot.component';


const routes: Routes = [
  {path: 'login', component: ConnexionComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addNewUser', component: AddNewUserComponent},
  {path: 'listUsers', component: ListeUsersComponent},
  {path: 'comptes', component: CompteComponent},
  {path: 'listComptes', component: ListeComptesComponent },
  {path: 'depot/:id', component: DepotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
