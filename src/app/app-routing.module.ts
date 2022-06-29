import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMacsaliteComponent } from './create-macsalite/create-macsalite.component';
import { LogInComponent } from './log-in/log-in.component';
import { MacsaliteDetailsComponent } from './macsalite-details/macsalite-details.component';
import { MacsaliteListComponent } from './macsalite-list/macsalite-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateMacsaliteComponent } from './update-macsalite/update-macsalite.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'macsalites', component: MacsaliteListComponent},
  {path: 'login', component: LogInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'add', component: CreateMacsaliteComponent},
  {path: 'update/:id', component: UpdateMacsaliteComponent},
  {path: 'details/:id', component: MacsaliteDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
