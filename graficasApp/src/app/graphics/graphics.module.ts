import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraphicsBarComponent } from './components/graphics-bar/graphics-bar.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    BarsComponent,
    BarsDoubleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraphicsBarComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
