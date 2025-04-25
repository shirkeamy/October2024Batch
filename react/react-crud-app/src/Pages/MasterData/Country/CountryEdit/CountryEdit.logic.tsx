import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { SaveUpdateCountry, GetCountries } from "../../../../Services/CountryServices";
import { ICountry } from "../../../../Utils/Interfaces";
import CountryEditView from "./CountryEdit.view";

interface ICountryEditLogicProps {
    countryId: number;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}


const CountryEditLogic: React.FC<ICountryEditLogicProps> = (props: ICountryEditLogicProps) => {

    const { countryId, setIsSaved }: ICountryEditLogicProps = props;

    console.log("countryId", countryId)
    const editEmptyData: ICountry = {
        countryId: 0,
        countryName: ""
    }

    const [countryEditData, setCountryEditData] = useState<ICountry>(editEmptyData);

    const postCountry = async () => {
        await SaveUpdateCountry(countryEditData)
            .then(() => {
                setCountryEditData(editEmptyData);
                setIsSaved(true);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Contry Added successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
            });
    }

    useEffect(() => {
        if (countryId > 0) {
            const fetchCountries = async () => {
                const data = await GetCountries(countryId);
                setCountryEditData(data[0]);
            }
            fetchCountries();
        }
    }, [countryId])

    return (
        <>
            <CountryEditView
                countryEditData={countryEditData}
                setIsSaved={setIsSaved}
                setCountryEditData={setCountryEditData}
                postCountry={postCountry}
            />
        </>
    )
}

export default CountryEditLogic;