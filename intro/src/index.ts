

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


const superHeroe = {
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
