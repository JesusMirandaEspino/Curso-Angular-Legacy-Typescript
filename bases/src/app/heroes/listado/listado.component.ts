import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Doctor Strange'];
  heroeBorrado: string[] = [];

  borrarHeroe(i: number){
    this.heroeBorrado.push( this.heroes[i]);
    this.heroes.splice(i, 1);
  }

}
