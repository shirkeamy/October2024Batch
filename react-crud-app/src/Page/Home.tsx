import React from "react";
import "./style.css"

const Home: React.FC = () => {
    return (
        <>
            { /* Hero Section */}
            <header className="jumbotron text-center bg-primary text-white">
                <h1 className="display-4">Welcome to React CRUD App</h1>
                <p className="lead">A simple application with Create, Read, Update, and Delete operations.</p>
                <p>We have covered three different module endpoints: <strong>Country, State, and City</strong>. More are coming to help you understand React and its components in detail.</p>
                <a href="#" className="btn btn-outline-light">Get Started</a>
            </header>

            { /* Main Content */}
            <div className="container-fluid text-center mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card feature-card shadow-lg border-primary">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Create</h5>
                                <p className="card-text">Add new records to the database.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card feature-card shadow-lg border-success">
                            <div className="card-body">
                                <h5 className="card-title text-success">Read</h5>
                                <p className="card-text">View stored records in a structured format.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card feature-card shadow-lg border-danger">
                            <div className="card-body">
                                <h5 className="card-title text-danger">Update</h5>
                                <p className="card-text">Modify existing records.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card feature-card shadow-lg border-danger">
                            <div className="card-body">
                                <h5 className="card-title text-danger">Delete</h5>
                                <p className="card-text">Remove existing records.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ border: "1px solid red" }} />
            <div className="container-fluid text-center mt-5">
                <h2 className="mb-4">API's we using</h2>
                <hr style={{ width: "50%", margin: "0 auto", border: "2px solid blue", marginBottom: "2rem" }} />
                <div className="row">
                    <div className="col-md-1">
                        <div className="card feature-card shadow-lg border-info">
                            <div className="card-body">
                                <h5 className="card-title text-info">Country</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="card feature-card shadow-lg border-info">
                            <div className="card-body">
                                <h5 className="card-title text-info">State</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="card feature-card shadow-lg border-info">
                            <div className="card-body">
                                <h5 className="card-title text-info">City</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="card feature-card shadow-lg border-info">
                            <div className="card-body">
                                <h5 className="card-title text-info">Course</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="card feature-card shadow-lg border-info">
                            <div className="card-body">
                                <h5 className="card-title text-info">Subject</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card feature-card shadow-lg border-info">
                            <div className="card-body">
                                <h5 className="card-title text-info">Student Registration</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card feature-card shadow-lg border-info" title="You can request me by commenting on any video. I'll provide you respective solution as soon as possible">
                            <div className="card-body">
                                <h5 className="card-title text-info">&amp; More...</h5>
                                <p className="card-text">On demad development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center mt-5">
                <h2 className="mb-4">More Features</h2>
                <hr style={{ width: "50%", margin: "0 auto", border: "2px solid blue", marginBottom: "2rem" }} />


                <div className="row">
                    <div className="col-md-6">
                        <div className="card shadow-lg border-info">
                            <div className="card-body">
                                <h5 className="card-title text-info">Authentication</h5>
                                <p className="card-text">Our authentication system ensures secure login and registration using Basic authentication. User credentials are securely stored and managed, following best practices for password storage and encryption. Sessions are managed securely to prevent unauthorized access, offering a user-friendly login and registration experience. The process is designed to be fast, efficient, and scalable, with support for password recovery and reset. We prioritize user privacy and data protection, providing comprehensive documentation and support. Our authentication system is continuously improved and innovated to meet user needs effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-lg border-warning">
                            <div className="card-body">
                                <h5 className="card-title text-warning">API Integration</h5>
                                <p className="card-text">Seamless integration with .NET Core APIs for real-time operations.</p>
                                <p className="card-text">Data is fetched and manipulated using the <code>fetch</code> function for seamless communication with the backend.</p>
                                <p className="card-text">Our APIs are designed to be robust and scalable, ensuring seamless communication between the frontend and backend.</p>
                                <p className="card-text">We use modern RESTful principles to provide a consistent and predictable API experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div style={{ textAlign: "center" }}>
                    <h2 className="mb-4">Why Choose Us?</h2>
                    <hr style={{ width: "50%", margin: "0 auto", border: "2px solid blue", marginBottom: "2rem" }} />
                </div>
                <ul className="list-unstyled text-start">
                    <li>✅ We are committed to providing a user-friendly experience with a focus on performance and security.</li>
                    <li>✅ Our application is built with the latest technologies to ensure a smooth and efficient workflow.</li>
                    <li>✅ We offer comprehensive documentation and support to help you get started quickly.</li>
                    <li>✅ Our team is dedicated to continuous improvement and innovation.</li>
                    <li>✅ Join our community and stay updated with the latest features and enhancements.</li>
                    <li>✅ We value your feedback and are always looking for ways to enhance your experience.</li>
                    <li>✅ Our application is designed to be scalable and adaptable to your needs.</li>
                    <li>✅ We prioritize security and data protection to ensure your information is safe.</li>
                    <li>✅ We provide an interactive learning experience with practical examples and hands-on coding.</li>
                </ul>
            </div>
        </>
    )
}

export default Home;