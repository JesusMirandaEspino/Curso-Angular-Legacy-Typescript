import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  initForm = {
    nombreProducto: 'GTX 1660 Super',
    precioProducto: 0,
    existenciaProducto: 0
  }

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
  return  (this.miformulario.controls['precioProducto']?.invalid &&  this.miformulario.controls['precioProducto']?.touched) && this.miformulario.controls['precioProducto']?.value < 0;
}

validExistenciaProduct():boolean{
  return  (this.miformulario.controls['existenciaProducto']?.invalid &&  this.miformulario.controls['existenciaProducto']?.touched) &&  this.miformulario.controls['existenciaProducto']?.value < 0;
}



// guardar(miform:NgForm){
  guardar(){
  console.log( 'Se guardo Correctamente', this.miformulario );
  this.miformulario.resetForm({
    precioProducto:     0,
    existenciaProducto: 0
  });
}


}
