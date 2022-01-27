import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  nuevo = {
    nombre: 'Maestro Roshi',
    poder: 5000
  }



  constructor( ) {

  }

  ngOnInit(): void {
    // code
  }



  agregarNuevoPersonaje( argumento: Personaje ){

   //  this.personajes.push(argumento);

  }



}
