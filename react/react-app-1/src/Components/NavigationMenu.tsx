import React from "react";

const NavigationMenu: React.FC = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">React Application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="about">About us</a>
                            <a className="nav-link" href="contact">Contact us</a>
                            <a className="nav-link" href="user-master">User master</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default NavigationMenu;