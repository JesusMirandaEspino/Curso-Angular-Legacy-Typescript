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
  paises: Country[] = [];
  error: boolean = false;

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  //Code
  }


  buscar( termino: string ){
    this.error = false;
    this.termino = termino;
    this.countryService.buscarPais( this.termino )
    .subscribe(
      (res) => {
        this.paises = res;
    }, ( error ) => {
      this.error = true;
      this.paises = [];
    });
  }

  sugerencias( event: any ){

    this.error = false;
    // TODO crear sugerencias


  }

}
