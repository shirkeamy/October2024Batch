function addition(num1: number, num2: number) {
    return num1 + num2;
}

const res: number = addition(10, 20);
console.log(res);

const division = function (num1: number, num2: number) {

    return num1 / num2;

}

console.log(`Division of ${10} and ${5} is ${division(10, 5)}`)

// const fnName = () => {}

const multiplication = (num1: number, num2: number) => {
    return num1 * num2;
}

console.log(`multiplication of ${10} and ${5} is ${multiplication(10, 5)}`);

const subtraction: (num1: number, num2: number) => number
    = (num1: number, num2: number) => {
        return num1 - num2;
    }

console.log(`subtraction of ${10} and ${5} is ${subtraction(10, 5)}`);


document.addEventListener("DOMContentLoaded", ()=>{

    let num1 = document.createElement("input")
    let num2 = document.createElement("input")

    let addButton = document.createElement("button")
    addButton.textContent = "Addition"
    let subButton = document.createElement("button")
    subButton.textContent = "Subtraction"
    let MultButton = document.createElement("button")
    MultButton.textContent = "Multiplication"
    let divButton = document.createElement("button")
    divButton.textContent = "Division"

    let div = document.createElement("div");

    addButton.addEventListener("click",()=>{
        let result: number = addition(parseInt(num1.value), parseInt(num2.value))
        div.textContent = result.toString();
    })

    subButton.addEventListener("click",()=>{
        let result: number = subtraction(parseInt(num1.value), parseInt(num2.value))
        div.textContent = result.toString();
    })

    document.body.appendChild(num1)
    document.body.appendChild(num2)
    document.body.appendChild(addButton)
    document.body.appendChild(subButton)
    document.body.appendChild(div)

});
