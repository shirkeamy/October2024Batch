import React from "react";

const NavigationMenu: React.FC = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">React Application</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about">About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact">Contact us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="user-details">User Master</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default NavigationMenu;