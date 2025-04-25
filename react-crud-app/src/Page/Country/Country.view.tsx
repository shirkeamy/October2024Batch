import React, { useEffect, useState } from "react";
import { DeleteCountry, GetCountries } from "../../Services/CountryServices";
import CountryEditView from "./CountryEdit/CountryEdit.view";
import Swal from "sweetalert2";
import { ICountry } from "../../Utils/Interfaces";
import CountryEditLogic from "./CountryEdit/CountryEdit.logic";

interface ICountryViewProps {
    countryId: number;
    countryData: ICountry[];
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
    setCountryId: React.Dispatch<React.SetStateAction<number>>;
    deleteCountry: (countryId: number) => void;
}

const CountryView: React.FC<ICountryViewProps> = (props: ICountryViewProps) => {

    const { countryId, setIsSaved, countryData, setCountryId, deleteCountry }: ICountryViewProps = props;

    return (
        <>
            <h1>Country</h1>

            <div className="row">
                <div className="col-12">
                    <CountryEditLogic countryId={countryId} setIsSaved={setIsSaved} />
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

export default CountryView;