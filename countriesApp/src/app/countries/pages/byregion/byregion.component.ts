import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-byregion',
  templateUrl: './byregion.component.html',
  styleUrls: ['./byregion.component.scss']
})
export class ByregionComponent implements OnInit {

  regiones: string[] = [  'africa', 'americas', 'asia', 'europe', 'oceania' ];
  regionActiva: string = '';

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
