

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

}

const personaje: Personaje = {
    nombre: 'Jesus',
    hp: 100,
    habilidades: [ 'fuego', 'agua', 'rayo' ]
}
