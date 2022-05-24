import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent implements OnInit {

get favoritosArray(){
  return this.miFormulario.get('favoritos') as FormArray;
}


miFormulario: FormGroup  = this.fb.group({
  nombre: [ 'Yisus', [Validators.required, Validators.minLength(3)  ] ],
  favoritos: this.fb.array( [
      ['The witcher']
      ], [Validators.required] )
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


  guardar(){

    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }

      this.miFormulario.reset();


  }


}
