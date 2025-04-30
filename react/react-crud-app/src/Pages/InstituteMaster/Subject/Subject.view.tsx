import React, { useEffect, useState } from "react";
import { ISubject, ISubjectPostData } from "../../../Utils/Interfaces";
import SubjectEditLogic from "./SubjectEdit/SubjectEdit.logic";

interface ISubjectProps {
    subjectId: number;
    subjectData: ISubject[];
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
    setSubjectId: React.Dispatch<React.SetStateAction<number>>;
    onDeleteClick: (subjectId: number) => Promise<void>;
}

const SubjectView: React.FC<ISubjectProps> = (props: ISubjectProps) => {

    const { subjectData, subjectId, onDeleteClick, setSubjectId, setIsSaved }: ISubjectProps = props;

    return (
        <>
            <SubjectEditLogic
                subjectId={subjectId}
                setIsSaved={setIsSaved}
            />
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr key={`subject-header`}>
                                <th>Subject Id</th>
                                <th>Subject Name</th>
                                <th>Course Id</th>
                                <th>Course Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subjectData.map((subject: ISubject, index: number) => (
                                    <tr key={`state-data-${index}`}>
                                        <td>{subject.subjectId}</td>
                                        <td>{subject.subjectName}</td>
                                        <td>{subject.courseId}</td>
                                        <td>{subject.courseName}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-primary m-1"
                                                type="button"
                                                onClick={() => { setSubjectId(subject.subjectId) }}
                                            >Edit</button>

                                            <button
                                                className="btn btn-sm btn-danger m-1"
                                                type="button"
                                                onClick={() => { onDeleteClick(subject.subjectId) }}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div >

        </>
    )

}

export default SubjectView;