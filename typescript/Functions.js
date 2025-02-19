/////////
// way 1 - normal function
////////
function addition(a, b) {
    return a + b;
}
var res = addition(1, 2);
console.log("Addition of given number is ".concat(res));
/////////
// way 2 - variable as a function
////////
var division = function (a, b) {
    if (b === 0) {
        console.warn("You can not divide any number with 0");
        return 0;
    }
    return a / b;
};
console.log("Division of given number is ".concat(division(1, 2)));
/////////
// way 3 - arrow function
// this way is we use most of the time in the future (in react)
////////
// Type 1
var multiplication = function (a, b) {
    return a * b;
};
console.log("multiplication of given number is ".concat(multiplication(2, 2)));
// Type 2
var substraction = function (a, b) {
    return a - b;
};
console.log("substraction of given number is ".concat(substraction(5, 2)));
