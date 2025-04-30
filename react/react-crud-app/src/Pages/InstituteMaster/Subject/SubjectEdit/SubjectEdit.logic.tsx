import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GetCountries } from "../../../../Services/CountryServices";
import { GetStates, SaveUpdateState } from "../../../../Services/StateServices";
import { IStatePostData, ICountry, ISubjectPostData, ICourse } from "../../../../Utils/Interfaces";
import StateEditView from "./SubjectEdit.view";
import { GetCourses, GetSubjectById, SaveSubject, UpdateSubject } from "../../../../Services/InstituteServives";
import SubjectEditView from "./SubjectEdit.view";

interface ISubjectEditLogicProps {
    subjectId: number;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubjectEditLogic: React.FC<ISubjectEditLogicProps> = (props: ISubjectEditLogicProps) => {

    const { subjectId, setIsSaved }: ISubjectEditLogicProps = props;

    const editEmptyData: ISubjectPostData = {
        subjectId: 0,
        subjectName: "",
        courseId: 0
    }

    const [subjectEditData, setSubjectEditData] = useState<ISubjectPostData>(editEmptyData);
    const [courseData, setCourseData] = useState<ICourse[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await GetCourses();
            setCourseData(data);
        }
        fetchCourses();
    }, [])

    useEffect(() => {
        if (subjectId > 0) {
            const fetchStates = async () => {
                const data = await GetSubjectById(subjectId);
                setSubjectEditData(data);
            }

            fetchStates();
        }
    }, [subjectId])

    const postData = async () => {
        if (subjectEditData.subjectId > 0) {
            await UpdateSubject(subjectId, subjectEditData)
                .then(() => {
                    setSubjectEditData(editEmptyData);
                    setIsSaved(true);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Subject updated successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                });
        } else {
            await SaveSubject(subjectEditData)
                .then(() => {
                    setSubjectEditData(editEmptyData);
                    setIsSaved(true);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "subject Added successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                });
        }
    }

    return (
        <>
            <SubjectEditView
                subjectEditData={subjectEditData}
                setSubjectEditData={setSubjectEditData}
                courseData={courseData}
                postData={postData}            
            />
        </>
    )
}

export default SubjectEditLogic;