import { useEffect, useState } from "react";
import { ICourse } from "../../../../Utils/Interfaces";
import CourseEditView from "./CourseEdit.view";
import { GetCourseById, SaveCourse, UpdateCourse } from "../../../../Services/InstituteServives";
import Swal from "sweetalert2";


interface ICourseEditLogicProps {
    courseId: number;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

const CourseEditLogic: React.FC<ICourseEditLogicProps> = (props: ICourseEditLogicProps) => {

    const { courseId, setIsSaved }: ICourseEditLogicProps = props;

    const editEmptyData: ICourse = {
        courseId: 0,
        courseName: ""
    }

    const [courseEditData, setCourseEditData] = useState<ICourse>(editEmptyData);

    const postCourse = async () => {
        if (courseEditData.courseId > 0) {
            await UpdateCourse(courseEditData)
                .then((data) => {
                    if (data) {
                        setCourseEditData(editEmptyData);
                        setIsSaved(true);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Contry updated successfully!"
                        });
                    }
                });
        }
        else {
            await SaveCourse(courseEditData)
                .then((data) => {
                    if (data) {
                        setCourseEditData(editEmptyData);
                        setIsSaved(true);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Contry Added successfully!"
                        });
                    }
                });
        }

    }

    useEffect(() => {
        if (courseId > 0) {
            const fetchCountries = async () => {
                const data = await GetCourseById(courseId);
                setCourseEditData(data[0]);
            }
            fetchCountries();
        }
    }, [courseId])

    return (
        <CourseEditView
            setCourseEditData={setCourseEditData}
            courseEditData={courseEditData}
            setIsSaved={setIsSaved}
            postCourse={postCourse}
        />
    )
}

export default CourseEditLogic;