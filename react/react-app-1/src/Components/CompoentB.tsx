import React from "react";
import CompoentC from "./CompoentC";

interface ICompoentBProps {
    name: string;
    address: string;
}


const CompoentB: React.FC<ICompoentBProps> = (props: ICompoentBProps) => {

    const {address, name}: ICompoentBProps = props;
    return (
        <>
            <h1>Component B</h1>
            <CompoentC name={name} address={address} />
        </>
    )
}

export default CompoentB;
