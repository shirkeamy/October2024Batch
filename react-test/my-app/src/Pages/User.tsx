import React from "react";
import ComponentA from "./Components/ComponentA";

interface IUserProps {
    userName: string;
}

const User: React.FC<IUserProps> = (props: IUserProps) => {

    const { userName }: IUserProps = props;
    
    const email: string = localStorage.getItem("EmailId") ?? "";
    const password: string = localStorage.getItem("Password") ?? "";

    return (
        <>
            <h1>User page</h1>
            <h3>Welcome, {userName}</h3>
            <p>
                your email id is {email}
                <br />
                your password is {password}
            </p>
            <p>
                below is the Component A
            </p>
            <ComponentA />
        </>
    )
}

export default User;