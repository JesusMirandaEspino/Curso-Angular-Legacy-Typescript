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
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  //Code
  }


  buscar( termino: string ){
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
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

    this.termino = event;
    this.mostrarSugerencias = true;
    this.error = false;
    // TODO crear sugerencias

      this.countryService.buscarPais( event ).subscribe( paises => this.paisesSugeridos = paises.splice(0,5),
      (error) => { this.paisesSugeridos = []; console.log(error); });
  }


  buscarSugerido(termino: string){
    this.buscar( termino );
  }

}
