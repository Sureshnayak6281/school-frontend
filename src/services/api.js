import axios from "axios";

const API_URL = "https://school-6.onrender.com/api/events?populate=*";

export const fetchEvents = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log("Fetched Events:", response.data.data);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
};
