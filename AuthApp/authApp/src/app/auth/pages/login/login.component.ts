import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup  = this.fb.group({
    email: [ 'mitest1@gmail.com', [ Validators.required, Validators.email ] ],
    password: [ '123456', [ Validators.required, Validators.min(6) ] ]
  });

  constructor( private fb: FormBuilder, private router: Router) {
    // code
  }

  ngOnInit(): void {
    // code
  }

  login(){
    console.log('hola');
    this.router.navigateByUrl('/dashboard');
  }

}
