import React, { useEffect, useState } from "react";
import { DeleteState, GetStates, IState } from "../../../Services/StateServices";
import StateEdit from "./StateEdit";
import Swal from "sweetalert2";

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

    const onDeleteClick = async (stateId: number) => {
        Swal.fire({
            title: "Are you sure you want to delete this state?",
            text: "This will delete your all dependant data as well",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await DeleteState(stateId).then((data) => {
                    if (data) {
                        setIsSaved(true);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "State deleted successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
            }
        });
    }

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
                                                onClick={() => { onDeleteClick(state.stateId) }}
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