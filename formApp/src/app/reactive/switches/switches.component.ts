import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup  = this.fb.group({
    radioGenero: [ 'm', Validators.required ],
    notificaciones: [ true, Validators.required ],
    terminosCondiciones: [ false, Validators.requiredTrue ]
  });


  public persona = {
    radioGenero: 'f',
    notificaciones: true
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset( {...this.persona, terminosCondiciones: true } );

    this.miFormulario.controls['terminosCondiciones'].valueChanges.subscribe( value => {
      console.log( value );
    });



    this.miFormulario.valueChanges.subscribe( form => {
      console.log( form );
    });


  }


  guardar(){
    const formvalues = {...this.miFormulario.value};
    console.log(formvalues);
  }

}
