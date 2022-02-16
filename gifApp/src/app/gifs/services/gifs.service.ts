import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apyk: string = 'Qmar0HBJRlLnLaX5QQMHEsae5AiucqSG';
  private url: string = 'http://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  // ?api_key=Qmar0HBJRlLnLaX5QQMHEsae5AiucqSG&q=goku&limit=10


  get historial(){

    return [...this._historial];
  }

  constructor(  private http: HttpClient ) {

    this._historial = JSON.parse( localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse( localStorage.getItem('resultados')!) || [];
/*
    if( localStorage.getItem('historial') ){
      this._historial =  JSON.parse( localStorage.getItem('historial')!  );
    } */

  }


  buscarGifs( query: string ){

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem( 'historial', JSON.stringify( this._historial ) );

    }


    const params = new HttpParams()
    .set( 'api_key', this.apyk )
    .set( 'limit', '10' )
    .set( 'q', query );


    this.http.get<SearchResponse>( `${this.url}/search`, { params } )
      .subscribe( (res ) => {
        this.resultados = res.data;
        console.log( this.resultados );

        localStorage.setItem( 'resultados', JSON.stringify( this.resultados ) );

      });


  }

}
