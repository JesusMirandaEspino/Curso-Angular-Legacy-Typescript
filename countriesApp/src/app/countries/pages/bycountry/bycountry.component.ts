import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-bycountry',
  templateUrl: './bycountry.component.html',
  styleUrls: ['./bycountry.component.scss']
})
export class BycountryComponent implements OnInit {

  termino: string = 'hola';
  respuesta: Country[] = [];

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.termino);
    this.countryService.buscarPais( this.termino ).subscribe(
      res => console.log(res)
    );

  }

}
