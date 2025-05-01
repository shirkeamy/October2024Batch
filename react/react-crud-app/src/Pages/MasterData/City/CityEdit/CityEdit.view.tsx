import React, { use, useEffect, useState } from "react";
import { GetStates } from "../../../../Services/StateServices";
import { getCities, SaveUpdateCity } from "../../../../Services/CityServices";
import Swal from "sweetalert2";
import { ICityPostData, IState, ICity } from "../../../../Utils/Interfaces";
import InputWrapper from "../../../../Components/FormComponents/InputWrapper";
import { InputType } from "../../../../Utils/Enums";
import DropdownWrapper from "../../../../Components/FormComponents/DropdownWrapper";

interface ICityEditViewProps {
    cityEditData: ICityPostData;
    setCityEditData: React.Dispatch<React.SetStateAction<ICityPostData>>;
    stateData: IState[];
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    onSaveClick: () => Promise<void>;
}

const CityEditView: React.FC<ICityEditViewProps> = (props: ICityEditViewProps) => {

    const { cityEditData, setCityEditData, stateData, setIsSuccess, onSaveClick }: ICityEditViewProps = props;
    const [error, setError] = useState<{ [key: string]: string }>({})
    const validateData = () => {
        const errorObj: { [key: string]: string } = {};

        if (cityEditData.cityName === "" || cityEditData.cityName === undefined || cityEditData.cityName === null) {
            errorObj.cityName = "City Name is required";
        }

        if (cityEditData.stateId === 0) {
            errorObj.stateId = "State is required";
        }

        setError(errorObj)
        return Object.keys(errorObj).length === 0;
    }

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
                                    <InputWrapper
                                        title={"City ID"}
                                        id={"txtCityId"}
                                        type={InputType.Text}
                                        value={cityEditData.cityId}
                                        isDisabled={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <InputWrapper
                                        title={"City Name"}
                                        id={"cityName"}
                                        type={InputType.Text}
                                        value={cityEditData.cityName}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setCityEditData((rest) => {
                                                return {
                                                    ...rest,
                                                    cityName: value
                                                }
                                            })
                                            setError({ ...error, cityName: "" })
                                        }}
                                        validationText={error.cityName}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <DropdownWrapper
                                        title={"State"}
                                        id={"drpState"}
                                        selectedValue={cityEditData.stateId}
                                        optionsData={stateData.map((state: IState) => {
                                            return {
                                                value: state.stateId,
                                                text: state.stateName
                                            }
                                        }
                                        )}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setCityEditData((rest) => {
                                                return {
                                                    ...rest,
                                                    stateId: parseInt(value)
                                                }
                                            })
                                            setError({ ...error, stateId: "" })
                                        }}
                                        validationText={error.stateId}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-12">
                                <div className="form-group">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            if (validateData()) {
                                                onSaveClick();
                                            }
                                        }}
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