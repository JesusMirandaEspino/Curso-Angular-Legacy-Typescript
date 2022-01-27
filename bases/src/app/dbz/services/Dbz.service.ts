import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 25000
    },
    {
      nombre: 'Vegeta',
      poder: 20000
    }
  ];


  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor(){
    console.log('Servicio');
  }

}
