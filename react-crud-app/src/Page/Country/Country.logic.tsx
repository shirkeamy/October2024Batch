import React, { useEffect, useState } from "react";
import CountryView from "./Country.view";
import { ICountry } from "../../Utils/Interfaces";
import { DeleteCountry, GetCountries } from "../../Services/CountryServices";
import Swal from "sweetalert2";

const CountryLogic: React.FC = () => {

    const [countryData, setCountryData] = useState<ICountry[]>([]);
    const [countryId, setCountryId] = useState<number>(0);
    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        const fetchCountries = async () => {
            const data: ICountry[] = await GetCountries(null);
            setCountryData(data);
            setIsSaved(false);
        }

        fetchCountries();
    }, [isSaved])

    const deleteCountry = async (countyId: number) => {
        Swal.fire({
            title: "Are you realy want to delete this country?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await DeleteCountry(countyId).then((data) => {
                    if (data) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your country is deleted.",
                            icon: "success"
                        });
                        setIsSaved(true);
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
                setIsSaved={ setIsSaved}
                setCountryId={ setCountryId }
                deleteCountry={ deleteCountry }
            />
        </>
    )
}

export default CountryLogic;