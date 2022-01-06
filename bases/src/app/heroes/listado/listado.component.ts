import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Doctor Strange'];


  borrarHeroe(i: number){
    this.heroes.splice(i, 1);
  }

}
