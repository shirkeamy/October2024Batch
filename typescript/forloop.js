console.log("1. Print 1 to 10 numbers");
for (var i = 0; i < 10; i++) {
    console.log(i + 1);
}
console.log("2. table of given number");
var tableFor = 10;
for (var i = 1; i <= 10; i++) {
    console.log(tableFor * i);
}
console.log("3. Factorial of given number");
var factFor = 3;
var factorial = 1;
for (var i = 1; i <= factFor; i++) {
    factorial = factorial * i;
}
console.log(factorial);
document.addEventListener("DOMContentLoaded", function () {
    var textBox = document.createElement("input");
    var button = document.createElement("button");
    button.textContent = "get table";
    button.addEventListener("click", function () {
        console.log("Table for", textBox.value);
        for (var i = 1; i <= 10; i++) {
            console.log(parseInt(textBox.value) * i);
        }
    });
    document.body.append(textBox);
    document.body.append(button);
});
///////////////////////
// While loop
///////////////////////
console.log("1. Print 1 to 10 numbers using while");
var num = 1;
while (num <= 10) {
    console.log(num);
    num = num + 1;
}
console.log("2. Print table of any numbers using while loop");
var tableOf = 4;
var numb = 1;
while (numb <= 10) {
    console.log(tableOf * numb);
    numb = numb + 1;
}
///////////////////////
// do while loop
///////////////////////
console.log("1. Print 1 to 10 numbers using do while");
var numbs = 1;
do {
    console.log(numbs);
    numbs = numbs + 1;
} while (numbs <= 10);
console.log("2. Print table of any numbers using do while loop");
var tableOfNum = 2;
var Num = 1;
do {
    console.log(tableOfNum * Num);
    Num = Num + 1;
} while (Num <= 10);
