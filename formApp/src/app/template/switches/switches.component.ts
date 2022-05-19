import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  persona = {
    genero: '',
    notificaciones: false
  };

  terminoYCondiciones: boolean = false;

  constructor() {
    //  code
  }

  ngOnInit(): void {
    // code
  }

}
