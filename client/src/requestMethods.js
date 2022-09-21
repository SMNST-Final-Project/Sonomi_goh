import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const TOKEN = localStorage.getItem("token")

export const publicRequest = axios.create({
  baseUrl: BASE_URL,
});

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  header: {
    "authorization":`Bearer ${TOKEN}`
  },
});