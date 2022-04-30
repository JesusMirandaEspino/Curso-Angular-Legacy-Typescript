import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {

  constructor( private matDialogRef: MatDialogRef<ConfirmarComponent> ) {
    // code
  }

  ngOnInit(): void {
    // code
  }


Borrar(){
  this.matDialogRef.close(true);
}


Cerrar(){
  this.matDialogRef.close();
}


}
