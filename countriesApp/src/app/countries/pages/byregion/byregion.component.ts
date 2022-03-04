import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-byregion',
  templateUrl: './byregion.component.html',
  styleUrls: ['./byregion.component.scss']
})
export class ByregionComponent implements OnInit {

  regiones: string[] = [  'EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN' ,'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ];

  regionActiva: string = '';

  getClassRegion( region: string ): string{
    return ( region == this.regionActiva ) ? 'btn-primary' : 'btn-outline-primary';
  }

  constructor() {
    // code
  }

  ngOnInit(    ): void {
    // code
  }

  activarRegion( region: string ){
    this.regionActiva = region;
  }

}
