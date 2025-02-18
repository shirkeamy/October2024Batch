console.log("1. Print 1 to 10 numbers")
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

console.log("2. table of given number")
let tableFor: number = 10;
for (let i = 1; i <= 10; i++) {
    console.log(tableFor * i);
}

console.log("3. Factorial of given number")

let factFor: number = 3;
let factorial: number = 1;
for (let i = 1; i <= factFor; i++) {
    factorial = factorial * i
}
console.log(factorial);

document.addEventListener("DOMContentLoaded", () => {

    let textBox = document.createElement("input");
    let button = document.createElement("button");
    button.textContent = "get table"
    button.addEventListener("click", () => {
        console.log("Table for",textBox.value)
        for (let i = 1; i <= 10; i++) {
            console.log(parseInt(textBox.value) * i);
        }
    })
    document.body.append(textBox)
    document.body.append(button)

});


///////////////////////
// While loop
///////////////////////

console.log("1. Print 1 to 10 numbers using while");

let num: number = 1;
while (num <= 10) {
    console.log(num);
    num = num + 1;
}

console.log("2. Print table of any numbers using while loop");

let tableOf: number = 4;
let numb: number = 1;
while (numb <= 10) {
    console.log(tableOf * numb);
    numb = numb + 1;
}

///////////////////////
// do while loop
///////////////////////


console.log("1. Print 1 to 10 numbers using do while");

let numbs: number = 1;
do {
    console.log(numbs);
    numbs = numbs + 1;
} while (numbs <= 10)
