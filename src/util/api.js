import axios from "axios";

const apiUrl = import.meta.env.VITE_SPECTRUM_API_URL;
const api = axios.create({
  // baseURL: "https://open-ai-codex-qdrv.onrender.com",
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
