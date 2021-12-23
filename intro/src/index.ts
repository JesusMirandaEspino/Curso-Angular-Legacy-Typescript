

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/




/********************************/
//    Variables en Typescript
/********************************/

let nombre: string  = 'Jesus';
let edad:   number  = 33;
let valor:  boolean = false;

console.log( `Hola soy ${nombre} mi edad es ${edad}` );


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
    direccion: {
        calle: string;
        pais: string
        ciudad: string
    },
    MostrarDireccion: () => string;
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