import { Outlet } from "react-router-dom";

const InstituteDetails: React.FC = () => {
    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 style={{ color: "#4CAF50", fontWeight: "bold", fontSize: "2rem" }}>Institute Details</h2>
                    <hr style={{ border: "2px solid #4CAF50", width: "50%", margin: "0 2" }} />
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-4" style={{ backgroundColor: "#E8F5E9", padding: "1rem", borderRadius: "8px" }}>
                                <p style={{ color: "#388E3C" }}>
                                    Welcome to the Institute Details page. Here you can find comprehensive information about our institute, including its history, mission, and key highlights.
                                </p>
                                <p style={{ color: "#388E3C" }}>
                                    Our institute is dedicated to providing quality education and fostering a culture of innovation and excellence. We aim to empower students with the skills and knowledge they need to succeed in their chosen fields.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Outlet />
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="card" style={{ backgroundColor: "#F1F8E9", border: "1px solid #C5E1A5" }}>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ color: "#558B2F" }}>Mission</h5>
                                            <p className="card-text" style={{ color: "#33691E" }}>
                                                To provide a transformative educational experience that nurtures creativity, critical thinking, and leadership.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card" style={{ backgroundColor: "#FFF3E0", border: "1px solid #FFB74D" }}>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ color: "#E65100" }}>Vision</h5>
                                            <p className="card-text" style={{ color: "#BF360C" }}>
                                                To be a globally recognized institute known for academic excellence and societal impact.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ backgroundColor: "#E3F2FD", border: "1px solid #64B5F6" }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#1565C0" }}>Institute Name: ABC Institute</h5>
                                    <p className="card-text" style={{ color: "#0D47A1" }}>Location: 123 Main Street, Cityville</p>
                                    <p className="card-text" style={{ color: "#0D47A1" }}>Established: 1995</p>
                                    <p className="card-text" style={{ color: "#0D47A1" }}>Contact: info@abcinstitute.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstituteDetails;