import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
      <h1>{{ title }}</h1>

      <button (click)=" acumular(+1) " > + 1 </button>

      <p>Contador: {{  numero }}</p>

      <button (click)=" acumular(-1) " > - 1 </button>
  `
})
export class ContadorComponent{
  title = 'Contador App';

  // variable del contador
  numero: number = 10;

  acumular(valor: number){
    this.numero += valor;
  }

}
