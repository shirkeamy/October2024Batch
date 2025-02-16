//////////////////
// Interface
// collection of multiple props
// props can multiple datatypes
// interface keyword is used to created interface
// interface name can start with capital I
//////////////////
var EmployeeDetails = {
    FirstName: "John",
    MidName: "Dan",
    LastName: "Doe",
    DOB: new Date(),
    Telephone: 45132164,
    CanVote: false,
    Gender: "Male"
};
console.log(EmployeeDetails);
var secondVar = {
    FirstName: "Peter",
    MidName: "Eng",
    LastName: "Sam",
    DOB: new Date('1990/01/01'),
    Telephone: 5121021,
    CanVote: true,
    Gender: "Male"
};
console.log(secondVar);
console.warn(secondVar.FirstName);
console.error(secondVar.LastName);
//////
//Enum
/////
var OperationType;
(function (OperationType) {
    OperationType[OperationType["Insert"] = 1] = "Insert";
    OperationType[OperationType["Update"] = 2] = "Update";
    OperationType[OperationType["Delete"] = 3] = "Delete";
})(OperationType || (OperationType = {}));
var OperationTypes;
(function (OperationTypes) {
    OperationTypes["Insert"] = "I";
    OperationTypes["Update"] = "U";
    OperationTypes["Delete"] = "D";
})(OperationTypes || (OperationTypes = {}));
var operation = "D";
if (operation === OperationTypes.Insert) {
    console.log("Insert operation");
}
else if (operation === OperationTypes.Update) {
    console.log("Update operation");
}
if (operation === OperationTypes.Delete) {
    console.log("Delete operation");
}
//////
// Array 
// more than one value can store in array (same data type)
//////
var arr1 = ["string1", "string2", "string3"];
console.log(arr1[1]);
var numbers = [1, 2, 3, 4, 5, 6, 7];
console.log('type 1: number from index 0 is: ', numbers[0]);
console.log('type 2: number from index 0 is: ' + numbers[1]);
console.log("type 3: number from index 0 is: ".concat(numbers[2]));
var userList = [
    {
        FirstName: "John",
        MidName: "",
        LastName: "Hope",
        DOB: new Date(),
        Telephone: 45132,
        CanVote: true,
        Gender: "Male"
    },
    {
        FirstName: "Perter",
        MidName: "",
        LastName: "Parker",
        DOB: new Date('1990/01/01'),
        Telephone: 8495465,
        CanVote: true,
        Gender: "Male"
    }
];
console.log("userList: ", userList);
document.addEventListener("DOMContentLoaded", function () {
    var divElement = document.createElement("div");
    divElement.textContent = JSON.stringify(userList);
    document.body.appendChild(divElement);
});
