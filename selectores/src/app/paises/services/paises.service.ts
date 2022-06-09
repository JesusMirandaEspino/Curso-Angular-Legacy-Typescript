import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private regiones2: string[] = [  'EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN' ,'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ];
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  private url: string = 'https://restcountries.com/v3.1';
  private urlv2: string = 'https://restcountries.com/v2';

  get regiones(): string[]{
    return [...this._regiones];
  }

  constructor() { }
}
