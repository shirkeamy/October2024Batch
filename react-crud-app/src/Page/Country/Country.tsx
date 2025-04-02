import React, { useEffect, useState } from "react";
import { GetCountries, ICountry } from "../../Services/CountryServices";

const Country: React.FC = () => {

    const [countryData, setCountryData] = useState<ICountry[]>([])

    useEffect(()=>{
        const fetchCountries = async () => {
            const data: ICountry[] = await GetCountries(null);
            setCountryData(data);
        }

        fetchCountries();
    },[])

    return (
        <>
            <h1>Country</h1>

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
                                countryData.map((country: ICountry, index: number)=>(
                                    <tr key={`country-data-${index}`}>
                                        <td>{country.countryId}</td>
                                        <td>{country.countryName}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-sm">Edit</button>
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