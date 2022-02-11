import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  @ViewChild( 'txtBuscar' ) txtBuscar!: ElementRef<HTMLInputElement> ;

  constructor( private gifService: GifsService ) {
    //code
  }

  ngOnInit(): void {
    // code
  }

buscar(){

  const valor = this.txtBuscar.nativeElement.value;

  if( valor.trim().length === 0 ){
    return;
  }

  console.log('hola mundo');

  this.gifService.buscarGifs( valor );

  this.txtBuscar.nativeElement.value = '';

}


}
