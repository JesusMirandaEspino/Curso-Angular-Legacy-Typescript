import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  public htmlELement: ElementRef<HTMLElement>;
  @Input()  color: string = 'red';
  @Input() mensaje:string = 'Debe de ingresar este campo';

  constructor( private element: ElementRef<HTMLElement> ) {
    this.htmlELement =  element;
  }


  ngOnInit():void{
    console.log('init directivas');
    this.setColor();
    this.setText();
  }

  setColor(): void{
    this.htmlELement.nativeElement.style.color = this.color;
  }

  setText(): void{
    this.htmlELement.nativeElement.innerText = this.mensaje;
  }

}
