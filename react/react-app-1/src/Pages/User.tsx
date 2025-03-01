import React from 'react';

interface IUserProps {
    userName: string;
}

const User: React.FC<IUserProps> = (props: IUserProps) => {

    const { userName }: IUserProps = props;

    return (
        <>
            <h1>User Page, {userName}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nostrum eveniet necessitatibus perspiciatis quisquam debitis culpa similique praesentium consequatur officia nesciunt hic iusto laboriosam excepturi, voluptates et rerum molestias pariatur.
            </p>
        </>
    )
}

export default User;