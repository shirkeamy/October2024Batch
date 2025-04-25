import React, { useEffect, useState } from "react";
import CountryEditView from "./CountryEdit.view";
import Swal from "sweetalert2";
import { SaveUpdateCountry, GetCountries } from "../../../Services/CountryServices";
import { ICountry } from "../../../Utils/Interfaces";

interface ICountryEditLogicProps {
    countryId: number;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountryEditLogic: React.FC<ICountryEditLogicProps> = (props: ICountryEditLogicProps) => {

    const { countryId, setIsSaved }: ICountryEditLogicProps = props;

    const editEmptyData: ICountry = {
        countryId: 0,
        countryName: ""
    }

    const [countryEditData, setCountryEditData] = useState<ICountry>(editEmptyData);

    const postCountry = async () => {
        await SaveUpdateCountry(countryEditData).then((data) => {
            if (data) {
                if (countryEditData.countryId > 0) {
                    // alert("Country updated successfully.");
                    Swal.fire({
                        title: "Updated!",
                        text: "Country updated successfully.",
                        icon: "success"
                    });
                }
                else {
                    // alert("Country saved successfully.");
                    Swal.fire({
                        title: "Saved!",
                        text: "Country saved successfully.",
                        icon: "success"
                    });
                }
                setCountryEditData(editEmptyData);
                setIsSaved(true);
                setCountryEditData(editEmptyData);
            }
        })
    }

    useEffect(() => {
        if (countryId > 0) {

            const fetchCountries = async () => {
                const data: ICountry[] = await GetCountries(countryId);
                setCountryEditData(data[0]);
            }

            fetchCountries();
        }
    }, [countryId])


    return (
        <>
            <CountryEditView
                countryEditData={countryEditData}
                setCountryEditData={ setCountryEditData }
                postCountry={postCountry}
            />
        </>
    )
}
export default CountryEditLogic;