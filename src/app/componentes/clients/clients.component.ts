import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteServicio } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})

export class ClientsComponent implements OnInit {
  clientes!: Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };

  @ViewChild("clienteForm")
  clienteForm!: NgForm;

  @ViewChild("botonCerrar")
  botonCerrar!: ElementRef;

  constructor(
    private clienteServicio: ClienteServicio,
    private flashMessages: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.clienteServicio.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  getSaldoTotal() {
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach((cliente) => {
        saldoTotal += Number(cliente.saldo);
      });
    }
    return saldoTotal;
  }

  agregar(ngFormVariable: NgForm){
    if(!ngFormVariable.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',timeout: 4000
      });
    }
    else{
      //Agregar el nuevo cliente
      this.clienteServicio.agregarCliente(this.cliente)
      this.clienteForm.resetForm();
      this.cerrarModal();

    }
  }
  

  private cerrarModal(){

    this.botonCerrar.nativeElement.click();
  }


}
