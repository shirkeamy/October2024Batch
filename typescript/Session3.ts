interface UserInfo {
    FirstName: string;
    LastName: string;
    MidName: string;
    DOB: Date;
    Telephone: number;
    Gender: string;
    CavVote: boolean;
}

const users: UserInfo = {
    FirstName: "JOhn",
    LastName: "Doe",
    MidName: "Dan",
    DOB: new Date('1993/01/01'),
    Telephone: 12354213,
    Gender: "Male",
    CavVote: true
}

document.addEventListener("DOMContentLoaded", ()=>{

    let heading = document.createElement("h3");
    heading.textContent = JSON.stringify(users);
    document.body.appendChild(heading);

})


///////////////////////////////////////////////////

enum OperationTypes {
    Insert = "I",
    Update = "U",
    Delete = "D"
}

const operation: string = "U";

if (operation === OperationTypes.Insert) {
    console.log('Operation insert')
}
if (operation === OperationTypes.Update) {
    console.log('Operation update')
}
if (operation === OperationTypes.Delete) {
    console.log('Operation delete')
}

///////////////////////////////////////
// Array
//////////////////////////////////////

const userNames: string [] = ['John', 'Hope', 'Ben', 'Peter', 'Robert'];

console.log(userNames);
console.log(`first user from userNames array: `, userNames[0]);


