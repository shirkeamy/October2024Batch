import React, { Dispatch, SetStateAction, useState } from "react";
import { ISubjectPostData, ICourse } from "../../../../Utils/Interfaces";
import DropdownWrapper from "../../../../Components/FormComponents/DropdownWrapper";
import InputWrapper from "../../../../Components/FormComponents/InputWrapper";
import { InputType } from "../../../../Utils/Enums";

interface ISubjectEditProps {
    subjectEditData: ISubjectPostData;
    setSubjectEditData: Dispatch<SetStateAction<ISubjectPostData>>;
    courseData: ICourse[];
    postData: () => Promise<void>;
}

const SubjectEditView: React.FC<ISubjectEditProps> = (props: ISubjectEditProps) => {

    const { courseData, postData, setSubjectEditData, subjectEditData }: ISubjectEditProps = props;

    const [error, setError] = useState<{ [key: string]: string }>({})
    const validateData = () => {
        const errorObj: { [key: string]: string } = {};

        if (subjectEditData.subjectName === "" || subjectEditData.subjectName === undefined || subjectEditData.subjectName === null) {
            errorObj.subjectName = "Subject Name is required";
        }

        if (subjectEditData.courseId === 0) {
            errorObj.course = "Course is required";
        }

        setError(errorObj)
        return Object.keys(errorObj).length === 0;
    }

    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Subject Form</h2>
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
                                        title={"Subject ID"}
                                        id={"txtSubjectId"}
                                        type={InputType.Text}
                                        value={subjectEditData.subjectId}
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
                                        title={"Subject Name"}
                                        id={"txtSubjectName"}
                                        type={InputType.Text}
                                        value={subjectEditData.subjectName}
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            // let {value} = e.target;
                                            setSubjectEditData((rest) => (
                                                {
                                                    ...rest,
                                                    subjectName: value
                                                }
                                            ))
                                            setError({ ...error, course: "" })
                                        }}
                                        validationText={error.course}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <DropdownWrapper
                                        id={"drpCourse"}
                                        title={"Course"}
                                        optionsData={
                                            courseData.map(
                                                (course: ICourse) => ({
                                                    value: course.courseId,
                                                    text: course.courseName
                                                })
                                            )
                                        }
                                        selectedValue={subjectEditData.courseId}
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            setSubjectEditData((rest) => (
                                                {
                                                    ...rest,
                                                    courseId: Number(value)
                                                }
                                            ))
                                            setError({ ...error, course: "" })
                                        }}
                                        validationText={error.course}
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
                                            postData()
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

export default SubjectEditView;