import React from "react";

interface ICompoentDProps {
    name: string;
    address: string;
}

const CompoentD: React.FC<ICompoentDProps> = (props: ICompoentDProps) => {
    const {address, name}: ICompoentDProps = props;
    return (
        <>
            <h1>Component D</h1>
            <p>
                Name: {name}
                <br />
                Address: {address}
            </p>
        </>
    )
}

export default CompoentD;
