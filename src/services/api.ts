import axios from "axios";

const API = axios.create({
  baseURL: "https://clinic-backend-ik2b.onrender.com/",
});

API.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");
  if (user) {
    const { token } = JSON.parse(user);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
