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
var users = {
    FirstName: "JOhn",
    LastName: "Doe",
    MidName: "Dan",
    DOB: new Date('1993/01/01'),
    Telephone: 12354213,
    Gender: "Male",
    CavVote: true
};
document.addEventListener("DOMContentLoaded", function () {
    var heading = document.createElement("h3");
    heading.textContent = JSON.stringify(users);
    document.body.appendChild(heading);
});
///////////////////////////////////////////////////
var OperationTypes;
(function (OperationTypes) {
    OperationTypes["Insert"] = "I";
    OperationTypes["Update"] = "U";
    OperationTypes["Delete"] = "D";
})(OperationTypes || (OperationTypes = {}));
var operation = "U";
if (operation === OperationTypes.Insert) {
    console.log('Operation insert');
}
if (operation === OperationTypes.Update) {
    console.log('Operation update');
}
if (operation === OperationTypes.Delete) {
    console.log('Operation delete');
}
///////////////////////////////////////
// Array
//////////////////////////////////////
var userNames = ['John', 'Hope', 'Ben', 'Peter', 'Robert'];
console.log(userNames);
console.log("first user from userNames array: ", userNames[0]);
