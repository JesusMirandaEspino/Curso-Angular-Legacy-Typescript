import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  miFormulario: FormGroup  = this.fb.group({
    nombre: [ 'jesus', [ Validators.required ] ],
    email: [ 'mitest1@gmail.com', [ Validators.required, Validators.email ] ],
    password: [ '123456', [ Validators.required, Validators.min(6) ] ],
    password2: [ '123456', [ Validators.required, Validators.min(6) ] ],
  });

  constructor( private fb: FormBuilder, private router: Router ) {
    // code
  }

  ngOnInit(): void {
    // code
  }


  login(){
    console.log(this.miFormulario);
    this.router.navigateByUrl('/dashboard');
  }

}
