import React from "react";

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Master
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/country">Country</a>
                                <a className="dropdown-item" href="/state">State</a>
                                <a className="dropdown-item" href="/city">City</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/crud/institute">Institute Master</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;