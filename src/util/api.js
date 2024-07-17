import axios from "axios";

const api = axios.create({
  // baseURL: "https://open-ai-codex-qdrv.onrender.com",
  baseURL: "https://fastapispectrum.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
