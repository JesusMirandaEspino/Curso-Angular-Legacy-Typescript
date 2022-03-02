import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styleUrls: ['./countries-input.component.scss']
})
export class CountriesInputComponent implements OnInit {

  @Output() onEnter:  EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:  EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() {
    // code
  }

  ngOnInit(): void {
        this.debouncer
        .pipe(
          debounceTime(300)
        )
        .subscribe( valor => {
          this.onDebounce.emit( valor );
        });
  }


  buscar(){
    this.onEnter.emit( this.termino );
  }

  keypress( ){
    this.debouncer.next( this.termino );
  }

}
