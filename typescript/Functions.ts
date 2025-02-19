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
