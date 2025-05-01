import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const VerticalNavbar: React.FC = () => {
    return (
        <>
            {/* <ul className="sa-vertical-navbar">
                <li><a href="/crud/institute/courses">Courses</a></li>
                <li><a href="/crud/institute/subjects">Subjects</a></li>
            </ul> */}

            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '220px', height: '100vh' }}>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <Link to="/crud/institute/courses" className="nav-link ps-4">
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link to="/crud/institute/subjects" className="nav-link ps-4">
                            Subjects
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default VerticalNavbar;