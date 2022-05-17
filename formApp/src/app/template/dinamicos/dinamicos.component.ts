import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona  {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miForm',  { static: true}) miformulario!: NgForm;

  public persona: Persona = {
    nombre: 'Jesus',
    favoritos: [ {id: 1, nombre: 'The whitcher' }, {id: 2, nombre: 'Doom' }]
  }


  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

  guardar(){

  }





}
