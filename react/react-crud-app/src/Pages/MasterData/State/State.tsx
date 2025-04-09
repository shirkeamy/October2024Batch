import React, { useEffect } from "react";
import { GetStates, IState } from "../../../Services/StateServices";

const State: React.FC = () => {

    const [stateData, setStateData] = React.useState<IState[]>([]);

    useEffect(() => {
        const fetchStates = async () => {
            const data: IState[] = await GetStates(null);
            setStateData(data);
        }

        fetchStates();
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr key={`state-header`}>
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
                                                className="btn btn-sm btn-primary m-1"
                                                type="button"
                                            >Edit</button>

                                            <button
                                                className="btn btn-sm btn-danger m-1"
                                                type="button"
                                            >delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div >

        </>
    )

}

export default State;