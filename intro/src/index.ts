/********************************/
//      Importaciones     
/********************************/
import { Producto, calculaISV } from './product';


console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/




/********************************/
//    Variables en Typescript
/********************************/

let nombrepersona: string  = 'Jesus';
let edadpersona:   number  = 33;
let valorpersona:  boolean = false;

console.log( `Hola soy ${nombrepersona} mi edad es ${edadpersona}` );


/********************************/
//            
/********************************/

let arreglo: (string | number | boolean )[]= [];

interface Personaje{

    nombre:       string;
    hp:           number;
    habilidades:  string[];
    mostrarHp: () => void;

}

const personaje: Personaje = {
    nombre: 'Jesus',
    hp: 100,
    habilidades: [ 'fuego', 'agua', 'rayo' ],
    mostrarHp(){
        console.log( personaje.hp );
    }
}




/********************************/
//      Funciones      
/********************************/
const sumar = (a: number, b: number): number => {
    return a + b;
}

const multiplicar = (a: number, b: number): number => {
    return a * b;
}


const curar = ( personaje: Personaje, curarhp:number ) => {
    personaje.hp += curarhp
}


console.log('*********************************************');
console.log( sumar(5,10) );
console.log('*********************************************');

console.log('*********************************************');
console.log( multiplicar(5,10) );
console.log('*********************************************');




/********************************/
//      Arreglos e interfaces      
/********************************/

interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: Direccion,
    MostrarDireccion: () => string;
}

interface Direccion{
        calle: string;
        pais: string
        ciudad: string
}


const superHeroe: SuperHeroe = {
    nombre: 'spiderman',
    edad: 30,
    direccion: {
        calle: 'Main st',
        pais: 'USA',
        ciudad: 'NY'
    },
    MostrarDireccion() {
        return `${this.nombre}  ${this.direccion}  ${this.direccion.pais}`
    }
}




/********************************/
//      Desestructuracion     
/********************************/


const {nombre, edad, direccion:{calle, ciudad, pais} } = superHeroe;


console.log('*********************************************');
console.log( `Heroe: ${nombre}. Edad: ${edad}. Direccion ${calle}, ${ciudad}, ${pais} ` );
console.log('*********************************************');


const dbz: string[] = ['Goku', 'Gohan', 'vegeta'];
const [ goku, , vegeta ] = dbz;

console.log('*********************************************');
console.log( `Valor del arreglo de la posicion 1 ${goku}` );
console.log( `Valor del arreglo de la posicion 3 ${vegeta}` );


const telefono: Producto = {
    desc: 'Hauwei',
    precio: 3200
}

const tableta: Producto = {
    desc: 'Asus',
    precio: 4200
}

const articulos = [ telefono, tableta ];



const [ total, isv ] = calculaISV(  articulos )

console.log('*********************************************');
console.log(`El total  ${total}`  );
console.log(`El IVA  ${isv}`  );


/********************************/
//      Clases     
/********************************/
class Heroe {

    constructor( 
        public alterEgo: string, 
        public edad?: number, 
        public nombreReal?: string 
        ){
    }

    imprimirAlterEgo(  ){
        console.log( this.alterEgo );
    }

}


const ironMan = new Heroe('ironman');

console.log(  ironMan );