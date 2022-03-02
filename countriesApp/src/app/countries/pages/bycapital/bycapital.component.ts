import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-bycapital',
  templateUrl: './bycapital.component.html',
  styleUrls: ['./bycapital.component.scss']
})
export class BycapitalComponent implements OnInit {

  termino: string = 'hola';
  paises: Country [] = [];
  error: boolean = false;

  constructor( private countryservices: CountryService  ) {
    // code
  }

  ngOnInit(): void {
    // code
  }

buscar( termino: any ){
    this.error = false;
    this.termino = termino;
    this.countryservices.buscarPorCapital( this.termino )
    .subscribe(
      (res) => {
        this.paises = res;
    }, ( error ) => {
      this.error = true;
      this.paises = [];
      console.log( error );
    });
}


    sugerencias( event: any ){
      this.error = false;
      console.log( event );
      // TODO crear sugerencias
    }


}
