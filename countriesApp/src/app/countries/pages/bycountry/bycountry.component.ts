import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bycountry',
  templateUrl: './bycountry.component.html',
  styleUrls: ['./bycountry.component.scss']
})
export class BycountryComponent implements OnInit {

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.termino);
  }

}
