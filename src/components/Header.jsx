import React from "react";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <header className="bg-white py-2 border-bottom">
            <div className="container d-flex align-items-center justify-content-between flex-wrap">
                {/* Logo */}
                <div className="d-flex align-items-center">
                    <img src={logo} alt="Logo" width="45" className="me-2" />
                </div>

                {/* Navigation Links (Smaller Text, No Wrapping) */}
                <nav className="d-flex flex-wrap justify-content-center gap-2 flex-grow-1 text-center">
                    <a href="#" className="text-dark text-decoration-none fw-bold small px-2">The School</a>
                    <a href="#" className="text-dark text-decoration-none fw-bold small px-2">Academics</a>
                    <a href="#" className="text-dark text-decoration-none fw-bold small px-2">Life @ DBTR</a>
                    <a href="#" className="text-dark text-decoration-none fw-bold small px-2">Contact us</a>
                </nav>

                {/* Buttons (Smaller Size for Mobile) */}
                <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-outline-dark fw-bold btn-sm px-3 py-1">CSR</button>
                    <button className="btn btn-danger fw-bold btn-sm px-3 py-1">Donate ❤</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
