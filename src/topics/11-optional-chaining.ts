//CREACION DE UNA INTERFAZ
export interface Pasajero{
    name: string;
    children?: string[];
}

//CREACION DE  OBJETOS
const pasajero2: Pasajero = {
    name: 'Rafael',
    children: ['Smith', 'Dalet', 'Zlatan']
}

const pasajero3: Pasajero = {
    name: 'Ivan'
}

//CREACION DE UNA FUNCION
const imprimirHijos = (pasajero: Pasajero): number => {
     const cuantosHijos = pasajero.children?.length || 0;
    //const cuantosHijos = pasajero.children!.length;

    console.log(`${pasajero.name} Tiene : ${cuantosHijos} hijos`);

    return cuantosHijos;
}

//LLAMADO DE LA FUNCION
imprimirHijos(pasajero2);
imprimirHijos(pasajero3);




// const pasajero3: Pasajero = {
//     name: 'Ivan'
// }
// const pasajero5: Pasajero = {
//     name: 'Isabel'
// }

// const pasajero1: Pasajero = {
//     name: 'Monica',
//     children: ['Rolando', 'Antuan']
// }
// const pasajero4: Pasajero = {
//     name: 'Yandy',
//     children: ['Joel']
//}


// imprimirHijos(pasajero1);
// imprimirHijos(pasajero3);    
// imprimirHijos(pasajero4);
// imprimirHijos(pasajero5);