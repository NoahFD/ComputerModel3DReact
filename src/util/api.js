import axios from "axios";

const api = axios.create({
  baseURL: "https://open-ai-codex-qdrv.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
