import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor( private authServices: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


  // code    if( this.authServices.auth.id ){
  // code      return true;
  // code    }
  // code  return true;


      return this.authServices.verificacionToken()
      .pipe( tap( isAuth => {
        if( !isAuth ){
          this.router.navigate(['./auht/login'])
        }
      }) );

  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean  {

      return this.authServices.verificacionToken().pipe( tap( isAuth => {
        if( !isAuth ){
          this.router.navigate(['./auht/login'])
        }
      }) );

      // code     if( this.authServices.auth.id ){
        // code      return true;
        // code   }

        // code  return false;

  }



}
