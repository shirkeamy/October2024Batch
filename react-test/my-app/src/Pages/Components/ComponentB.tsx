import React, { useContext } from "react";
import { data, data1 } from "../Hooks/useContextHook";

const ComponentB: React.FC = () => {
    const name = useContext(data);
    const address = useContext(data1);

    return (
        <>
            <h2>This is compoenet B</h2>
            <p>
                Welcome to compoent B user, {name} and your address is, {address}.
            </p>
        </>
    )
}

export default ComponentB;