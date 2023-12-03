export interface Product{
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'Nokia 1100',
//     price: 120000.0
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 350000.0
// }

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

// function taxCalculation( { products, tax } : TaxCalculationOptions) : number[]{
export function taxCalculation( options : TaxCalculationOptions) : number[]{
    
    const { products, tax } = options;
    
    let total = 0;

    products.forEach( ( {price} ) => {
        total += price;
    });
    return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.19;

// const [total,impuesto] = taxCalculation({
//     products: shoppingCart,
//     tax: tax
// });

// console.log('Total0: ', total);
// console.log('Impuesto: ', impuesto);

export function exportacionNormal():string{
    return 'exportacion normal';
}

function exportacionPorDefecto(){
    console.log('exportacion por defecto');
}

function exportacionAlias(){
    console.log('Ivan Arturo Diaz Rosso');
}

export{exportacionAlias as imprimeMiNombre}

export default exportacionPorDefecto;
