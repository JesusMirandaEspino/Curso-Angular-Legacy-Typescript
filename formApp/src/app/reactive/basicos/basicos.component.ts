import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  miFormulario: FormGroup = new FormGroup({
    'nombreProducto': new FormControl('RTX 2060')
  });

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

}
