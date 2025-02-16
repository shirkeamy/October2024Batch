// let
// modify value from variable
// no need to add value when declare

// cosnt
// can not modify value from variable
// need to add value when declare

let varName: string;
varName = "Any string";

let Name = true;

// 'const' declarations must be initialized.
const varName1: string = "";
const boolVar: boolean = true;
const marks = true;

let EmployeeDetail: {
    name: string;
    age: number;
    salary: number;
    isActive: boolean;
    dob: Date;
}

EmployeeDetail = {
    name: "John Doe",
    age: 45,
    salary: 15000,
    isActive: true,
    dob: new Date()
}

console.log(EmployeeDetail)
console.log(EmployeeDetail.name)
console.log(EmployeeDetail.dob)

let userInfo: {
    name: string;
    age: number;
    salary: number;
    isActive: boolean;
    dob: Date;
}
