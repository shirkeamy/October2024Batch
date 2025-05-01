import { useState, useEffect, SetStateAction } from "react";
import { DeleteCourse, GetCourses } from "../../../Services/InstituteServives";
import { ICourse } from "../../../Utils/Interfaces";
import CoursesView from "./Courses.view";
import Swal from "sweetalert2";

const CoursesLogic: React.FC = () => {

    const [courseData, setCourseData] = useState<ICourse[]>([]);
    const [courseId, setCourseId] = useState<number>(0);
    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await GetCourses();
            setCourseData(data);
            setIsSaved(false);
        }
        fetchCountries();
    }, [isSaved])

    const onDeleteClick = async (countryId: number) => {
        Swal.fire({
            title: "Are you sure you want to delete this country?",
            text: "This will delete your all dependant data as well",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await DeleteCourse(countryId).then((data) => {
                    if (data) {
                        setIsSaved(true);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Contry deleted successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
            }
        });

    }

    return (
        <CoursesView
            courseData={courseData}
            setCourseId={setCourseId}
            onDeleteClick={onDeleteClick}
            courseId={courseId}
            setIsSaved={setIsSaved}
        />
    )
}

export default CoursesLogic;