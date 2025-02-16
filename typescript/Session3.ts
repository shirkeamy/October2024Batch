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
