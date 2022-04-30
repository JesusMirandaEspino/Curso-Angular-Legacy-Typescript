import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {

  constructor(  private matDialogRef: MatDialogRef<ConfirmarComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Heroe,) {
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
