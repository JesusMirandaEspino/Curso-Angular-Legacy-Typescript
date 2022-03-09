import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-byregion',
  templateUrl: './byregion.component.html',
  styleUrls: ['./byregion.component.scss']
})
export class ByregionComponent implements OnInit {

  regiones: string[] = [  'EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN' ,'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ];

  regionActiva: string = '';

  countries: Country[] = [];

  getClassRegion( region: string ): string{
    return ( region == this.regionActiva ) ? 'btn-primary' : 'btn-outline-primary';
  }

  constructor(  private countryservices: CountryService  ) {
    // code
  }

  ngOnInit(    ): void {
    // code
  }

  activarRegion( region: string ){

    if( region == this.regionActiva ){
      return;
    }

    this.regionActiva = region;
    this.countries = [];

    this.countryservices.buscarPorRegion( region.toLowerCase() ).subscribe( (resp) => {
      this.countries = resp;
    }, ( error ) => {
      console.log(error);
      this.countries = [];
    });

  }



}
