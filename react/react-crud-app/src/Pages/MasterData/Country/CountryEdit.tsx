import React, { useState } from "react";
import { ICountry, SaveUpdateCountry } from "../../../Services/CountryServices";

const CountryEdit: React.FC = () => {

    const editEmptyData: ICountry = {
        countryId: 0,
        countryName: ""
    }

    const [countryEditData, setCountryEditData] = useState<ICountry>(editEmptyData);

    const postCountry = async () => {
        await SaveUpdateCountry(countryEditData);
    }
    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Country Form</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="txtCountryId">Country ID</label>
                                    <input type="text" 
                                        id="txtCountryId"
                                        className="form-control"
                                        disabled
                                        value={countryEditData.countryId}
                                        />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="txtCountryName">Country Name</label>
                                    <input type="text"
                                        id="txtCountryName"
                                        className="form-control"
                                        value={countryEditData.countryName}
                                        onChange={(e)=>{
                                            let value = e.target.value;
                                            // let {value} = e.target;
                                            setCountryEditData((rest)=>(
                                                {
                                                    ...rest,
                                                    countryName: value
                                                }
                                            ))
                                        }}
                                        />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-center">
                                        <button type="button"
                                            className="btn btn-primary"
                                            onClick={postCountry}
                                        >Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CountryEdit;