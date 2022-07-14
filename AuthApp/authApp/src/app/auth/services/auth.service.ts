import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/authInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.url;

  constructor( private http: HttpClient){
    // code
  }

  login( email: string, password: string){

    const url = `${this.url}auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body );
  }


}
