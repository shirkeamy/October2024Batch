import React, { useEffect, useState } from "react";
import { GetCountries, SaveUpdateCountry } from "../../../Services/CountryServices";
import Swal from "sweetalert2";
import { ICountry } from "../../../Utils/Interfaces";

interface ICountryProps {
    countryEditData: ICountry;
    setCountryEditData: React.Dispatch<React.SetStateAction<ICountry>>;
    postCountry: () => void;
}

const CountryEditView: React.FC<ICountryProps> = (props: ICountryProps) => {

    const { countryEditData, setCountryEditData, postCountry }: ICountryProps = props;
    
    return (
        <>
            <div className="row text-center">
                <div className="col-12">
                    <h2>Country Form</h2>
                </div>
                <hr className="border border-primary" />
            </div>
            <div className="row mb-5">
                <div className="col-12">
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="txtCountryId">Country Id</label>
                                    <input
                                        type="text"
                                        id="txtCountryId"
                                        className="form-control"
                                        disabled
                                        value={countryEditData.countryId}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="txtCountryName">Country Name</label>
                                    <input
                                        type="text"
                                        id="txtCountryName"
                                        className="form-control"
                                        value={countryEditData.countryName}
                                        onChange={(e) => {
                                            // const value = e.target.value;
                                            const { value } = e.target;
                                            setCountryEditData((rest) => ({
                                                ...rest,
                                                countryName: value
                                            }))
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <input
                                        type="button"
                                        id="btnSave"
                                        className="btn btn-primary"
                                        value={"Save"}
                                        onClick={postCountry}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CountryEditView;