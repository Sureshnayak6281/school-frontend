
import React from "react";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <header className="bg-white py-3 border-bottom">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="Logo" width="60" className="me-2" />
                </div>
                <nav className="d-flex flex-grow-1 justify-content-center gap-5">
                    <a href="#" className="text-dark text-decoration-none fw-bold">The School</a>
                    <a href="#" className="text-dark text-decoration-none fw-bold">Academics</a>
                    <a href="#" className="text-dark text-decoration-none fw-bold">Life @ DBTR</a>
                    <a href="#" className="text-dark text-decoration-none fw-bold">Contact us</a>
                </nav>

                <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-outline-dark fw-bold">CSR</button>
                    <button className="btn btn-danger fw-bold">Donate ❤</button>
                </div>
            </div>
        </header>
    );
};

export default Header;