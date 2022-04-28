import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

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

  constructor( private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) {
    // code
  }

  ngOnInit(): void {


    if( !this.router.url.includes('editar') ){
      return;
    }

    this.activatedRoute.params
    .pipe( switchMap( ({id}) =>   this.heroesService.getHeroeByid( id ) ) )
    .subscribe( _heroe => {

      this.heroe = _heroe;

    });



  }

  guardar(){
    if( this.heroe.superhero.trim().length === 0 ){
      return;
    }



    if( this.heroe.id ){
      this.heroesService.actualizarHeroe(this.heroe).subscribe( resp => {
        console.log(resp);
        this.resetfieldHero();
      });
    }else{
      this.heroesService.agregarHeroe(this.heroe).subscribe( _heroe => {
      console.log(_heroe);
        this.resetfieldHero();
        this.router.navigate( ['heroe/editar', _heroe.id] );
      });
    }


  }

  resetfieldHero(){
    this.heroe.superhero =         '';
    this.heroe.publisher =         Publisher.DCComics;
    this.heroe.alter_ego =         '';
    this.heroe.first_appearance =  '';
    this.heroe.characters =        '';
  }


  borrar(){
    this.heroesService.borrarHeroe( this.heroe.id! ).subscribe( resp => {
      this.router.navigate(['/heroes']);
    });
  }


}
