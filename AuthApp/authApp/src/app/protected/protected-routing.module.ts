import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './dahsboard/dahsboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
                {
                  path: '',
                  component: DahsboardComponent,
                },
                {
                  path: '**',
                  redirectTo: ''
                }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
