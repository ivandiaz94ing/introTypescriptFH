function addNumbers(a: number, b: number): number {
    return a + b;
}   

const addNumbersArrowfuntions = (a:number, b:number):string => {
    return `${a+b}`
}

const multiply = (firstNumber:number, secundNumber?:number , base:number = 2) => {
    return firstNumber * base;
}

// const resultado: number = addNumbers(1,2);
// const resultado2: string = addNumbersArrowfuntions(1,2);
// const multiplyResult: number = multiply(5);

interface Character {
    name: string;
    hp: number;
    funcion: () => void;
    }

const healCharacter  = (character:Character, amount:number) => {
    if(character.hp + amount <=100)
    character.hp += amount;
}


const strider: Character = {
    name:   'Strider',
    hp:     30,
    funcion(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 20);
healCharacter(strider, 20);
healCharacter(strider, 20);
healCharacter(strider, 20);

console.log(strider.funcion());










export{}