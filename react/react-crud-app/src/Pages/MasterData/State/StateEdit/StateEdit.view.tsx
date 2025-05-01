import React, { Dispatch, SetStateAction, useState } from "react";
import { IStatePostData, ICountry } from "../../../../Utils/Interfaces";
import DropdownWrapper from "../../../../Components/FormComponents/DropdownWrapper";
import InputWrapper from "../../../../Components/FormComponents/InputWrapper";
import { InputType } from "../../../../Utils/Enums";

interface IStateEditProps {
    stateEditData: IStatePostData;
    setStateEditData: Dispatch<SetStateAction<IStatePostData>>;
    countryData: ICountry[];
    postState: () => Promise<void>;
}

const StateEditView: React.FC<IStateEditProps> = (props: IStateEditProps) => {

    const { stateEditData, setStateEditData, countryData, postState }: IStateEditProps = props;

    const [error, setError] = useState<{ [key: string]: string }>({})

    const validateData = () => {
        const errorObj: { [key: string]: string } = {};

        if (stateEditData.stateName === "" || stateEditData.stateName === undefined || stateEditData.stateName === null) {
            errorObj.txtStateName = "State name is required";
        }
        if (stateEditData.countryId === 0) {
            errorObj.drpCountry = "Country is required";
        }
        setError(errorObj)
        return Object.keys(errorObj).length === 0;
    }

    const handleOnSave = () => {
        if (validateData()) {
            postState();
        }
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
                                    <InputWrapper
                                        title={"State ID"}
                                        id={"txtStateId"}
                                        type={InputType.Text}
                                        value={stateEditData.stateId}
                                        isDisabled={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <InputWrapper
                                        title={"State Name"}
                                        id={"txtStateName"}
                                        type={InputType.Text}
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
                                            setError({ ...error, txtStateName: "" })
                                        }}
                                        validationText={error.txtStateName}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <DropdownWrapper
                                        id={"drpCountry"}
                                        title={"Country"}
                                        optionsData={
                                            countryData.map((country: ICountry) => ({
                                                value: country.countryId,
                                                text: country.countryName
                                            }))}
                                        selectedValue={stateEditData.countryId}
                                        onChange={(e) => {
                                            let { value, id } = e.target;
                                            setStateEditData((rest) => (
                                                {
                                                    ...rest,
                                                    countryId: Number(value)
                                                }
                                            ))
                                            setError({ ...error, [id]: "" })
                                        }}
                                        validationText={error.drpCountry}
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col-12 text-center">
                                <button type="button"
                                    className="btn btn-primary"
                                    onClick={handleOnSave}
                                >Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StateEditView;