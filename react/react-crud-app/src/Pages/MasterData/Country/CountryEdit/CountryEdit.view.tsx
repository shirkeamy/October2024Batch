import React, { useState } from "react";
import { ICountry } from "../../../../Utils/Interfaces";
import InputWrapper from "../../../../Components/FormComponents/InputWrapper";
import { InputType } from "../../../../Utils/Enums";

interface ICountryEditProps {
    countryEditData: ICountry;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
    setCountryEditData: React.Dispatch<React.SetStateAction<ICountry>>;
    postCountry: () => Promise<void>;
}

const CountryEditView: React.FC<ICountryEditProps> = (props: ICountryEditProps) => {

    const { countryEditData, setCountryEditData, postCountry }: ICountryEditProps = props;
    const [error, setError] = useState<{ [key: string]: string }>({})
    const validateData = () => {
        const errorObj: { [key: string]: string } = {};

        if (countryEditData.countryName === "" || countryEditData.countryName === undefined || countryEditData.countryName === null) {
            errorObj.countryName = "Country Name is required";
        }

        setError(errorObj)
        return Object.keys(errorObj).length === 0;
    }

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
                                    <InputWrapper
                                        title={"Country ID"}
                                        id={"txtCountryId"}
                                        type={InputType.Text}
                                        value={countryEditData.countryId}
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
                                        title={"Country Name"}
                                        id={"txtCountryName"}
                                        type={InputType.Text}
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
                                            setError({ ...error, countryName: "" })
                                        }}
                                        validationText={error.countryName}

                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col-12 text-center">
                                <button type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        if (validateData()) {
                                            postCountry();
                                        }
                                    }}
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