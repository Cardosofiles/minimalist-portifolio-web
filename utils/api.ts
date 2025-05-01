// utils/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
  timeout: 5000,
});
