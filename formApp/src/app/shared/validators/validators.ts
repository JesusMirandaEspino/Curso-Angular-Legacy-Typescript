import { FormControl } from '@angular/forms';


export const  nombreApellidopattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const  emailVliadatedpattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';



export const noPuedeSerStride= (control:  FormControl) => {
    const value: string = control.value?.trim().toLowerCase();
    if( value === 'strider' ){
      return {
        noStrider: true
      }
    }
    return null;
  }
