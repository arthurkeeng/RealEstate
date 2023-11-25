import axios from "axios";

const app = axios.create({
  baseURL: "http://omeenee-api.onrender.com",
});

export default app;
