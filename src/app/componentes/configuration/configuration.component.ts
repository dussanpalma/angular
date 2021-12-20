import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/modelo/configuracion.model';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  permitirRegistro: boolean | undefined;
  configuracionServicio: any;

  constructor(
    private router: Router,
) { }


ngOnInit() {
  this.configuracionServicio.getConfiguracion().subscribe(
    (configuracion: Configuracion) => {
      this.permitirRegistro = configuracion.permitirRegistro;
    }
  )
}

guardar(){
  let configuracion = {permitirRegistro: this.permitirRegistro};
  this.configuracionServicio.modificarConfiguracion(configuracion);
  this.router.navigate(['/']);
}

}
