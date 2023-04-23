import axios from "axios";

const request = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

request.interceptors.request.use(
  (config) => {
    try {
      const auth = JSON.parse(localStorage.getItem("auth"));

      if (auth && config.url !== "/login")
        config.headers[
          "Authorization"
        ] = `${auth.token_type} ${auth.access_token}`;

      return config;
    } catch (error) {}
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default request;
