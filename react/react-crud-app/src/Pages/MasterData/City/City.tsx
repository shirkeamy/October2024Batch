import React, { useEffect } from "react";
import { DeleteCity, getCities } from "../../../Services/CityServices";
import CityEdit from "./CityEdit";
import Swal from "sweetalert2";
import { ICity } from "../../../Utils/Interfaces";

const City: React.FC = () => {

    const [cityData, setCityData] = React.useState<ICity[]>([]);
    const [cityId, setCityId] = React.useState<number>(0);
    const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

    useEffect(() => {
        const fetchCities = async () => {
            const data: ICity[] = await getCities(null);
            setCityData(data);
            setIsSuccess(false);
        }
        fetchCities();
    }, [isSuccess]);

    const onDeleteClick = async (cityId: number) => {
        Swal.fire({
            title: "Are you sure you want to delete this city?",
            text: "This will delete your all dependant data as well",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await DeleteCity(cityId).then((data) => {
                    if (data) {
                        setIsSuccess(true);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "City deleted successfully!",
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
            <CityEdit cityId={cityId} setIsSuccess={setIsSuccess} />

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
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-primary m-1"
                                                    type="button"
                                                    onClick={() => { setCityId(city.cityId) }}
                                                >Edit</button>
                                                <button
                                                    className="btn btn-sm btn-danger m-1"
                                                    type="button"
                                                    onClick={() => { onDeleteClick(city.cityId) }}
                                                >Delete</button>
                                            </td>
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