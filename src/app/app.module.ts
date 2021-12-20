import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, Settings} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BoardComponent } from './componentes/board/board.component';
import { ClientsComponent } from './componentes/clients/clients.component';
import { EditClientsComponent } from './componentes/edit-clients/edit-clients.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrationComponent } from './componentes/registration/registration.component';
import { ConfigurationComponent } from './componentes/configuration/configuration.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ClienteServicio } from './services/clientes.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guardianes/auth.guardad';
import { ConfiguracionServicio } from './services/configuracion.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ClientsComponent,
    EditClientsComponent,
    LoginComponent,
    RegistrationComponent,
    ConfigurationComponent,
    NotFoundComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firesbase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ClienteServicio, LoginService, AuthGuard, ConfiguracionServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
