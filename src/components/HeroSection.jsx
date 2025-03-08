import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = ({ backgroundImage }) => {
    return (
        <section className="text-white text-center d-flex align-items-center justify-content-center position-relative"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage}) center/cover no-repeat`,
                height: "350px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                margin: "0 auto",
                width: "99%",
                borderRadius: "5px"
            }}>

            <div className="container px-4 px-md-5 position-absolute top-50 start-50 translate-middle">
                <h1 className="fw-bold display-4 text-white">Our Events Gallery</h1>
                <p className="lead text-white">Events at DBTR are filled with joyous occasions, cultural gatherings, and learning opportunities that bring us all together.</p>
            </div>
        </section>
    );
};

export default HeroSection;
