import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },

  ];

  public heroe: Heroe = {
    superhero:        '',
    publisher:        Publisher.DCComics,
    alter_ego:        '',
    first_appearance: '',
    characters:       '',
  }

  constructor( private heroesService: HeroesService) {
    // code
  }

  ngOnInit(): void {
    // code
  }

  guardar(){
    if( this.heroe.superhero.trim().length === 0 ){
      return;
    }

    this.heroesService.agregarHeroe(this.heroe).subscribe( resp => {
      console.log( resp );
    });
  }

}
