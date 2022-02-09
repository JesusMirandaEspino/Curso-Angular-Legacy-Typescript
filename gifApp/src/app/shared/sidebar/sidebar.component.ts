import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  get historial(){
    return this.gifservices.historial;
  }

  constructor( private gifservices: GifsService  ) {
    // code
  }

  ngOnInit(): void {
    // code
  }

}
