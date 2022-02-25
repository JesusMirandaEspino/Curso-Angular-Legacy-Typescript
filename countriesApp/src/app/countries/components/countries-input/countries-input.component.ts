import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styleUrls: ['./countries-input.component.scss']
})
export class CountriesInputComponent implements OnInit {

  @Output() onEnter:  EventEmitter<string> = new EventEmitter();

  termino: string = '';

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }


  buscar(){
    this.onEnter.emit( this.termino );
  }

}
