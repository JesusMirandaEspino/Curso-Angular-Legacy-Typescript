import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Jesus Miranda'

  public htmlELement: ElementRef<HTMLElement>;
  @Input() set color( _valor: string ){
    this._color = _valor;
    this.setColor();
  }

  @Input() set mensaje(_valor: string){
    this._mensaje = _valor;
    this.setText()
  }

  constructor( private element: ElementRef<HTMLElement> ) {
    this.htmlELement =  element;
  }


  ngOnInit():void{
    console.log('init directivas');
    this.setColor();
    this.setText();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // code
  }

  setColor(): void{
    this.htmlELement.nativeElement.style.color = this._color;
  }

  setText(): void{
    this.htmlELement.nativeElement.innerText = this._mensaje;
  }

}
