/////////
// way 1 - normal function
////////
function addition(a: number, b: number): number {
    return a + b
}

let res: number = addition(1, 2);

console.log(`Addition of given number is ${res}`);

/////////
// way 2 - variable as a function
////////

let division = function (a: number, b: number) {

    if(b === 0){
        console.warn("You can not divide any number with 0")
        return 0;
    }

    return a/b;
}

console.log(`Division of given number is ${division(1,2)}`);

/////////
// way 3 - arrow function
// this way is we use most of the time in the future (in react)
////////


// Type 1
const multiplication = (a: number, b: number) => {
    return a*b;
}

console.log(`multiplication of given number is ${multiplication(2,2)}`)

// Type 2
const substraction: (a: number, b: number) => number = (a: number, b: number) => {
    return a-b;
}

console.log(`substraction of given number is ${substraction(5,2)}`)