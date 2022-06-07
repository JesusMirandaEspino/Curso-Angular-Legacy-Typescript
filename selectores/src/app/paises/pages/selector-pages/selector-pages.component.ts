import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styleUrls: ['./selector-pages.component.scss']
})
export class SelectorPagesComponent implements OnInit {

  miform: FormGroup = this.fb.group({
    region: [ '', Validators.required ]
  });

  constructor( public fb: FormBuilder ) {
    // code
  }

  ngOnInit(): void {
    // code
  }

  guardar(){
    // code
  }

}
