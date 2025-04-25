import React, { useEffect, useState } from "react";
import { GetCountries, ICountry, SaveUpdateCountry } from "../../../Services/CountryServices";
import Swal from "sweetalert2";

interface ICountryEditProps {
    countryId: number;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountryEdit: React.FC<ICountryEditProps> = (props: ICountryEditProps) => {

    const { countryId, setIsSaved }: ICountryEditProps = props;
    console.log("countryId", countryId)
    const editEmptyData: ICountry = {
        countryId: 0,
        countryName: ""
    }

    const [countryEditData, setCountryEditData] = useState<ICountry>(editEmptyData);

    const postCountry = async () => {
        await SaveUpdateCountry(countryEditData)
            .then(() => {
                setCountryEditData(editEmptyData);
                setIsSaved(true);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Contry Added successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
            });
    }

    useEffect(() => {
        if (countryId > 0) {
            const fetchCountries = async () => {
                const data = await GetCountries(countryId);
                setCountryEditData(data[0]);
            }
            fetchCountries();
        }
    }, [countryId])

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

export default CountryEdit;