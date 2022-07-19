import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrls: ['./dahsboard.component.scss']
})
export class DahsboardComponent implements OnInit {

  get usuario(){
    return this.authService.usuario;
  }

  constructor( private router: Router, private authService: AuthService) {
    // code
  }

  ngOnInit(): void {
    // code
  }


  logout(){
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }

}
