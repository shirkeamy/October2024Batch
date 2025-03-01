import React from "react";
import ComponentA from "./Components/ComponentA";

interface IUserProps {
    userName: string;
}

const User: React.FC<IUserProps> = (props: IUserProps) => {

    const { userName }: IUserProps = props;

    return (
        <>
            <h1>User page</h1>
            <h3>Welcome, {userName}</h3>
            <p>
                below is the Component A
            </p>
            <ComponentA userName={userName} />
        </>
    )
}

export default User;