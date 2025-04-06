import React from "react";

const NotFound: React.FC = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
                <div className="text-center">
                    <h1 className="display-1 fw-bold text-danger">404</h1>
                    <h2 className="display-4 text-warning">Opps! Page not found.</h2>
                    <p className="lead">
                        Page you requested is doesn't exists or has been moved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default NotFound;