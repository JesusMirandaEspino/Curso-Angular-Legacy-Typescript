import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apyk: string = 'Qmar0HBJRlLnLaX5QQMHEsae5AiucqSG';
  private url: string = 'http://api.giphy.com/v1/gifs/search';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  // ?api_key=Qmar0HBJRlLnLaX5QQMHEsae5AiucqSG&q=goku&limit=10

  //api_key
  // q
  // limit

  get historial(){

    return [...this._historial];
  }

  constructor(  private http: HttpClient ) {
    // code
  }


  buscarGifs( query: string ){

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }

    this.http.get<SearchResponse>( `${this.url}?api_key=${this.apyk}&q=${query}&limit=10` )
      .subscribe( (res ) => {
        this.resultados = res.data;
        console.log( this.resultados );
      });


  }

}
