import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisSmall } from '../../interfaces/regions';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styleUrls: ['./selector-pages.component.scss']
})
export class SelectorPagesComponent implements OnInit {


  public regiones: string[] = [];
  public paises: PaisSmall[] = [];

  miform: FormGroup = this.fb.group({
    region: [ '', Validators.required ],
    pais: [ '', Validators.required ]
  });

  constructor( public fb: FormBuilder, private paisesServices: PaisesService ) {
    // code
  }

  ngOnInit(): void {
    this.regiones = this.paisesServices.regiones;
    this.miform.get( 'region' )?.valueChanges.subscribe( s_region => {
      this.paisesServices.getPaisesPorRegion( s_region ).subscribe( _paises => {
        this.paises = _paises;
        console.log( this.paises );
      });
      console.log(s_region);
    })
  }

  guardar(){
    // code
  }

}
