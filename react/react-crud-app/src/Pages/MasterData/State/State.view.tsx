import React, { useEffect, useState } from "react";
import { DeleteState, GetStates } from "../../../Services/StateServices";
import Swal from "sweetalert2";
import { IState, IStatePostData } from "../../../Utils/Interfaces";
import StateEditView from "./StateEdit/StateEdit.view";
import StateEditLogic from "./StateEdit/StateEdit.logic";

interface IStateProps {
    stateId: number;
    stateData: IState[];
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
    setStateId: React.Dispatch<React.SetStateAction<number>>;
    onDeleteClick: (stateId: number) => Promise<void>;
}

const StateView: React.FC<IStateProps> = (props: IStateProps) => {

    const { stateData, stateId, onDeleteClick, setStateId, setIsSaved }: IStateProps = props;


    return (
        <>

            <StateEditLogic setIsSaved={setIsSaved} stateId={stateId} />

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

export default StateView;