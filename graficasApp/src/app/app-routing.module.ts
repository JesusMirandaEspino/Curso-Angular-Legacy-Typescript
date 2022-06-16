import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: 'graphics',
    loadChildren: () => import('./graphics/graphics.module').then( m => m.GraphicsModule  )
  },
  {
    path: '**',
    redirectTo: 'graphics'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgChartsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
