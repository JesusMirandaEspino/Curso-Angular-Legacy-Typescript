import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }



  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.url}/name/${termino}`;

    return this.http.get<Country[]>( url );
  }


  buscarPorCapital( termino: string ): Observable<Country[]>{
    const url = `${this.url}/capital/${termino}`;
    return this.http.get<Country[]>( url );
  }


}
