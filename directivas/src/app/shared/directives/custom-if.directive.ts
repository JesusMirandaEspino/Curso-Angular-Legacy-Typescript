import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective implements OnDestroy {


  @Input() set appCustomIf( _valor: boolean ){
    if( _valor ){
      this.viewContainer.createEmbeddedView( this.templateRef );
    }else{
      this.viewContainer.clear();
    }
  }

  constructor( private templateRef: TemplateRef<HTMLElement>, private viewContainer: ViewContainerRef ) {
    console.log('custom if');
  }

  ngOnDestroy():void{
    console.log('onDestroy');
  }

}
