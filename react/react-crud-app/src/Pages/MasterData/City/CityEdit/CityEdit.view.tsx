import React, { use, useEffect } from "react";
import { GetStates } from "../../../../Services/StateServices";
import { getCities, SaveUpdateCity } from "../../../../Services/CityServices";
import Swal from "sweetalert2";
import { ICityPostData, IState, ICity } from "../../../../Utils/Interfaces";

interface ICityEditViewProps {
    cityEditData: ICityPostData;
    setCityEditData: React.Dispatch<React.SetStateAction<ICityPostData>>;
    stateData: IState[];
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    onSaveClick: () => Promise<void>;
}

const CityEditView: React.FC<ICityEditViewProps> = (props: ICityEditViewProps) => {
    
    const { cityEditData, setCityEditData, stateData, setIsSuccess, onSaveClick }: ICityEditViewProps = props;

    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Edit City</h1>
                </div>
            </div>
            <div className="row m-5 pb-5">
                <div className="col-4"></div>
                <div className="col-4">
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="cityId">City Id</label>
                                    <input type="text"
                                        className="form-control"
                                        id="cityId"
                                        placeholder="City Id"
                                        disabled
                                        value={cityEditData.cityId}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="cityName">City Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id="cityName"
                                        placeholder="City Name"
                                        value={cityEditData.cityName}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setCityEditData((rest) => {
                                                return {
                                                    ...rest,
                                                    cityName: value
                                                }
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="stateId">State</label>
                                    <select name="" id="drpState"
                                        className="form-control"
                                        value={cityEditData.stateId}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setCityEditData((rest) => {
                                                return {
                                                    ...rest,
                                                    stateId: parseInt(value)
                                                }
                                            })
                                        }}
                                    >
                                        <option value="0">Please Select</option>
                                        {
                                            stateData.map((state: IState, index: number) => {
                                                return (
                                                    <option key={index} value={state.stateId}>{state.stateName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-12">
                                <div className="form-group">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={onSaveClick}
                                    >Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CityEditView;