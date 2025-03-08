import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";
import EventFilter from "../components/EventFilter";
import EventModal from "../components/EventModal";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "https://school-6.onrender.com/api/events?populate=*";

const EventsGallery = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [modalEvent, setModalEvent] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState("");
    const [categories, setCategories] = useState(["All"]);
    
    useEffect(() => {
        fetchEvents();
    }, []);
    
    const fetchEvents = async () => {
        try {
            const response = await axios.get(API_URL);
            console.log("Fetched Events:", response.data.data);
            setEvents(response.data.data);
            setFilteredEvents(response.data.data);
            
            const uniqueCategories = ["All", ...new Set(response.data.data.map(event => event.Category))];
            setCategories(uniqueCategories);
            
            const scienceEvent = response.data.data.find(event => event.Title.toLowerCase().includes("science exhibition"));
            if (scienceEvent && scienceEvent.Image && scienceEvent.Image.url) {
                setBackgroundImage(`https://school-6.onrender.com${scienceEvent.Image.url}`);
            }
        } catch (error) {
            console.error("Error fetching events", error);
        }
    };
    
    const filterEvents = (category) => {
        setSelectedCategory(category);
        setFilteredEvents(category === "All" ? events : events.filter(event => event.Category === category));
    };
    
    const handleNext = () => {
        if (!modalEvent) return;
        const currentIndex = filteredEvents.findIndex(e => e.id === modalEvent.id);
        const nextIndex = (currentIndex + 1) % filteredEvents.length;
        setModalEvent(filteredEvents[nextIndex]);
    };
    
    const handlePrevious = () => {
        if (!modalEvent) return;
        const currentIndex = filteredEvents.findIndex(e => e.id === modalEvent.id);
        const prevIndex = (currentIndex - 1 + filteredEvents.length) % filteredEvents.length;
        setModalEvent(filteredEvents[prevIndex]);
    };
    
    return (
        <div className="container-fluid p-0 w-100">
            <Header />
            <HeroSection backgroundImage={backgroundImage} />
            <div className="container-fluid py-5">
                <div className="row mb-4">
                    <div className="col-12">
                        <EventFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={filterEvents} />
                    </div>
                </div> 
                <div className="container-fluid py-0.5 px-0">
                <div className="row g-4 events-row w-100 mx-0">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map(event => (
                            <div key={event.id} className="col-md-4 col-sm-6 mb-4">
                    <EventCard event={event} onClick={setModalEvent} />
                </div>
                        ))
                    ) : (
                        <div className="col-12 text-center my-5">
                            <h3>No events found in this category.</h3>
                            <p>Please select another category or check back later.</p>
                        </div>
                    )}
                </div>
                </div>
                {modalEvent && <EventModal event={modalEvent} onClose={() => setModalEvent(null)} onNext={handleNext} onPrevious={handlePrevious} />}
            </div>
            <Footer/>
        </div>
    
    );
};

export default EventsGallery;