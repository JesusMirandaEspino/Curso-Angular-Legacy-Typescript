import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }


  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }





  agregar(){
    if( this.nuevo.nombre.trim().length === 1 ){
      return;
    }

    this.personajes.push( this.nuevo );
    this.nuevo = {
    nombre: '',
    poder: 0
  }

  }




}
