import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { emailVliadatedpattern, nombreApellidopattern, noPuedeSerStride } from '../../../shared/validators/validators';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.scss']
})
export class ResgistroComponent implements OnInit {



  public miform: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.pattern( this.validatorsService.nombreApellidopattern ) ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.validatorsService.emailVliadatedpattern ) ] ],
    username: [ '', [ Validators.required, this.validatorsService.noPuedeSerStride ] ]
  });

  constructor( private fb: FormBuilder, private validatorsService: ValidatorsService  ) { }

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
