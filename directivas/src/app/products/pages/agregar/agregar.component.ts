import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  public color: string = 'red'
  public texto1 = 'Jesus Miranda'

  public miform: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor( private fb: FormBuilder) {
    // code
  }

  ngOnInit(): void {
    // code
  }

  tieneError(_campo: string){
    return this.miform.get( _campo )?.invalid || false;
  }

  cambiarNombre(){
    this.texto1 = 'Yisus Miranda';
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, _y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
