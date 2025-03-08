import React from "react";

const EventFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {categories.map(category => (
                <button key={category}
                    className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => onSelectCategory(category)}>
                    {category}
                </button>
            ))}
        </div>

    );
};

export default EventFilter;