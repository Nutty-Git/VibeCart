import axios from "axios";

const instance = axios.create({
  baseURL: "http://onrender.com/api",
});

export default instance;
