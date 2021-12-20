import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css'],
})
export class EditClientsComponent implements OnInit {
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };

  id!: string;

  constructor(
    private clientesServicio: ClienteServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.getCliente(this.id).subscribe( cliente => {
      this.cliente = cliente;
    });
  }


  guardar({value,valid}:NgForm){
    if(!valid){
      this.flashMessages.show('Por favor llena el formulario correctamente',{
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      value.id = this.id;
      //modicar el cliente
      this.clientesServicio.modificarCliente(value);  
      this.router.navigate(['/']);
    }
  }

  eliminar(){
    if(confirm('¿Seguro que desea elminiar el cliente?')){
      this.clientesServicio.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }

}
