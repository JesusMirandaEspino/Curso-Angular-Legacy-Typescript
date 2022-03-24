import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.scss']
})
export class NoCommonsComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
