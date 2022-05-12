import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miForm',  { static: true}) miformulario!: NgForm;

  constructor() {
    //  code
  }

  ngOnInit(): void {
    // code
  }

validNameProduct():boolean{
  return  this.miformulario.controls['nombreProducto']?.invalid &&  this.miformulario.controls['nombreProducto']?.touched;
}

validPriceProduct():boolean{
  return  this.miformulario.controls['precioProducto']?.invalid &&  this.miformulario.controls['precioProducto']?.touched;
}

validExistenciaProduct():boolean{
  return  this.miformulario.controls['existenciaProducto']?.invalid &&  this.miformulario.controls['existenciaProducto']?.touched;
}



// guardar(miform:NgForm){
  guardar(){
  console.log( this.miformulario );
}


}
