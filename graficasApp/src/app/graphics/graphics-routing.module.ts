import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { BarsComponent } from './pages/bars/bars.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';

const routes: Routes = [

  {
    path: '',
    children: [
                {
                  path: 'bar',
                  component: BarsComponent
                },
                {
                  path: 'bardouble',
                  component: BarsDoubleComponent
                },
                {
                  path: 'dona',
                  component: DonaComponent
                },
                {
                  path: 'donaHttp',
                  component: DonaHttpComponent
                },
                {
                  path: '**',
                  redirectTo: 'bar'
                }
              ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
