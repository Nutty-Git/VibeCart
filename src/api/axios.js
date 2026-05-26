import axios from "axios";

const instance = axios.create({
  baseURL: "http://vibecart-backend-o516.onrender.com/api",
});

export default instance;
