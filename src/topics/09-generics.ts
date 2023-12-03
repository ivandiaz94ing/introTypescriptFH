export function whatsMyTyoe<T>( argument : T ) : T {
    return argument;
}

let amIString = whatsMyTyoe<String>('Hola mundo');
let amINumber = whatsMyTyoe<number>(100);
let amIArray = whatsMyTyoe<number[]>([1,2,3,4,5]);

console.log(amIString.toLocaleUpperCase());
console.log(amINumber.toFixed(2));
console.log(amIArray.push(70)); 


// export function whatsMyTyoe( argument : any ) : any {
//     return argument;
// }

// let amIString = whatsMyTyoe('Hola mundo');
// let amINumber = whatsMyTyoe(100);
// let amIArray = whatsMyTyoe([1,2,3,4,5,6,7,8,9,10]);

// console.log(amIString.);
// console.log(amINumber);
// console.log(amIArray); 
