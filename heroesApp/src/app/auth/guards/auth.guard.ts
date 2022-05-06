import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor( private authServices: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

/* code
      if( this.authServices.auth.id ){
        return true;
      }
    return true;
    */

      return this.authServices.verificacionToken();

  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean  {

      return this.authServices.verificacionToken();

/*  example

      if( this.authServices.auth.id ){
        return true;
      }

    return false;
*/

  }



}
