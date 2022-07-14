import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrls: ['./dahsboard.component.scss']
})
export class DahsboardComponent implements OnInit {

  constructor( private router: Router) {
    // code
  }

  ngOnInit(): void {
    // code
  }


  logout(){
    this.router.navigateByUrl('/auth');
  }

}
