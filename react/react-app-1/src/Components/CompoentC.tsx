import React from "react";
import CompoentD from "./CompoentD";

interface ICompoentCProps {
    name: string;
    address: string;
}

const CompoentC: React.FC<ICompoentCProps> = (props:ICompoentCProps) => {
    const {address, name}: ICompoentCProps = props;
    return (
        <>
            <h1>Component C</h1>
            <CompoentD name={name} address={address}  />
        </>
    )
}

export default CompoentC;
