import React from "react";

const EventCard = ({ event, onClick }) => {
    if (!event || !event.Image) return null;

    return (
        <div className="card shadow-sm d-flex flex-column h-100" style={{ height: "100%" }} onClick={() => onClick(event)}>
            <div className="position-relative" style={{ height: "400px", overflow: "hidden" }}>
                <img src={`https://school-6.onrender.com${event.Image.url}`}
                    alt={event.Title}
                    className="card-img-top position-absolute top-0 start-0 w-100"
                    style={{ objectFit: "cover", height: "auto", minHeight: "100%" }} />
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{event.Title}</h5>
                <p className="card-text text-muted">📅 {event.Date}</p>
            </div>
        </div>
    );
};

export default EventCard;