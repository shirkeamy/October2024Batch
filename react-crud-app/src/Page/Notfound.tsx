import React from "react";

const Notfound: React.FC = () => {
    return (
        <>
            <div className="row text-center">
                <div className="col-12 text-cener">
                    <h1 className="text-danger">404</h1>
                    <h3 className="text-warning">Page not found!!!</h3>
                    <p>
                        Page you requested is not found...
                    </p>
                </div>
            </div>
        </>
    )
}

export default Notfound;