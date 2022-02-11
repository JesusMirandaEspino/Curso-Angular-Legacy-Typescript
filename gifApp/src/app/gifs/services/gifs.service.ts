import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apyk: string = 'Qmar0HBJRlLnLaX5QQMHEsae5AiucqSG';
  private url: string = 'api.giphy.com/v1/gifs/search';
  private _historial: string[] = [];

  //api_key
  // q
  // limit

  get historial(){

    return [...this._historial];
  }

  constructor() {
    // code
  }


  buscarGifs( query: string ){

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }


  }

}
