let number1: number = 12;
let number2: number = 12;

if (number1 > number2) {
    console.log("number1 is greater than number2")
} else if (number1 === number2) {
    console.log("number1 is eqal number2")
} else {
    console.log("number1 is less than number2")
}

document.addEventListener("DOMContentLoaded", () => {

    let number1 = document.createElement("input")
    let number2 = document.createElement("input")
    let checkButton = document.createElement("button")
    checkButton.innerText = "Check values";
    checkButton.addEventListener("click", () => {
        if (number1.value > number2.value) {
            console.log("number1 is greater than number2")
        } else if (number1.value === number2.value) {
            console.log("number1 is eqal number2")
        } else {
            console.log("number1 is less than number2")
        }
    })

    document.body.appendChild(number1)
    document.body.appendChild(number2)
    document.body.appendChild(checkButton)

});

///////////////
// Switch case
///////////////

document.addEventListener("DOMContentLoaded", () => {

    let heading = document.createElement("h1")
    heading.textContent = "Switch Case"
    let textBox = document.createElement("input")
    let para = document.createElement("p")
    let checkButton = document.createElement("button")
    checkButton.innerText = "Check grade";
    checkButton.addEventListener("click", () => {
        switch (textBox.value) {
            case "A":
                para.textContent = "Excellent"
                break;
            case "B":
                para.textContent = "Good"
                break;
            case "C":
                para.textContent = "Fair"
                break;
            default:
                para.textContent = "Invalid Choise!"
                break;
        }
    })

    document.body.appendChild(heading)
    document.body.appendChild(textBox)
    document.body.appendChild(checkButton)
    document.body.appendChild(para)

});

