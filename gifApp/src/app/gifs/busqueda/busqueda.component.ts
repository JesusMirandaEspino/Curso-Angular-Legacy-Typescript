import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  @ViewChild( 'txtBuscar' ) txtBuscar!: ElementRef<HTMLInputElement> ;

  constructor() {
    //code
  }

  ngOnInit(): void {
    // code
  }

buscar(){

  const valor = this.txtBuscar.nativeElement.value;

  this.txtBuscar.nativeElement.value = '';

}


}
