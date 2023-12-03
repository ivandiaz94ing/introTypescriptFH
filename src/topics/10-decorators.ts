function miDecorador<T extends { new ( ...args:any[ ] ) : {} } >(
    constructor:T
) {
  // Lógica del decorador aquí
    return class extends constructor {
    apellido: string = 'Diaz';
}
}


@miDecorador
export class SuperClass {
  public nombre: string = 'Ivan';

  print(){
    console.log('Hello ' + this.nombre);
  }
}

//console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);