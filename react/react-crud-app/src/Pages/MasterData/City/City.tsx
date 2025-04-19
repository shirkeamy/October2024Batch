import React, { useEffect } from "react";
import { getCities, ICity } from "../../../Services/CityServices";
import CityEdit from "./CityEdit";

const City: React.FC = () => {

    const [cityData, setCityData] = React.useState<ICity[]>([]);

    useEffect(() => {
        const fetchCities = async () => {
            const data: ICity[] = await getCities(null);
            setCityData(data);
        }
        fetchCities();
    }, []);

    return (
        <>
            <CityEdit />

            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>City Id</th>
                                <th>City Name</th>
                                <th>State Id</th>
                                <th>State Name</th>
                                <th>Country Id</th>
                                <th>Country Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cityData.map((city: ICity, index: number) => {
                                    return (
                                        <tr key={index}>
                                            <td>{city.cityId}</td>
                                            <td>{city.cityName}</td>
                                            <td>{city.stateId}</td>
                                            <td>{city.stateName}</td>
                                            <td>{city.countryId}</td>
                                            <td>{city.countryName}</td>
                                            <td></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default City;