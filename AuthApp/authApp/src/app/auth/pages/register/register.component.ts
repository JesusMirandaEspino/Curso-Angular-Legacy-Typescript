import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';


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

  constructor( private fb: FormBuilder, private router: Router, private authservices: AuthService ) {
    // code
  }

  ngOnInit(): void {
    // code
  }


  registro(){
    const { email, password, name } = this.miFormulario.value;
        this.authservices.registro(name, email, password).subscribe( resp => {
          console.log(resp)
          if( resp === true ){
            this.router.navigateByUrl('/dashboard');
          }else{
            Swal.fire({
              title: 'Error!',
              text: resp,
              icon: 'error',
              confirmButtonText: 'ok'
            });
          }
        });
  }
}
