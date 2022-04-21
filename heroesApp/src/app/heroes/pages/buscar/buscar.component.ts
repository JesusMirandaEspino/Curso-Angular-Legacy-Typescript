import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  public termino: string = '';
  public heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService) {
    // code
  }

  ngOnInit(): void {
    // code
  }

  buscar(){
    this.heroesService.getHeroes().subscribe( heroes => {
      this.heroes = heroes;
    } );
  }

}
