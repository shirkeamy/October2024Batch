import React, { useEffect, useState } from "react";
import { GetStates, SaveUpdateState } from "../../../../Services/StateServices";
import { GetCountries } from "../../../../Services/CountryServices";
import Swal from "sweetalert2";
import { IStatePostData, ICountry } from "../../../../Utils/Interfaces";
import DropdownWrapper from "../../../../Components/FormComponents/DropdownWrapper";
import InputWrapper from "../../../../Components/FormComponents/InputWrapper";
import { InputType } from "../../../../Utils/Enums";

interface IStateEditProps {
    stateEditData: IStatePostData;
    setStateEditData: React.Dispatch<React.SetStateAction<IStatePostData>>;
    countryData: ICountry[];
    postState: () => Promise<void>;
}

const StateEditView: React.FC<IStateEditProps> = (props: IStateEditProps) => {

    const { stateEditData, setStateEditData, countryData, postState }: IStateEditProps = props;


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
                                        }}
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
                                            let value = e.target.value;
                                            setStateEditData((rest) => (
                                                {
                                                    ...rest,
                                                    countryId: Number(value)
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

export default StateEditView;