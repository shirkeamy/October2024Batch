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

