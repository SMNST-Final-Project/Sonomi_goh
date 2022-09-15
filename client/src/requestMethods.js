import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIxYmRjY2IwZDE0OTVkOTdhNmJhOGUiLCJpYXQiOjE2NjMxNTU2NjB9.GijLCaEb2LUhLFS-8qHjkho3BoYOQQKc4C3IKZ56tn0"

export const publicRequest = axios.create({
  baseUrl: BASE_URL,
});

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  header: {
    token:`Bearer ${TOKEN}`
  },
});