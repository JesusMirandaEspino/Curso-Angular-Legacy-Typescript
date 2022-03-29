import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordinary',
  templateUrl: './ordinary.component.html',
  styleUrls: ['./ordinary.component.scss']
})
export class OrdinaryComponent implements OnInit {

  cambiarLetras: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  cambiarlasLetras(){
    this.cambiarLetras = !this.cambiarLetras;
  }

}
