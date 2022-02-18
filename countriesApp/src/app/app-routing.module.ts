import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BycapitalComponent } from './countries/pages/bycapital/bycapital.component';
import { BycountryComponent } from './countries/pages/bycountry/bycountry.component';
import { ByregionComponent } from './countries/pages/byregion/byregion.component';
import { SeecountryComponent } from './countries/pages/seecountry/seecountry.component';


const routes: Routes = [

  {
    path: '',
    component: BycountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ByregionComponent,
  },
  {
    path: 'capital',
    component: BycapitalComponent,
  },
  {
    path: 'country/:id',
    component: SeecountryComponent,

  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
