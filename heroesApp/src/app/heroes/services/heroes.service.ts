import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interface/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private urlHeroe: string = environment.baseUrl //'http://localhost:3000/heroes';
  private limit: number = environment.limit;

  constructor( private http: HttpClient ) {
    // code
  }


  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>( this.urlHeroe );
  }

  getHeroeByid(id:string):Observable<Heroe>{
    return this.http.get<Heroe>( `${this.urlHeroe}/${id}` );
  }

  getHeroeSugerencias(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>( `${this.urlHeroe}?q=${termino}&_limit=${this.limit}` );
  }

  agregarHeroe( _heroe: Heroe ):Observable<Heroe>{
    return this.http.post<Heroe>( `${this.urlHeroe}`, _heroe );
  }

    actualizarHeroe( _heroe: Heroe ):Observable<Heroe>{
    return this.http.put<Heroe>( `${this.urlHeroe}/${_heroe.id}`, _heroe );
  }


    borrarHeroe(_id:string  ):Observable<any>{
    return this.http.delete<any>( `${this.urlHeroe}/${_id}`);
  }

}
