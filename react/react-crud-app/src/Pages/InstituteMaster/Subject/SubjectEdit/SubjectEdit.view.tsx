import React, { Dispatch, SetStateAction } from "react";
import { ISubjectPostData, ICourse } from "../../../../Utils/Interfaces";
import DropdownWrapper from "../../../../Components/FormComponents/DropdownWrapper";

interface ISubjectEditProps {
    subjectEditData: ISubjectPostData;
    setSubjectEditData: Dispatch<SetStateAction<ISubjectPostData>>;
    courseData: ICourse[];
    postData: () => Promise<void>;
}

const SubjectEditView: React.FC<ISubjectEditProps> = (props: ISubjectEditProps) => {

    const { courseData, postData, setSubjectEditData, subjectEditData }: ISubjectEditProps = props;

    console.log("SubjectEditView", subjectEditData);
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
                                    <label htmlFor="txtSubjectId">Subject ID</label>
                                    <input type="text"
                                        id="txtSubjectId"
                                        className="form-control"
                                        disabled
                                        value={subjectEditData.subjectId}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="txtSubjectName">Subject Name</label>
                                    <input type="text"
                                        id="txtSubjectName"
                                        className="form-control"
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
                                        }}
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col-12 text-center">
                                <button type="button"
                                    className="btn btn-primary"
                                    onClick={postData}
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