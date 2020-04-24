import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatIconModule, MatProgressBarModule, MatSidenavModule, MatSelectModule, MatTableModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormAuthComponent } from './components/form-auth/form-auth.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { ListeUsersComponent } from './components/liste-users/liste-users.component';
import { CompteComponent } from './components/compte/compte.component';
import { ListeComptesComponent } from './components/liste-comptes/liste-comptes.component';
import { DepotComponent } from './components/depot/depot.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAuthComponent,
    ConnexionComponent,
    DashboardComponent,
    AddNewUserComponent,
    ListeUsersComponent,
    CompteComponent,
    ListeComptesComponent,
    DepotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
