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
  nombreProducto: ['RTX 2060', [Validators.required, Validators.minLength(3)  ] ],
  precioProducto: [7500, [ Validators.required, Validators.min(0) ]],
  existenciaProducto: [30, [ Validators.required, Validators.min(0) ]]
  });


  constructor( private fb: FormBuilder) {
    // code
  }

  ngOnInit(): void {
    // code
  }

  nombreValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

}
