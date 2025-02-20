console.log("1. print 1-10 ");
for (var index = 0; index < 10; index++) {
    console.log(index + 1);
}
console.log("2. Table of given number");
var tableFor = 3;
for (var i = 1; i <= 10; i++) {
    console.log(tableFor * i);
}
document.addEventListener("DOMContentLoaded", function () {
    var textBox = document.createElement("input");
    var button = document.createElement("button");
    button.textContent = "Get Fact";
    button.addEventListener("click", function () {
        var fact = 1;
        for (var i = 1; i <= parseInt(textBox.value); i++) {
            fact = fact * i;
        }
        console.log(" Fact of ".concat(textBox.value, " is ").concat(fact, " "));
    });
    document.body.append(textBox);
    document.body.append(button);
});
////////
/// WHile loop
////
var num = 1;
while (num <= 10) {
    console.log("1 - 10 from while loop ".concat(num));
    num = num + 1;
}
var number = 1;
var table = 2;
do {
    console.log("table from do while ".concat(table * number));
    number = number + 1;
} while (number <= 10);
document.addEventListener("DOMContentLoaded", function () {
    var textBox = document.createElement("input");
    var button = document.createElement("button");
    var div = document.createElement("div");
    button.textContent = "Get Table";
    button.addEventListener("click", function () {
        var number = 1;
        var table = parseInt(textBox.value);
        do {
            console.log("table from do while ".concat(table * number));
            div.textContent = "table from do while ".concat(table * number);
            number = number + 1;
        } while (number <= 10);
    });
    document.body.append(textBox);
    document.body.append(button);
    document.body.append(div);
});
