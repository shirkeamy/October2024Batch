import React, { ChangeEvent } from "react";
import { IDropdownData } from "../../Utils/Interfaces";

interface IDropdownWrapperProps {
    id: string;
    title: string;
    optionsData: IDropdownData[];
    selectedValue: string | number;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    validationText?: string;
    className?: string;
}

const DropdownWrapper: React.FC<IDropdownWrapperProps> = (props: IDropdownWrapperProps) => {

    const { id, title, optionsData, selectedValue, onChange, validationText, className }: IDropdownWrapperProps = props;

    return (
        <>
            <label htmlFor={id}>{title}</label>
            <select
                id={id}
                className={`form-control ${className}`}
                value={selectedValue}
                onChange={onChange}
            >
                <option value="0" key={`${title}-data`}>Select {title}</option>
                {
                    optionsData.map((option: IDropdownData, index: number) => {
                        return (
                            <option
                                value={option.value}
                                key={`${title}-data-${index}`}>
                                {option.text}
                            </option>
                        )
                    })
                }
            </select>
            {
                validationText &&
                <span className="text-danger">{validationText}</span>
            }
        </>
    )
}

export default DropdownWrapper;