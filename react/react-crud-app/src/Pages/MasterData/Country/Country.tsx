import React, { useEffect, useState } from "react";
import { DeleteCountry, GetCountries, ICountry } from "../../../Services/CountryServices";
import CountryEdit from "./CountryEdit";
import Swal from "sweetalert2";

const Country: React.FC = () => {

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
        // if (window.confirm("Are you sure you want to delete this country?") === true) {
        //     await DeleteCountry(countryId).then((data) => {
        //         if (data) {
        //             setIsSaved(true);
        //         }
        //     })
        // }

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
            <CountryEdit countryId={countryId} setIsSaved={setIsSaved} />
            <hr />
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr key={`country-header`}>
                                <th>Country Id</th>
                                <th>Country Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // countryData.map((country: ICountry) => {
                                //     return (
                                //         <tr>
                                //             <td></td>
                                //             <td></td>
                                //             <td></td>
                                //         </tr>
                                //     )
                                // })

                                countryData.map((country: ICountry, index: number) => (
                                    <tr key={`country-data-${index}`}>
                                        <td>{country.countryId}</td>
                                        <td>{country.countryName}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-primary m-1"
                                                type="button"
                                                onClick={() => { setCountryId(country.countryId) }}
                                            >Edit</button>

                                            <button
                                                className="btn btn-sm btn-danger m-1"
                                                type="button"
                                                onClick={() => { onDeleteClick(country.countryId) }}
                                            >delete</button>
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

export default Country;