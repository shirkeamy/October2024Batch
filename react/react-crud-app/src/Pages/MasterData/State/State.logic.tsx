import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GetStates, DeleteState } from "../../../Services/StateServices";
import { IState } from "../../../Utils/Interfaces";
import StateView from "./State.view";

const StateLogic: React.FC = () => {

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
            <StateView
                stateId={stateId}
                stateData={stateData}
                setIsSaved={setIsSaved}
                setStateId={setStateId}
                onDeleteClick={onDeleteClick}
            />
        </>
    )
}

export default StateLogic;