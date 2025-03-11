import React from "react";
import API_BASE_URL from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css";

const EventModal = ({ event, onClose, onNext, onPrevious }) => {
    if (!event || !event.Image || !event.Image.url) return null;

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="modal-dialog modal-md modal-dialog-centered position-relative">
                <div className="modal-content border-0 bg-transparent position-relative" style={{ borderRadius: '10px', maxWidth: '520px' }}>

                    <button
                        type="button"
                        className="btn-close position-absolute"
                        style={{ top: '-40px', right: '-10px', borderRadius: '50%', padding: '10px', zIndex: '10', filter: 'invert(1)' }}
                        onClick={onClose}>
                    </button>

                    <button
                        className="btn btn-light position-absolute"
                        style={{ left: '-40px', top: '50%', transform: 'translateY(-50%)', borderRadius: '50%', zIndex: '10' }}
                        onClick={onPrevious}>
                        ❮
                    </button>

                    <img src={`${API_BASE_URL}${event.Image.url}`}
                        alt={event.Title}
                        className="img-fluid rounded"
                        style={{ maxWidth: '500px', margin: 'auto', display: 'block', borderRadius: '10px' }} />

                    <button
                        className="btn btn-light position-absolute"
                        style={{ right: '-40px', top: '50%', transform: 'translateY(-50%)', borderRadius: '50%', zIndex: '10' }}
                        onClick={onNext}>
                        ❯
                    </button>

                    <div className="p-3 text-center text-white rounded-bottom" style={{ maxWidth: '500px', margin: 'auto' }}>
                        <h5 className="fw-bold mb-1">{event.Title}</h5>
                        <p className="small mb-0">📅 {event.Date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventModal;