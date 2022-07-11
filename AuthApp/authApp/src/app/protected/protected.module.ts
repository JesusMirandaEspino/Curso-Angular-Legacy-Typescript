import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DahsboardComponent } from './dahsboard/dahsboard.component';


@NgModule({
  declarations: [
    DahsboardComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
