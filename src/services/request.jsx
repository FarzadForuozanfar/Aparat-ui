import axios from "axios";

const request = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default request;
