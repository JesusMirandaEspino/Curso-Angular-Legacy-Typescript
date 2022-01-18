import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 25000
    },
    {
      nombre: 'Vegeta',
      poder: 20000
    }
  ]

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  constructor() { }

  ngOnInit(): void {
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
