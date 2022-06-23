import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

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

}
