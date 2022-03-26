import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.scss']
})
export class NoCommonsComponent implements OnInit {

  texto: string = 'Miriam';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Ramiro'];

  clientesMapa = {
    '=0' : 'No tenemos Clientes Esperando',
    '=1' : 'Tenemos un cliente esperando',
    '=2' : 'Tenemos 2 clientes esperando',
    'other' : 'Tenemos # clientes esperando'
  }

  persona = {
    nombre: 'Jesus',
    edad: 33,
    direccion: 'Tonala, Jalisco'
  }

  heroe = [
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Iron man',
      vuela: true
    },
    {
      nombre: 'Doctor Strange',
      vuela: true
    }
  ];

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }


  cambiarNombre(){

    if(this.genero == 'masculino' ){
      this.texto = 'Miriam';
      this.genero = 'femenino';
    }else{
      this.texto = 'Jesus';
      this.genero = 'masculino';
    }
  }

  borrarCliente(){

    if( this.clientes.length < 1  ){
      this.clientes = ['Maria', 'Pedro', 'Juan', 'Ramiro'];
    }else{
      this.clientes.pop();
    }
  }



}
