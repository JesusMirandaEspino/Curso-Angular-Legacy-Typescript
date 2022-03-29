import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrdinaryComponent } from './pages/ordinary/ordinary.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicComponent,
    OrdinaryComponent,
    MayusculasPipe

  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicComponent,
    OrdinaryComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
