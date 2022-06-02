import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

public nombreApellidopattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
public emailVliadatedpattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }


noPuedeSerStride= (control:  FormControl) => {
    const value: string = control.value?.trim().toLowerCase();
    if( value === 'strider' ){
      return {
        noStrider: true
      }
    }
    return null;
  }




}
