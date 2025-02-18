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
// While and do while loop
///////////////////////

console.log("1. Print 1 to 10 numbers using while");

let num: number = 1;
while (num <= 10) {
    console.log(num);
    num = num + 1;
}
