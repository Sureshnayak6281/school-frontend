
import React from "react";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="pt-5 pb-4 border-top" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container">
                <div className="row align-items-start text-center text-md-start">
                    <div className="col-lg-4 col-md-6 d-flex align-items-center">
                        <img src={logo} alt="Logo" width="80" className="me-3" />
                        <div>
                            <h6 className="fw-bold mb-1">DBTR National Higher Secondary School</h6>
                            <p className="text-muted small mb-1">Virtuousness is Life</p>
                            <p className="text-muted small mb-0">Established in 1901, DBTR is situated in the temple town of Mayiladuthurai.</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <h6 className="fw-bold mb-3">QUICK LINKS</h6>
                        <ul className="list-unstyled text-muted small">
                            <li><a href="#" className="text-decoration-none text-muted">Admissions</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Alumni Association</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Donate</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Events</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <h6 className="fw-bold mb-3">CONTACT</h6>
                        <p className="text-muted small mb-1">DBTR NHSS,<br /> Mahadhana Street, <br />Kamarajar Salai, <br />Mayiladuthurai, Tamil Nadu - 609001</p>
                        <p className="text-muted small mb-1">+91 436 422 3272</p>
                        <p className="text-muted small"><a href="mailto:contact@nationalhighschool.in" className="text-decoration-none text-muted">contact@nationalhighschool.in</a></p>
                    </div>
                    <div className="col-lg-3 col-md-12 text-center">
                        <p className="fw-bold">Big or small, you can make an impact.</p>
                        <a href="#donate" className="btn btn-danger fw-bold px-4">Donate ❤</a>
                    </div>
                </div>
                <hr className="my-4" />

                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="text-muted small">
                        <p className="mb-0">© DBTR 2023, All Rights Reserved | <a href="#" className="text-muted text-decoration-none">Sitemap</a></p>
                        <p className="mb-0">Designed by <span className="fw-bold text-dark">PEPPER SQUARE</span></p>
                    </div>

                    <div className="text-end">
                        <a href="#" className="text-dark me-3"><FaFacebookF /></a>
                        <a href="#" className="text-dark me-3"><FaTwitter /></a>
                        <a href="#" className="text-dark me-3"><FaLinkedinIn /></a>
                        <a href="#" className="text-dark me-3"><FaInstagram /></a>
                        <a href="#" className="text-dark"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
