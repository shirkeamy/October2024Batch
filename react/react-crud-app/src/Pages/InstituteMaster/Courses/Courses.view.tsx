import { ICourse } from "../../../Utils/Interfaces";
import CourseEditLogic from "./CourseEdit/CourseEdit.logic";

interface ICoursesLogicProps {
    courseData: ICourse[];
    setCourseId: React.Dispatch<React.SetStateAction<number>>;
    onDeleteClick: (courseId: number) => Promise<void>;
    courseId: number;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

const CoursesView: React.FC<ICoursesLogicProps> = (props: ICoursesLogicProps) => {
    const { courseData, setCourseId, onDeleteClick, courseId, setIsSaved }: ICoursesLogicProps = props;
    return (
        <>
        <CourseEditLogic courseId={courseId} setIsSaved={setIsSaved}  />
        <hr />
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr key={`country-header`}>
                                <th>Course Id</th>
                                <th>Course Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courseData.map((course: ICourse, index: number) => (
                                    <tr key={`course-data-${index}`}>
                                        <td>{course.courseId}</td>
                                        <td>{course.courseName}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-primary m-1"
                                                type="button"
                                                onClick={() => { setCourseId(course.courseId) }}
                                            >Edit</button>

                                            <button
                                                className="btn btn-sm btn-danger m-1"
                                                type="button"
                                                onClick={() => { onDeleteClick(course.courseId) }}
                                            >delete</button>
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

export default CoursesView;