import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu'
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenuModule,
    MenubarModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    MenuModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
