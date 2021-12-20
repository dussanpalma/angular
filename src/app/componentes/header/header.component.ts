import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionServicio } from 'src/app/services/configuracion.service';
import { LoginService } from 'src/app/services/login.service';

type NewType = string;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean;
  loggedInUser!: any;
  mostarRegistro!: boolean;
  permitirRegistro!: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private configuracionServicio: ConfiguracionServicio
  ) {}

  ngOnInit(): void {
    this.loginService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.configuracionServicio.getConfiguracion().subscribe( configuracion => {
      this.permitirRegistro = configuracion.permitirRegistro;
    })
  }

  

  logout() {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
