import React from "react";
import { ICountry } from "../../../../Utils/Interfaces";

interface ICountryEditProps {
    countryEditData: ICountry;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
    setCountryEditData: React.Dispatch<React.SetStateAction<ICountry>>;
    postCountry: () => Promise<void>;
}

const CountryEditView: React.FC<ICountryEditProps> = (props: ICountryEditProps) => {

    const { countryEditData, setCountryEditData, postCountry }: ICountryEditProps = props;

    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Country Form</h2>
                </div>
            </div>
            <div className="row m-5 pb-5">
                <div className="col-4"></div>
                <div className="col-4">
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
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            // let {value} = e.target;
                                            setCountryEditData((rest) => (
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

                        <div className="row text-center">
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

export default CountryEditView;