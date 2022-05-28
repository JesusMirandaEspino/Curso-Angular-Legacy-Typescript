import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ResgistroComponent } from './pages/resgistro/resgistro.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    ResgistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
