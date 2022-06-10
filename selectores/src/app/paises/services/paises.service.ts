import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { PaisBorder } from '../interfaces/border';
import { PaisSmall } from '../interfaces/regions';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones2: string[] = [  'EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN' ,'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ];
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];



  private url: string = 'https://restcountries.com/v3';
  private urlv2: string = 'https://restcountries.com/v3.1';
  private apiUrl: string = 'https://restcountries.com/v2';

  get regiones(): string[]{
    return [...this._regiones];
  }

  constructor( private http: HttpClient) {
    // code
  }

  getPaisesPorRegion( _region: string ): Observable<PaisSmall[]>{
    return this.http.get<PaisSmall[]>( `${this.url}/region/${_region}?fields=cca3,name` );
  }



  getPaisesFronteras( pais: string ): Observable<PaisBorder | null>{

    if( !pais ){
      return of(null);
    }

    const paisCode = pais.toLowerCase();
    return this.http.get<PaisBorder>( `${this.url}/alpha/${paisCode}` );
  }


  getPaisesCodigoFronteras( pais: string ): Observable<PaisBorder >{

    const paisCode = pais.toLowerCase();
    return this.http.get<PaisBorder>( `${this.url}/alpha/${paisCode}` );
  }


  getPaisesPorCodigos( border: any ){

    if( border ){
      return of([]);
    }

    const peticiones: Observable<PaisBorder>[] = [];
    border.forEach( (codigo: any) => {
      const peticion = this.getPaisesCodigoFronteras(codigo);
      peticiones.push(peticion)
    });

    return combineLatest( peticiones )

  }

}
