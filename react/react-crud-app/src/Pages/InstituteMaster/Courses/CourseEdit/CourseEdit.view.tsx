import { Dispatch, useState } from "react";
import { ICourse } from "../../../../Utils/Interfaces";
import InputWrapper from "../../../../Components/FormComponents/InputWrapper";
import { InputType } from "../../../../Utils/Enums";

interface ICourseEditViewProps {
    setCourseEditData: Dispatch<React.SetStateAction<ICourse>>
    courseEditData: ICourse;
    setIsSaved: Dispatch<React.SetStateAction<boolean>>;
    postCourse: () => Promise<void>;
}

const CourseEditView: React.FC<ICourseEditViewProps> = (props: ICourseEditViewProps) => {
    const { setCourseEditData, courseEditData, setIsSaved, postCourse }: ICourseEditViewProps = props;

    const [error, setError] = useState<{ [key: string]: string }>({})
    const validateData = () => {
        const errorObj: { [key: string]: string } = {};

        if (courseEditData.courseName === "" || courseEditData.courseName === undefined || courseEditData.courseName === null) {
            errorObj.courseName = "Course Name is required";
        }

        setError(errorObj)
        return Object.keys(errorObj).length === 0;
    }

    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Course Form</h2>
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
                                        title={"Course ID"}
                                        id={"txtCourseId"}
                                        type={InputType.Text}
                                        value={courseEditData.courseId}
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
                                        title={"Course Name"}
                                        id={"txtCourseName"}
                                        type={InputType.Text}
                                        value={courseEditData.courseName}
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            // let {value} = e.target;
                                            setCourseEditData((rest) => (
                                                {
                                                    ...rest,
                                                    courseName: value
                                                }
                                            ))
                                            setError({ ...error, courseName: "" })

                                        }}
                                        validationText={error.courseName}
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
                                            postCourse();
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

export default CourseEditView;