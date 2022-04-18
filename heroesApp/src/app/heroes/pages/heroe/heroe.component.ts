import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  public heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe( switchMap( ({ id }) =>  this.heroesService.getHeroeByid(id)  )	 )
    .subscribe( ( _heroe ) => this.heroe = _heroe );
  }

}
