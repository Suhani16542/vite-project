import axios from "axios";

// Axios instance
const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // ya jahan bhi aap token store karte ho
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response)=>{
    return response;
  },
  (error)=>{
    if(error.response?.status===401){
       localStorage.removeItem("token");
       window.location.href="/login";
    }
    return Promise.reject(error);
  }
);

export default api;



