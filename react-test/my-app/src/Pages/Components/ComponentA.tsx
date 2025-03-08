import React from "react";
import ComponentB from "./ComponentB";

const ComponentA: React.FC = () => {
    
    return (
        <>
            <h2>This is compoent A</h2>
            <p>
                Below is component B
            </p>
            <ComponentB />
        </>
    )
}

export default ComponentA;