var numberVar = 20;
console.log(numberVar);
document.addEventListener("DOMContentLoaded", function () {
    var a = "Hello World";
    console.log(a);
    var heading = document.createElement("h2");
    heading.textContent = a;
    document.body.appendChild(heading);
});
// End of Demo ts
// let
// modify value from variable
// no need to add value when declare
// cosnt
// can not modify value from variable
// need to add value when declare
var varName;
varName = "Any string";
var Name = true;
// 'const' declarations must be initialized.
var varName1 = "";
var boolVar = true;
var marks = true;
var EmployeeDetail;
EmployeeDetail = {
    name: "John Doe",
    age: 45,
    salary: 15000,
    isActive: true,
    dob: new Date()
};
console.log(EmployeeDetail);
console.log(EmployeeDetail.name);
console.log(EmployeeDetail.dob);
