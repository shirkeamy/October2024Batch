import React, { useEffect, useState } from "react";
import { DeleteCountry, GetCountries } from "../../../Services/CountryServices";
import Swal from "sweetalert2";
import { ICountry } from "../../../Utils/Interfaces";
import CountryEditLogic from "./CountryEdit/CountryEdit.logic";

interface ICountryViewProps {
    countryId: number;
    countryData: ICountry[];
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
    setCountryId: React.Dispatch<React.SetStateAction<number>>
    onDeleteClick: (countryId: number) => Promise<void>;
}

const CountryView: React.FC<ICountryViewProps> = (props: ICountryViewProps) => {

    const { countryData, countryId, onDeleteClick, setCountryId, setIsSaved }: ICountryViewProps = props;

    return (
        <>
            <CountryEditLogic
                countryId={ countryId }
                setIsSaved={ setIsSaved }
            />
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

export default CountryView;