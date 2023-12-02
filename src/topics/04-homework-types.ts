/*
    ===== Código de TypeScript =====
*/

interface Adress {
    street: string;
    country: string;
    city: string;

}

interface SuperHeroe {
    name: string;
    age: number;
    adress: Adress;
    showAdress: () => string;
}


const superHeroe = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};