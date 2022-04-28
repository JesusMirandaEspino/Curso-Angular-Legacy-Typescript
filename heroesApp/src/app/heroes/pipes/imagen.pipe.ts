import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( _heroe: Heroe   ): string {

        if(_heroe.alt_img===''){
            return 'assets/no-image.png';
        }else if(!_heroe.id && !_heroe.alt_img ){
            return 'assets/no-image.png';
        }else if( _heroe.alt_img){
            return _heroe.alt_img;
        }else{
            return  `assets/heroes/${_heroe.id}.jpg`;
        }
  }

}
