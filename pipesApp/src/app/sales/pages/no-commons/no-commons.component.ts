import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.scss']
})
export class NoCommonsComponent implements OnInit {

  texto: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  clientes: string[] = ['Maria', 'Pedro', 'Juan'];

  clientesMapa = {
    '=0' : 'No tenemos Clientes Esperando',
    '=1' : 'Tenemos un cliente esperando',
    '=2' : 'Tenemos 2 clientes esperando',
    'other' : 'Tenemos # clientes esperando'

  }



  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
