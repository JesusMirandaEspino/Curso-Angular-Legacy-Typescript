import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-seecountry',
  templateUrl: './seecountry.component.html',
  styleUrls: ['./seecountry.component.scss']
})
export class SeecountryComponent implements OnInit {

  // pais: Country = {}

  constructor( private activatedroute: ActivatedRoute, private countryservice: CountryService ) {
    // code
  }

  ngOnInit(): void {
    this.activatedroute.params
      .pipe(
        switchMap( ({ id }) => this.countryservice.buscarPorCode( id ) )
      ).subscribe( resp => {

      });
  }

}
