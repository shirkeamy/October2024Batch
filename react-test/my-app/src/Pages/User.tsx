import React from "react";

interface IUserProps {
    userName: string;
}

const User: React.FC<IUserProps> = (props: IUserProps) => {

    const { userName }: IUserProps = props;

    return (
        <>
            <h1>User page</h1>
            <h3>Welcome, {userName}</h3>
        </>
    )
}

export default User;