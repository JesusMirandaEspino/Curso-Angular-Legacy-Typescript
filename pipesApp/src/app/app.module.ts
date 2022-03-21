import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';


// Modulo Primeng Personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';


import localeEs from '@angular/common/locales/es-HN';
import localeFr from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEs );
registerLocaleData( localeFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    SalesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
