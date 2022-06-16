import { Component, OnInit } from '@angular/core';


interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    menu: MenuItem[] = [
      {
        ruta: '/graphics/bar',
        texto: 'Bar'
      },
      {
        ruta: '/graphics/bardouble',
        texto: 'Double Bar'
      },
      {
        ruta: '/graphics/dona',
        texto: 'Dona'
      },
      {
        ruta: '/graphics/donaHttp',
        texto: 'Dona Http'
      },
    ];

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }



}
