export class Persona{

    constructor(
        public nombre: string,
        public poder: number,
        public adress: string = 'Not Adress'
        ){ }   
}

// const iromman = new Persona('Iroman');

// console.log(iromman.nombre);
// console.log(iromman.adress);

//HERENCIA DE CLASES
// export class Heroe extends Persona{
//     constructor(
//         public alterEgo: string,
//         public edad: number,
//         public nombreReal: string
//     ){
//         super(nombreReal, 'New York');
//     }
// }

// const spiderman = new Heroe('Spiderman',30,'Peter Parker');
// console.log(spiderman);


//COMPSOICION DE CLASES

export class Heroe{
    constructor(
        public apodo: string,
        public edad: number,
        public nombreReal: string,
        public person: Persona,

    ){
        //this.persona = new Persona(nombreReal);
    }
}

const tony = new Persona('Tony',500);
const spiderman = new Heroe('Ironman',30,'Tony Stark',tony);

console.log(spiderman);



















//CLASES Y HERENCIA EN TYPESCRIPT COMO YO LAS ENTIENDO
// export class Persona1{
//     public nombre: string;
//     private adress: string;

//     constructor(nombre: string,adress: string){
//         this.nombre = nombre;
//         this.adress = adress;
//     }
// }

// const iromman1 = new Persona1('Iroman','New York');
// console.log(iromman1);


//HERENCIA
// export class Heroe extends Persona{
//     public alterEgo: string;
//     public edad: number;
//     public nombreReal: string;

//     constructor( alterEgo:string, edad: number, nombreReal: string  ){
//         super(nombreReal,'New York');
//         this.alterEgo = alterEgo;
//         this.edad = edad;
//         this.nombreReal = nombreReal;

//     }
// }

// const spiderman = new Heroe('Spiderman',30,'Peter Parker');
// console.log(spiderman);