import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  public htmlELement: ElementRef<HTMLElement>;
  @Input()  color: string = 'red';

  constructor( private element: ElementRef<HTMLElement> ) {
    this.htmlELement =  element;
  }


  ngOnInit():void{
    console.log('init directivas');
    this.setColor();
  }

  setColor(): void{
    console.log( this.htmlELement );
    this.htmlELement.nativeElement.style.color = 'red';
  }

}
