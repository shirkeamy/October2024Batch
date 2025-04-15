import React, { useEffect, useState } from "react";
import { DeleteState, GetStates, IState } from "../../Services/StateServices";
import StateEdit from "./StateEdit";
import Swal from "sweetalert2";

const State: React.FC = () => {

    const [stateData, setStateData] = useState<IState[]>([]);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [stateId, setStateId] = useState<number>(0);

    useEffect(() => {
        const fetchStates = async () => {
            const data: IState[] = await GetStates(null);
            setStateData(data);
            setIsSuccess(false);
        }

        fetchStates();

    }, [isSuccess]);

    const deleteState = async (stateId: number) => {
            Swal.fire({
                title: "Are you realy want to delete this State?",
                text: "You won't be able to revert this!",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await DeleteState(stateId).then((data) => {
                        if (data) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your state is deleted.",
                                icon: "success"
                            });
                            setIsSuccess(true);
                        }
                    })
                }
            });
    
        }

    return (
        <>
            <StateEdit stateId={stateId} setIsSuccess={setIsSuccess} />
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
                                                onClick={() => { setStateId(state.stateId) }}
                                            >Edit</button>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm m-1"
                                                onClick={() => { deleteState(state.stateId) }}
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