console.log("1. print 1-10 ")
for (let index = 0; index < 10; index++) {
    console.log(index + 1)
}

console.log("2. Table of given number")
let tableFor: number = 3;
for (let i = 1; i <= 10; i++) {
    console.log(tableFor * i);
}

document.addEventListener("DOMContentLoaded", () => {
    let textBox = document.createElement("input");
    let button = document.createElement("button");
    button.textContent = "Get Fact";
    button.addEventListener("click", () => {
        let fact: number = 1;
        for (let i = 1; i <= parseInt(textBox.value); i++) {
            fact = fact * i;
        }
        console.log(` Fact of ${textBox.value} is ${fact} `)
    })

    document.body.append(textBox);
    document.body.append(button);

})


////////
/// WHile loop
////

let num: number = 1;

while (num <= 10) {
    console.log(`1 - 10 from while loop ${num}`)
    num = num + 1;
}

let number: number = 1;
let table: number = 2;

do {
    console.log(`table from do while ${table * number}`);
    number = number + 1;
} while (number <= 10);


document.addEventListener("DOMContentLoaded", () => {
    let textBox = document.createElement("input");
    let button = document.createElement("button");
    button.textContent = "Get Table";
    button.addEventListener("click", () => {
        let number: number = 1;
        let table: number = parseInt(textBox.value);

        do {
            console.log(`table from do while ${table * number}`);
            number = number + 1;
        } while (number <= 10);
    })

    document.body.append(textBox);
    document.body.append(button);

})