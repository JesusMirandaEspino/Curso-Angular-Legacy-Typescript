import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/authInterface';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.url;
  private _usuario!: Usuario;


  get usuario(){
    return { ...this._usuario };
  }

  constructor( private http: HttpClient){
    // code
  }

  login( email: string, password: string){

    const url = `${this.url}auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap( response => {
        if( response.ok ){
          this._usuario = {
            name: response.name!,
            uid: response.uid!
          }
        }
      }),
      map( resp => resp.ok ), catchError( err => of(false)
      ));
  }


}
