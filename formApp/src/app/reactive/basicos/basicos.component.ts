import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  /*miFormulario: FormGroup = new FormGroup({
    'nombreProducto':     new FormControl('RTX 2060'),
    'precioProducto':     new FormControl(7500),
    'existenciaProducto': new FormControl(30)
  });*/

miFormulario: FormGroup  = this.fb.group({
  nombreProducto: [ , [Validators.required, Validators.minLength(3)  ] ],
  precioProducto: [ , [ Validators.required, Validators.min(0) ]],
  existenciaProducto: [ , [ Validators.required, Validators.min(0) ]]
  });


  constructor( private fb: FormBuilder) {
    // code
  }

  ngOnInit(): void {

    this.miFormulario.setValue({
      nombreProducto: 'RTX 2060',
      precioProducto: 7500,
      existenciaProducto: 30
    });
  }

  nombreValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
      this.miFormulario.reset();
  }

}
