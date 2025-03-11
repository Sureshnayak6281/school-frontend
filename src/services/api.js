

const API_BASE_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_REACT_APP_LIVE_API_URL
    : import.meta.env.VITE_REACT_APP_API_URL;

export default API_BASE_URL;
