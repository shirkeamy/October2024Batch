import React, { useEffect, useState } from "react";
import { AddEditState, GetStates, IState, IStatePostData } from "../../Services/StateServices";
import { GetCountries, ICountry } from "../../Services/CountryServices";
import Swal from "sweetalert2";

interface IStateEditProps {
    stateId: number;
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateEdit: React.FC<IStateEditProps> = (props: IStateEditProps) => {

    const { stateId, setIsSuccess }: IStateEditProps = props;

    const editStateEmptyData: IStatePostData = {
        stateId: 0,
        stateName: "",
        countryId: 0
    }

    const [stateEditData, setStateEditData] = useState<IStatePostData>(editStateEmptyData);
    const [countryData, setCountryData] = useState<ICountry[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const data: ICountry[] = await GetCountries(null);
            setCountryData(data);
        }

        fetchCountries();
    }, [])

    useEffect(() => {
        if (stateId > 0) {
            const fetchStates = async () => {
                const data: IState[] = await GetStates(stateId);
                setStateEditData(data[0]);
            }
            fetchStates();
        }
    }, [stateId]);

    const postState = async () => {
        await AddEditState(stateEditData)
            .then((result: boolean) => {
                if (result) {
                    if (stateEditData.stateId > 0) {
                        // alert("Country updated successfully.");
                        Swal.fire({
                            title: "Updated!",
                            text: "Country updated successfully.",
                            icon: "success"
                        });
                    }
                    else {
                        // alert("Country saved successfully.");
                        Swal.fire({
                            title: "Saved!",
                            text: "Country saved successfully.",
                            icon: "success"
                        });
                    }
                    setStateEditData(editStateEmptyData);
                    setIsSuccess(true);
                }
            })
    }

    return (
        <>
            <div className="row text-center">
                <div className="col-12">
                    <h2>State Form</h2>
                </div>
                <hr className="border border-primary" />
            </div>
            <div className="row mb-5">
                <div className="col-12">
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="txtStateId">State Id</label>
                                    <input
                                        type="text"
                                        id="txtStateId"
                                        className="form-control"
                                        disabled
                                        value={stateEditData.stateId}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="txtStateName">State Name</label>
                                    <input
                                        type="text"
                                        id="txtStateName"
                                        className="form-control"
                                        value={stateEditData.stateName}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setStateEditData((rest) => ({
                                                ...rest,
                                                stateName: value
                                            }))
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="txtStateName">Country</label>
                                    <select name="" id="drpCountry"
                                        className="form-control"
                                        value={stateEditData.countryId}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setStateEditData((rest) => ({
                                                ...rest,
                                                countryId: parseInt(value)
                                            }))
                                        }}>
                                        <option value="0">Select Country</option>
                                        {
                                            countryData.map((country: ICountry) => {
                                                return (
                                                    <option value={country.countryId}>{country.countryName}</option>
                                                )
                                            })
                                        }
                                    </select>
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
                                        onClick={postState}
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

export default StateEdit;