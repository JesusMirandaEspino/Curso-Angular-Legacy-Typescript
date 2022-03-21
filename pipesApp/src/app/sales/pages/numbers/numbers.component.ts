import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  ventasNetas: number = 102512.3654;
  porcentaje: number = 0.48;

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

}
