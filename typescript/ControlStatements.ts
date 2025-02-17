let number1: number = 10;
let number2: number = 5;

if(number1 > number2){
    console.log("number1 is greater than number2");
}
else if (number1 === number2){
    console.log("number1 and number2 are equal");
}else {
    console.log("number2 is greater than number2");

}

document.addEventListener("DOMContentLoaded", () => {
    let number1 = document.createElement("input");
    let number2 = document.createElement("input");
    let checkButton = document.createElement("button")
    checkButton.innerText = "Check";
    checkButton.addEventListener("click", () => {
        if (number1.value > number2.value) {
            console.info(`number1: ${number1.value} is greater than number2: ${number2.value}`)
        }
        else if (number1.value === number2.value) {
            console.info(`number1: ${number1.value} is same as number2: ${number2.value}`)
        } else {
            console.info(`number1: ${number1.value} is less than number2: ${number2.value}`)
        }
    });
    document.body.appendChild(number1)
    document.body.appendChild(number2)
    document.body.appendChild(checkButton);
})
