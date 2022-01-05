import {  Component } from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

  nombre: string = 'Iron man';
  edad:   number = 33;

  get nombreCapitalizado(){
    return this.nombre.toLocaleUpperCase();
  }


  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }

}
