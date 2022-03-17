import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrdinaryComponent } from './pages/ordinary/ordinary.component';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicComponent,
    OrdinaryComponent
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicComponent,
    OrdinaryComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SalesModule { }
