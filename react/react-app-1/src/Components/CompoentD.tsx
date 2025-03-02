import React from "react";
import { data, data1 } from "../App";

interface ICompoentDProps {
    name: string;
    address: string;
}

const CompoentD: React.FC<ICompoentDProps> = (props: ICompoentDProps) => {
    const { address, name }: ICompoentDProps = props;
    return (
        <>
            <h1>Component D</h1>
            <p>
                Name: {name}
                <br />
                Address: {address}
            </p>

            <p>
                <data.Consumer>
                    {
                        (name) => {
                            return (
                                <data1.Consumer>
                                    {
                                        (addre) => (
                                            <>
                                                <h3>Name from context API - {name}</h3>
                                                <h3>Address from context API - {addre}</h3>
                                            </>
                                        )
                                    }
                                </data1.Consumer>
                            )
                        }
                    }
                </data.Consumer>
            </p>

        </>
    )
}

export default CompoentD;
