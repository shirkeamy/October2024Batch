import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GetCountries } from "../../../../Services/CountryServices";
import { GetStates, SaveUpdateState } from "../../../../Services/StateServices";
import { IStatePostData, ICountry } from "../../../../Utils/Interfaces";
import StateEditView from "./StateEdit.view";

interface IStateEditLogicProps {
    stateId: number;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateEditLogic: React.FC<IStateEditLogicProps> = (props: IStateEditLogicProps) => {

    const { stateId, setIsSaved }: IStateEditLogicProps = props;

    const editEmptyData: IStatePostData = {
        stateId: 0,
        stateName: "",
        countryId: 0
    }

    const [stateEditData, setStateEditData] = useState<IStatePostData>(editEmptyData);
    const [countryData, setCountryData] = useState<ICountry[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await GetCountries(null);
            setCountryData(data);
        }
        fetchCountries();
    }, [])

    useEffect(() => {
        if (stateId > 0) {
            const fetchStates = async () => {
                const data = await GetStates(stateId);
                setStateEditData(data[0]);
            }

            fetchStates();
        }
    }, [stateId])

    const postState = async () => {
        await SaveUpdateState(stateEditData)
            .then(() => {
                setStateEditData(editEmptyData);
                setIsSaved(true);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "State Added successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
            });
    }

    return (
        <>
            <StateEditView
                stateEditData={stateEditData}
                setStateEditData={setStateEditData}
                countryData={countryData}
                postState={postState}
            />
        </>
    )
}

export default StateEditLogic;