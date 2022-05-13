import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miForm',  { static: true}) miformulario!: NgForm;

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

  guardar(){}

}
