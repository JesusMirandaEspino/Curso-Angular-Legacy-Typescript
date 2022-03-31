import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu'
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenuModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    MenuModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
