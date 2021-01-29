import axios from "axios";

const API_URL = "http://localhost:3100/user";

const register = (email, password) => {
  return axios.post(`${API_URL}/signup`, {
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(`${API_URL}/login`, {
      email,
      password,
    })
    .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
