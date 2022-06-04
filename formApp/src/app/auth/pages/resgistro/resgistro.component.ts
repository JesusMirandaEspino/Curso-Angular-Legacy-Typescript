import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { emailVliadatedpattern, nombreApellidopattern, noPuedeSerStride } from '../../../shared/validators/validators';
import { EmailValidatorsService } from 'src/app/shared/validators/email-validators.service';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.scss']
})
export class ResgistroComponent implements OnInit {



  public miform: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.pattern( this.validatorsService.nombreApellidopattern ) ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.validatorsService.emailVliadatedpattern ) ], [this.emailValidatorsService] ],
    username: [ '', [ Validators.required, this.validatorsService.noPuedeSerStride ] ],
    pass1: [ '', [ Validators.required, Validators.minLength(6) ] ],
    pass2: [ '', [ Validators.required ] ],
  },{
    validators: [ this.validatorsService.camposIguales( 'pass1', 'pass2' ) ]
  });

  constructor(  private fb: FormBuilder,
                private validatorsService: ValidatorsService,
                private emailValidatorsService: EmailValidatorsService   ) { }

  ngOnInit(): void {

    this.miform.reset({
      nombre: 'Jesus Miranda',
      email: 'test1@test.com',

    });
  }


  campoValido(campo:string){
    return this.miform.get(campo)?.invalid && this.miform.get(campo)?.touched;
  }


  submitForm(){
    this.miform.markAllAsTouched();
  }

}
