import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.scss']
})
export class ResgistroComponent implements OnInit {

  public nombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailVliadated: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public miform: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.pattern( this.nombreApellido ) ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.emailVliadated ) ] ],

  });

  constructor( private fb: FormBuilder  ) { }

  ngOnInit(): void {

    this.miform.reset({
      nombre: 'Jesus Miranda',
      email: 'Jesus@Miranda.com',

    });


  }

  campoValido(campo:string){
    return this.miform.get(campo)?.invalid && this.miform.get(campo)?.touched;
  }


  submitForm(){
    this.miform.markAllAsTouched();
  }

}
