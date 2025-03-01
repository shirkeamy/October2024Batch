import React from "react";
import ComponentB from "./ComponentB";

interface IComponentAProps {
    userName: string;
}

const ComponentA: React.FC<IComponentAProps> = (props: IComponentAProps) => {
const {userName}:IComponentAProps = props;
    
    return (
        <>
            <h2>This is compoent A</h2>
            <p>
                Below is component B
            </p>
            <ComponentB userName={userName} />
        </>
    )
}

export default ComponentA;