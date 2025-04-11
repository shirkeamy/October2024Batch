import React, { useEffect, useState } from "react";
import { GetStates, IState } from "../../../Services/StateServices";
import StateEdit from "./StateEdit";

const State: React.FC = () => {

    const [stateData, setStateData] = useState<IState[]>([]);
    const [stateId, setStateId] = useState<number>(0);
    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        const fetchStates = async () => {
            const data: IState[] = await GetStates(null);
            setStateData(data);
            setIsSaved(false);
        }

        fetchStates();
    }, [isSaved])

    return (
        <>
            <StateEdit stateId={stateId} setIsSaved={setIsSaved} />
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
                                                onClick={() => { setStateId(state.stateId) }}
                                            >Edit</button>

                                            <button
                                                className="btn btn-sm btn-danger m-1"
                                                type="button"
                                            >Delete</button>
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