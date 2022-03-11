import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nombre: string = 'Jesus';

  title = 'pipesApp';


  showName(){
    console.log( this.nombre );
  }

}
