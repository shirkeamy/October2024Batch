import CoursesLogic from "./Courses/Courses.logic";
import SubjectLogic from "./Subject/Subject.logic";

const InstituteDetails: React.FC = () => {
    return (
        <>
            <ul className="nav nav-tabs bg-primary mt-5" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="courses-tab" data-toggle="tab" data-target="#courses" type="button" role="tab" aria-controls="courses" aria-selected="true">Courses</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="subjects-tab" data-toggle="tab" data-target="#subjects" type="button" role="tab" aria-controls="subjects" aria-selected="false">Subjects</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="courses" role="tabpanel" aria-labelledby="courses-tab">
                    <h1>Course</h1>
                    <CoursesLogic />
                </div>
                <div className="tab-pane fade" id="subjects" role="tabpanel" aria-labelledby="subjects-tab">
                    <h1>Subjects</h1>
                    <SubjectLogic />
                </div>
            </div>
        </>

    )
}

export default InstituteDetails;