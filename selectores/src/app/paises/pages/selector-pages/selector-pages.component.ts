import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
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
    pais: [ '', Validators.required ],
    frontera: [ '', Validators.required ]
  });

  constructor( public fb: FormBuilder, private paisesServices: PaisesService ) {
    // code
  }

  ngOnInit(): void {
    this.regiones = this.paisesServices.regiones;

    /* basic code
    this.miform.get( 'region' )?.valueChanges.subscribe( s_region => {
      this.paisesServices.getPaisesPorRegion( s_region ).subscribe( _paises => {
        this.paises = _paises;
        console.log( this.paises );
      });
      console.log(s_region);
    });*/


    this.miform.get( 'region' )?.valueChanges
      .pipe(
        tap( _ => {
          this.miform.get('pais')?.reset('')
        }),
        switchMap( region => this.paisesServices.getPaisesPorRegion( region ))
      )
      .subscribe( _paises => {
        this.paises = _paises;
        console.log(this.paises);
    });

    this.miform.get('pais')?.valueChanges.subscribe( _pais => {
      this.paisesServices.getPaisesFronteras( _pais );
    });

  }

  guardar(){
    // code
  }

}
