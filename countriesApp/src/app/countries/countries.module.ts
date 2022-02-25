import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BycapitalComponent } from './pages/bycapital/bycapital.component';
import { BycountryComponent } from './pages/bycountry/bycountry.component';
import { ByregionComponent } from './pages/byregion/byregion.component';
import { SeecountryComponent } from './pages/seecountry/seecountry.component';
import { RouterModule } from '@angular/router';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountriesInputComponent } from './components/countries-input/countries-input.component';



@NgModule({
  declarations: [
    BycapitalComponent,
    BycountryComponent,
    ByregionComponent,
    SeecountryComponent,
    CountriesTableComponent,
    CountriesInputComponent
  ],
  exports: [
    BycapitalComponent,
    BycountryComponent,
    ByregionComponent,
    SeecountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }
