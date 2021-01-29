import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3100/blogs/";

const getPublicContent = () => {
  return axios.get(`${API_URL}/all-blogs`, { headers: authHeader() });
};

export default {
  getPublicContent,

};