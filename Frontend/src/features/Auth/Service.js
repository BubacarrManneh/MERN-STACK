import axios from "axios";

const API_URL = "/api/user";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "/register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logOut = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  logOut,
  login,
};

export default AuthService;
