function addition(num1, num2) {
    return num1 + num2;
}
var res = addition(10, 20);
console.log(res);
var division = function (num1, num2) {
    return num1 / num2;
};
console.log("Division of ".concat(10, " and ").concat(5, " is ").concat(division(10, 5)));
// const fnName = () => {}
var multiplication = function (num1, num2) {
    return num1 * num2;
};
console.log("multiplication of ".concat(10, " and ").concat(5, " is ").concat(multiplication(10, 5)));
var subtraction = function (num1, num2) {
    return num1 - num2;
};
console.log("subtraction of ".concat(10, " and ").concat(5, " is ").concat(subtraction(10, 5)));
document.addEventListener("DOMContentLoaded", function () {
    var num1 = document.createElement("input");
    var num2 = document.createElement("input");
    var addButton = document.createElement("button");
    addButton.textContent = "Addition";
    var subButton = document.createElement("button");
    subButton.textContent = "Subtraction";
    var MultButton = document.createElement("button");
    MultButton.textContent = "Multiplication";
    var divButton = document.createElement("button");
    divButton.textContent = "Division";
    var div = document.createElement("div");
    addButton.addEventListener("click", function () {
        var result = addition(parseInt(num1.value), parseInt(num2.value));
        div.textContent = result.toString();
    });
    subButton.addEventListener("click", function () {
        var result = subtraction(parseInt(num1.value), parseInt(num2.value));
        div.textContent = result.toString();
    });
    document.body.appendChild(num1);
    document.body.appendChild(num2);
    document.body.appendChild(addButton);
    document.body.appendChild(subButton);
    document.body.appendChild(div);
});
