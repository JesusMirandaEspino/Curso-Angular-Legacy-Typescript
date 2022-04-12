import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interface/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private urlHeroe: string = 'http://localhost:3000/heroes';

  constructor( private http: HttpClient ) {
    // code
  }


  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>( this.urlHeroe );
  }


}
