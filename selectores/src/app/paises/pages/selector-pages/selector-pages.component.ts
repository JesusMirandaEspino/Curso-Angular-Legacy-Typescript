import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styleUrls: ['./selector-pages.component.scss']
})
export class SelectorPagesComponent implements OnInit {


  public regiones: string[] = [];

  miform: FormGroup = this.fb.group({
    region: [ '', Validators.required ]
  });

  constructor( public fb: FormBuilder, private paisesServices: PaisesService ) {
    // code
  }

  ngOnInit(): void {
    this.regiones = this.paisesServices.regiones;
  }

  guardar(){
    // code
  }

}
