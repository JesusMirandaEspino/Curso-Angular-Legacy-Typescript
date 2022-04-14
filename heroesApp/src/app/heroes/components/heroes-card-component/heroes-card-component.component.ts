import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-heroes-card-component',
  templateUrl: './heroes-card-component.component.html',
  styleUrls: ['./heroes-card-component.component.scss']
})
export class HeroesCardComponentComponent implements OnInit {

  @Input() heroe!: Heroe;

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

}
