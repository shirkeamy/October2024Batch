import React, { ChangeEvent } from "react";
import { InputType } from "../../Utils/Enums";

interface IInputWrapperProps {
    title: string;
    name?: string;
    id: string;
    type: InputType;
    value: string | number;
    className?: string;
    isDisabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputWrapper: React.FC<IInputWrapperProps> = (props: IInputWrapperProps) => {

    const { title, name, id, type, value, className, isDisabled, onChange }: IInputWrapperProps = props;

    return (
        <>
            <label htmlFor={id}>{title}</label>
            <input
                name={name}
                type={type}
                id={id}
                className={`form-control ${className}`}
                value={value}
                disabled={isDisabled}
                onChange={onChange}
            />
        </>
    )
}

export default InputWrapper;