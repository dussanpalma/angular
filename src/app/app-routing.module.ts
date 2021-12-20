import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './componentes/board/board.component';
import { ConfigurationComponent } from './componentes/configuration/configuration.component';
import { EditClientsComponent } from './componentes/edit-clients/edit-clients.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { RegistrationComponent } from './componentes/registration/registration.component';
import { AuthGuard } from './guardianes/auth.guardad';

const routes: Routes = [
  {path: '', component: BoardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registry', component: RegistrationComponent},
  {path: 'configuration', component: ConfigurationComponent, canActivate: [AuthGuard]},
  {path: 'client/edit/:id', component: EditClientsComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
