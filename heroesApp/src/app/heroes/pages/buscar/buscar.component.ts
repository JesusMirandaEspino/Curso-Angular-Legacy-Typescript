import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  public heroSeleted!: Heroe;

  constructor( private heroesService: HeroesService) {
    // code
  }

  ngOnInit(): void {
    // code
  }

  buscar(){
    this.heroesService.getHeroeSugerencias(this.termino).subscribe( heroes => {
      this.heroes = heroes;
    } );
  }


  heroeSeleted(event:MatAutocompleteSelectedEvent){
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;


    this.heroesService.getHeroeByid(heroe.id!).subscribe( _heroe => {
      this.heroSeleted = _heroe;
    });

  }

}
