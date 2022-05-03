import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../auth/interfaces/auth.interfaces';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get auth(){
    return this.authServices.auth;
  }

  constructor( private router: Router, public authServices: AuthService ) {
    // code
  }

  ngOnInit(): void {
    // code

    console.log( this.auth.usuario );
  }



  logout(){
    this.router.navigate(['./auth'])
  }

}
