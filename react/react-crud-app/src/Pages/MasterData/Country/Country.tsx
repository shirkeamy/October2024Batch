import React, { useEffect, useState } from "react";
import { GetCountries, ICountry } from "../../../Services/CountryServices";
import CountryEdit from "./CountryEdit";

const Country: React.FC = () => {

    const [countryData, setCountryData] = useState<ICountry[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await GetCountries(null);
            setCountryData(data);
        }
        fetchCountries();
    }, [])

    console.log("countryData", countryData);

    return (
        <>
            <CountryEdit />
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
                                        <td><button className="btn btn-sm btn-primary" type="button">Edit</button></td>
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