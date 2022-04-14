import { Component, OnInit, Output } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
  export class ListadoComponent implements OnInit {

    @Output() heroe!:Heroe;

  public listHeroes: Heroe[] = [];

  constructor( private heroesService: HeroesService ) {
    // code
  }

  ngOnInit(): void {
      this.heroesService.getHeroes().subscribe( (heroes) => {
        this.listHeroes = heroes;
      });
  }

}
