import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/authInterface';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, pipe } from 'rxjs';

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
          localStorage.setItem( 'token', response.token! );
          this._usuario = {
            name: response.name!,
            uid: response.uid!
          }
        }
      }),
      map( resp => resp.ok ), catchError( err => of(err.error.msg)
      ));
  }


  validarToken(): Observable<boolean>{
    const url = `${this.url}auth/renew`;
    const headers = new  HttpHeaders()
    .set( 'x-token', localStorage.getItem('token') || '' );
    return this.http.get<AuthResponse>( url, { headers } )
    .pipe(
      map( resp => {
          localStorage.setItem( 'token', resp.token! );
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!
          }
        return resp.ok
      }), catchError( err => of(false) )
      );
  }


}
