import React, { useEffect, useState } from "react";
import { GetStates, IState } from "../../Services/StateServices";

const State: React.FC = () => {

    const [stateData, setStateData] = useState<IState[]>([]);

    useEffect(() => {
        const fetchStates = async () => {
            const data: IState[] = await GetStates(null);
            setStateData(data);
        }

        fetchStates();

    }, []);

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr key={"state-heading"}>
                                <th>State Id</th>
                                <th>State Name</th>
                                <th>Country Id</th>
                                <th>Country Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stateData.map((state: IState, index: number) => (
                                    <tr key={`state-data-${index}`}>
                                        <td>{state.stateId}</td>
                                        <td>{state.stateName}</td>
                                        <td>{state.countryId}</td>
                                        <td>{state.countryName}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm m-1"
                                            >Edit</button>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm m-1"
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default State;