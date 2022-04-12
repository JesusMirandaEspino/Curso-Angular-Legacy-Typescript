import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private urlHeroe: string = 'http://localhost:3000/heroes';

  constructor( private http: HttpClient ) {
    // code
  }


  getHeroes(){
    return this.http.get( this.urlHeroe );
  }


}
