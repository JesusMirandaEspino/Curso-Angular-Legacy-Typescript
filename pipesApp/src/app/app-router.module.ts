import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './sales/pages/basic/basic.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { OrdinaryComponent } from './sales/pages/ordinary/ordinary.component';


const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'nocommons',
    component: NoCommonsComponent,
  },
  {
    path: 'ordinary',
    component: OrdinaryComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },

];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
