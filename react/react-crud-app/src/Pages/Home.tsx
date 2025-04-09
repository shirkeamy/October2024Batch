import React from "react";

const Home: React.FC = () => {
    return (
        <>
            { /* Hero Section */}
            <header className="jumbotron text-center bg-primary text-white">
                <h1 className="display-4">Welcome to React CRUD App</h1>
                <p className="lead">A simple application with Create, Read, Update, and Delete operations.</p>
                <p>We have covered three different module endpoints: <strong>Country, State, and City</strong>. More are coming to help you understand React and its components in detail.</p>
                <a href="#" className="btn btn-light btn-lg">Get Started</a>
            </header>

            { /* Main Content */}
            <div className="container text-center mt-4">
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
                        <div className="card feature-card shadow-lg border-warning">
                            <div className="card-body">
                                <h5 className="card-title text-warning">Update</h5>
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
            <div className="container text-center mt-5">
                <h2 className="mb-4">More Features</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card shadow-lg border-info">
                            <div className="card-body">
                                <h5 className="card-title text-info">Authentication</h5>
                                <p className="card-text">Secure login and registration with Basic authentication.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-lg border-warning">
                            <div className="card-body">
                                <h5 className="card-title text-warning">API Integration</h5>
                                <p className="card-text">Seamless integration with .NET Core APIs for real-time operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center mt-5">
                <h2 className="mb-4">Why Choose Us?</h2>
                <p className="lead">We provide an interactive learning experience with practical examples and hands-on coding.</p>
            </div>
        </>
    )
}

export default Home;