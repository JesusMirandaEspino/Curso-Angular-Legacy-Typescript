import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrlUser: string = environment.baseUrlUser;
    private _auth: Auth | undefined;

  get auth(): Auth{
    return { ...this._auth! };
  }

  constructor( private http: HttpClient ) {
    // code
  }

  login(){
    return this.http.get<Auth>( `${this.baseUrlUser}/1` )
      .pipe(  tap( auth => this._auth = auth ),
              tap( auth => localStorage.setItem( 'auth', auth.id ) )  );
  }


  logout(){
    this._auth = undefined;
  }

}
