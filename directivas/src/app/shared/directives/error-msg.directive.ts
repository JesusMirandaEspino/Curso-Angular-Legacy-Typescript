import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  constructor() {
    console.log( 'directivas' );
  }


  ngOnInit():void{
    console.log('init directivas');
  }

}
