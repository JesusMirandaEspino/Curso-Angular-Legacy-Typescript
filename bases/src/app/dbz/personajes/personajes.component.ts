import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  @Input() personajes: Personaje[] = [];

  constructor() {
    // code
  }

  ngOnInit(): void {
  // code
  }

}
