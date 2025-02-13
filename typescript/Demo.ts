

const numberVar: number = 20;
console.log(numberVar);

const a: string = "Hello World";
console.log(a);

document.addEventListener("DOMContentLoaded", () => {

    let heading = document.createElement("h2");

    heading.textContent = a;

    document.body.appendChild(heading);

})