import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor() {
    // code
  }

  ngOnInit(): void {

        this.items = [
          {
            label: 'Pipes Angular',
            icon: 'pi pi-desktop',
            items: [
                    {
                      label: 'Text and letters',
                      icon: 'pi pi-align-left',
                      routerLink: '/'
                    },
                    {
                      label: 'Numbers',
                      icon: 'pi pi-dollar',
                      routerLink: 'numbers'
                    },
                    {
                      label: 'No Commons',
                      icon: 'pi pi-dollar',
                      routerLink: 'nocommons'
                    }
                  ]
          },

          {
            label: 'Personal Pipes',
            icon: 'pi pi-cog',
            items: [
                  {

                  }
            ]
          }
        ];

    }



}
