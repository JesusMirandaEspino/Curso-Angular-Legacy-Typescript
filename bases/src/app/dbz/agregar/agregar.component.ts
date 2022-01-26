import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

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

    this.onNuevoPersonaje.emit(  this.nuevo );

    this.nuevo = {
    nombre: '',
    poder: 0
  }

  }




}
