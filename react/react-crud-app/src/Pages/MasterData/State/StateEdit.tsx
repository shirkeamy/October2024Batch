import React, { useEffect, useState } from "react";
import { GetStates, IStatePostData, SaveUpdateState } from "../../../Services/StateServices";
import { GetCountries, ICountry } from "../../../Services/CountryServices";
import Swal from "sweetalert2";

interface IStateEditProps {
    stateId: number;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateEdit: React.FC<IStateEditProps> = (props: IStateEditProps) => {

    const { stateId, setIsSaved }: IStateEditProps = props;

    const editEmptyData: IStatePostData = {
        stateId: 0,
        stateName: "",
        countryId: 0
    }

    const [stateEditData, setStateEditData] = useState<IStatePostData>(editEmptyData);
    const [countryData, setCountryData] = useState<ICountry[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await GetCountries(null);
            setCountryData(data);
        }
        fetchCountries();
    }, [])

    useEffect(() => {
        if (stateId > 0) {
            const fetchStates = async () => {
                const data = await GetStates(stateId);
                setStateEditData(data[0]);
            }

            fetchStates();
        }
    }, [stateId])

    const postState = async () => {
        await SaveUpdateState(stateEditData)
            .then(() => {
                setStateEditData(editEmptyData);
                setIsSaved(true);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "State Added successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
            });
    }

    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h2>State Form</h2>
                </div>
            </div>
            <div className="row m-5 pb-5">
                <div className="col-4"></div>
                <div className="col-4">
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="txtStateId">State ID</label>
                                    <input type="text"
                                        id="txtStateId"
                                        className="form-control"
                                        disabled
                                        value={stateEditData.stateId}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="txtStateName">State Name</label>
                                    <input type="text"
                                        id="txtStateName"
                                        className="form-control"
                                        value={stateEditData.stateName}
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            // let {value} = e.target;
                                            setStateEditData((rest) => (
                                                {
                                                    ...rest,
                                                    stateName: value
                                                }
                                            ))
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="drpCountry">Country</label>
                                    <select id="drpCountry" className="form-control"
                                        value={stateEditData.countryId}
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            setStateEditData((rest) => (
                                                {
                                                    ...rest,
                                                    countryId: Number(value)
                                                }
                                            ))
                                        }}>
                                        <option value="0" key="country-data">Select Country</option>
                                        {
                                            countryData.map((country: ICountry, index: number) => {
                                                return (
                                                    <option value={country.countryId} key={`country-data-${index}`}>{country.countryName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col-12 text-center">
                                <button type="button"
                                    className="btn btn-primary"
                                    onClick={postState}
                                >Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StateEdit;