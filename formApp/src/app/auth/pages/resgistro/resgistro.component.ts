import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.scss']
})
export class ResgistroComponent implements OnInit {

  public nombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  public miform: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.pattern( this.nombreApellido ) ] ],

  });

  constructor( private fb: FormBuilder  ) { }

  ngOnInit(): void {
  }

  campoValido(campo:string){
    return this.miform.get(campo)?.invalid && this.miform.get(campo)?.touched;
  }


  submitForm(){
    this.miform.markAllAsTouched();
  }

}
