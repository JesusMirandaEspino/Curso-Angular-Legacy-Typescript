import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private url: string = 'https://restcountries.com/v3.1';
  private urlv2: string = 'https://restcountries.com/v2';

get params(){
  return  new HttpParams().set( 'fields','name,capital,flags,population,status,languages,ccn3' );
}

  constructor( private http: HttpClient ) { }



  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.url}/name/${termino}`;

    return this.http.get<Country[]>( url, { params: this.params }  );
  }


  buscarPorCapital( termino: string ): Observable<Country[]>{
    const url = `${this.url}/capital/${termino}`;
    return this.http.get<Country[]>( url, { params: this.params }  );
  }


  buscarPorCode( id: string ): Observable<Country>{
    const url = `${this.url}/alpha/${id}`;
    return this.http.get<Country>( url );
  }

  buscarPorRegion( region: string ): Observable<Country[]>{



    const urlv2 = `${this.urlv2}/regionalbloc/${region}`;
    return this.http.get<Country[]>( urlv2, { params: this.params } );
  }

  // flags
  // name
  // population

// name
// population
// status
// languages
// Ccn3

}
