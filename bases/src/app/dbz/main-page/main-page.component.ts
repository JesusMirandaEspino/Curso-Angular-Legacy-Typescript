import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Personaje{
  nombre: string;
  poder:  number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  constructor() { }

  ngOnInit(): void {
  }


  agregar(){

  }



}
