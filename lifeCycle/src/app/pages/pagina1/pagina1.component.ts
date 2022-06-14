import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(){
    console.log( 'ngOnChanges' );
  }


  ngDoCheck(){
    console.log( 'ngDoCheck' );
  }

  ngAfterContentInit(){
    console.log( 'ngAfterContentInit' );
  }


  ngAfterViewInit(){
    console.log( 'ngAfterViewInit' );
  }

  ngAfterViewChecked(){
    console.log( 'ngAfterViewChecked' );
  }

  ngOnDestroy(){
    console.log( 'ngOnDestroy' );
  }

}
