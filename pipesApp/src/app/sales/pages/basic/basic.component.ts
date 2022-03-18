import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  nombreLower: string = 'jesus';
  nombreUpper: string = 'JESUS';
  nombreCompleto: string = 'JeSus MiRAndA';


  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

}
