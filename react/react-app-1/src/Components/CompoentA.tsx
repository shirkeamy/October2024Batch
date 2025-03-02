import React from "react";
import CompoentB from "./CompoentB";
interface ICompoentAProps {
    name: string;
    address: string;
}
const CompoentA: React.FC<ICompoentAProps> = (props: ICompoentAProps) => {

    const {address, name}: ICompoentAProps = props;

    return (
        <>
            <h1>Component A</h1>
            <CompoentB name={name} address={address} />
        </>
    )
}

export default CompoentA;
