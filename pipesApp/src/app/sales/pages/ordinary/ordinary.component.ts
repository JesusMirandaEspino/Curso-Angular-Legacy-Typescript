import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordinary',
  templateUrl: './ordinary.component.html',
  styleUrls: ['./ordinary.component.scss']
})
export class OrdinaryComponent implements OnInit {

  cambiarLetras: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'GranMago',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'SuperGuerrero',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'SuperArquero',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Brujo',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Hechicero',
      vuela: true,
      color: Color.rojo
    },
  ];

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }


  cambiarlasLetras(){
    this.cambiarLetras = !this.cambiarLetras;
  }

ordernarPorArreglo(valor: string){
  this.ordenarPor = valor;
}




}
