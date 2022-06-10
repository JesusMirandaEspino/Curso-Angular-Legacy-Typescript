import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { PaisBorder } from '../../interfaces/border';
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
  public fronteras: any[] = [];
  public cargando: boolean =  false;

  miform: FormGroup = this.fb.group({
    region: [ '', Validators.required ],
    pais: [ '', Validators.required ],
    frontera: [ { value: '', disabled: true }, Validators.required ]
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
          this.miform.get('pais')?.reset('');
          this.miform.get('frontera')?.disable();
          this.cargando = true;
        }),
        switchMap( region => this.paisesServices.getPaisesPorRegion( region ))
      )
      .subscribe( _paises => {
        this.paises = _paises;
        console.log(this.paises);
        this.cargando = false;
    });

    this.miform.get('pais')?.valueChanges
    .pipe(
      tap( _ => {
        this.fronteras = []; this.miform.get('frontera')?.reset('');
        this.cargando = true;
        this.miform.get('frontera')?.enable();
      }),
      switchMap( codigo => this.paisesServices.getPaisesFronteras(codigo) ),
      switchMap( pais => this.paisesServices.getPaisesPorCodigos(pais?.borders!) )
    )
    .subscribe( _paises => {
      this.fronteras = _paises;
      this.cargando = false;
    });

  }

  guardar(){
    // code
  }

}
