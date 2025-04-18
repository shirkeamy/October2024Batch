import React, { use, useEffect } from "react";
import { GetStates, IState } from "../../../Services/StateServices";
import { getCities, ICity, ICityPostData, SaveUpdateCity } from "../../../Services/CityServices";
import Swal from "sweetalert2";

interface ICityEditProps {
    cityId: number;
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const CityEdit: React.FC<ICityEditProps> = (props: ICityEditProps) => {
    const { cityId, setIsSuccess }: ICityEditProps = props;

    const emptyEditData: ICityPostData = {
        cityId: 0,
        cityName: "",
        stateId: 0
    }

    const [stateData, setStateData] = React.useState<IState[]>([]);
    const [cityEditData, setCityEditData] = React.useState<ICityPostData>(emptyEditData)

    useEffect(() => {
        const fetchStates = async () => {
            const data: IState[] = await GetStates(null);
            setStateData(data);
        }

        fetchStates();
    }, []);

    useEffect(() => {
        if (cityId > 0) {
            const fetchCities = async () => {
                const data: ICity[] = await getCities(cityId);
                setCityEditData(data[0]);
            }
            fetchCities();
        }
    }, [cityId]);

    const onSaveClick = async () => {
        await SaveUpdateCity(cityEditData).then((data) => {
            if (data) {
                setIsSuccess(true);
                setCityEditData(emptyEditData);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "City Added successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
            }else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "City not added successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        })
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1>Edit City</h1>
                </div>
                <div className="col-12">
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
                        <div className="row">
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

export default CityEdit;