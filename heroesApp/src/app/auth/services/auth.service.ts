import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrlUser: string = environment.baseUrlUser;

  constructor( private http: HttpClient ) {
    // code
  }

  login(){
    return this.http.get<Auth>( `${this.baseUrlUser}/1` );
  }


}
