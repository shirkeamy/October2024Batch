import React, { useEffect } from "react";
import { DeleteCity, getCities } from "../../../Services/CityServices";
import CityEdit from "./CityEdit/CityEdit.view";
import Swal from "sweetalert2";
import { ICity } from "../../../Utils/Interfaces";
import CityEditLogic from "./CityEdit/CityEdit.logic";

interface ICityViewProps {
    cityId: number;
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    setCityId: React.Dispatch<React.SetStateAction<number>>;
    cityData: ICity[];
    onDeleteClick: (cityId: number) => Promise<void>;
}

const CityView: React.FC<ICityViewProps> = (props: ICityViewProps) => {

    const { cityData, cityId, onDeleteClick, setCityId, setIsSuccess }: ICityViewProps = props;

    return (
        <>
            <CityEditLogic
                cityId={cityId}
                setIsSuccess={ setIsSuccess }
            />

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

export default CityView;