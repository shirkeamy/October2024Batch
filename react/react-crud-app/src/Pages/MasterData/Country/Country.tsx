import React, { useEffect, useState } from "react";
import { GetCountries, ICountry } from "../../../Services/CountryServices";
import CountryEdit from "./CountryEdit";

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
                                                className="btn btn-sm btn-primary"
                                                type="button"
                                                onClick={()=>{setCountryId(country.countryId)}}
                                            >Edit</button></td>
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