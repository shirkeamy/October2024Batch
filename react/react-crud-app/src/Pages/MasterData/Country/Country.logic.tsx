import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GetCountries, DeleteCountry } from "../../../Services/CountryServices";
import { ICountry } from "../../../Utils/Interfaces";
import CountryView from "./Country.view";

const CountryLogic: React.FC = () => {

    const [countryData, setCountryData] = useState<ICountry[]>([]);
    const [countryId, setCountryId] = useState<number>(0);
    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await GetCountries(null);
            setCountryData(data);
            setIsSaved(false);
        }
        fetchCountries();
    }, [isSaved])

    const onDeleteClick = async (countryId: number) => {
        Swal.fire({
            title: "Are you sure you want to delete this country?",
            text: "This will delete your all dependant data as well",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await DeleteCountry(countryId).then((data) => {
                    if (data) {
                        setIsSaved(true);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Contry deleted successfully!",
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
            <CountryView
                countryId={countryId}
                countryData={countryData}
                setIsSaved={ setIsSaved }
                setCountryId={ setCountryId }
                onDeleteClick={ onDeleteClick }
            />
        </>
    )
}

export default CountryLogic;