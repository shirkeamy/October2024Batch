import React, { useEffect, useState } from "react";
import { DeleteCountry, GetCountries, ICountry } from "../../Services/CountryServices";
import CountryEdit from "./CountryEdit";
import Swal from "sweetalert2";

const Country: React.FC = () => {

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
        // if (window.confirm("Are you realy want to delete this country?") === true) {
        //     await DeleteCountry(countyId).then((data) => {
        //         if (data) {
        //             setIsSaved(true);
        //         }
        //     })
        // }

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
            <h1>Country</h1>

            <div className="row">
                <div className="col-12">
                    <CountryEdit countryId={countryId} setIsSaved={setIsSaved} />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr key={"country-heading"}>
                                <th>Country Id</th>
                                <th>Country Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                countryData.map((country: ICountry, index: number) => (
                                    <tr key={`country-data-${index}`}>
                                        <td>{country.countryId}</td>
                                        <td>{country.countryName}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm m-1"
                                                onClick={() => { setCountryId(country.countryId) }}
                                            >Edit</button>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm m-1"
                                                onClick={() => { deleteCountry(country.countryId) }}
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

export default Country;