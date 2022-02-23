import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BycapitalComponent } from './pages/bycapital/bycapital.component';
import { BycountryComponent } from './pages/bycountry/bycountry.component';
import { ByregionComponent } from './pages/byregion/byregion.component';
import { SeecountryComponent } from './pages/seecountry/seecountry.component';



@NgModule({
  declarations: [
    BycapitalComponent,
    BycountryComponent,
    ByregionComponent,
    SeecountryComponent
  ],
  exports: [
    BycapitalComponent,
    BycountryComponent,
    ByregionComponent,
    SeecountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CountriesModule { }
