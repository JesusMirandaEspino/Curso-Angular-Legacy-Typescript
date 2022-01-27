import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService{

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




  constructor(){
    console.log('Servicio');
  }

}
