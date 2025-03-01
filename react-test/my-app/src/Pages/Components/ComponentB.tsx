import React from "react";

interface IComponentBProps {
    userName: string;
}

const ComponentB: React.FC<IComponentBProps> = (props: IComponentBProps) => {
    const { userName }: IComponentBProps = props;
    return (
        <>
            <h2>This is compoenet B</h2>
            <p>
                Welcome to compoent B user, {userName}
            </p>
        </>
    )
}

export default ComponentB;