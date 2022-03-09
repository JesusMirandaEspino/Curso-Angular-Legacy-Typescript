import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import 'animate.css';
@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss']
})
export class CountriesTableComponent implements OnInit {

  @Input() countries: Country[] = [];

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

}
