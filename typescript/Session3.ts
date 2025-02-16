//////////////////
// Interface
// collection of multiple props
// props can multiple datatypes
// interface keyword is used to created interface
// interface name can start with capital I
//////////////////

interface IUserInfo {
    FirstName: string;
    MidName: string;
    LastName: string;
    DOB: Date;
    Telephone: number;
    CanVote: boolean;
    Gender: string;
}

let EmployeeDetails: IUserInfo = {
    FirstName: "John",
    MidName: "Dan",
    LastName: "Doe",
    DOB: new Date(),
    Telephone: 45132164,
    CanVote: false,
    Gender: "Male"
}

console.log(EmployeeDetails);

const secondVar: IUserInfo = {
    FirstName: "Peter",
    MidName: "Eng",
    LastName: "Sam",
    DOB: new Date('1990/01/01'),
    Telephone: 5121021,
    CanVote: true,
    Gender: "Male"
}

console.log(secondVar);
console.warn(secondVar.FirstName);
console.error(secondVar.LastName);

//////
//Enum
/////

enum OperationType {
    Insert = 1, // default value is 0
    Update,
    Delete
}

enum OperationTypes {
    Insert = "I",
    Update = "U",
    Delete = "D"
}

const operation: string = "D";
if(operation === OperationTypes.Insert) {
    console.log("Insert operation")
}
else if(operation === OperationTypes.Update) {
    console.log("Update operation")
}
if(operation === OperationTypes.Delete) {
    console.log("Delete operation")
}
