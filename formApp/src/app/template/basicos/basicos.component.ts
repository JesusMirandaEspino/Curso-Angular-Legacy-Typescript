import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  constructor() {
    //  code
  }

  ngOnInit(): void {
    // code
  }

guardar(miform:NgForm){
  console.log( miform );
}


}
