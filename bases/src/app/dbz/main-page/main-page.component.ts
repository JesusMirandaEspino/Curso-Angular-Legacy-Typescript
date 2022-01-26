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
  ];

  nuevo = {
    nombre: 'Maestro Roshi',
    poder: 5000
  }



  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }



  agregarNuevoPersonaje( argumento: Personaje ){

    this.personajes.push(argumento);

  }



}
