var number1 = 10;
var number2 = 5;
if (number1 > number2) {
    console.log("number1 is greater than number2");
}
else if (number1 === number2) {
    console.log("number1 and number2 are equal");
}
else {
    console.log("number2 is greater than number2");
}
document.addEventListener("DOMContentLoaded", function () {
    var number1 = document.createElement("input");
    var number2 = document.createElement("input");
    var checkButton = document.createElement("button");
    checkButton.innerText = "Check";
    checkButton.addEventListener("click", function () {
        if (number1.value > number2.value) {
            console.info("number1: ".concat(number1.value, " is greater than number2: ").concat(number2.value));
        }
        else if (number1.value === number2.value) {
            console.info("number1: ".concat(number1.value, " is same as number2: ").concat(number2.value));
        }
        else {
            console.info("number1: ".concat(number1.value, " is less than number2: ").concat(number2.value));
        }
    });
    document.body.appendChild(number1);
    document.body.appendChild(number2);
    document.body.appendChild(checkButton);
});
//////////////////////
// Switch Case
//////////////////////
var grade = "A";
switch (grade) {
    case "A": {
        console.log("Excellent");
        break;
    }
    case "B": {
        console.log("Good");
        break;
    }
    case "C": {
        console.log("Fair");
        break;
    }
    case "D": {
        console.log("Poor");
        break;
    }
    default: {
        console.log("Invalid choice");
        break;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var gradeInput = document.createElement("input");
    var heading = document.createElement("h1");
    heading.textContent = "Switch Case";
    var checkGradeButton = document.createElement("button");
    checkGradeButton.innerText = "Check grade";
    var para = document.createElement("p");
    checkGradeButton.addEventListener("click", function () {
        switch (gradeInput.value) {
            case "A": {
                para.textContent = "Excellent";
                break;
            }
            case "B": {
                para.textContent = "Good";
                break;
            }
            case "C": {
                para.textContent = "Fair";
                break;
            }
            case "D": {
                para.textContent = "Poor";
                break;
            }
            default: {
                para.textContent = "Invalid choice";
                break;
            }
        }
    });
    document.body.appendChild(heading);
    document.body.appendChild(gradeInput);
    document.body.appendChild(checkGradeButton);
    document.body.appendChild(para);
});
