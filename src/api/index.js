import axios from "axios";

export const httpServer = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 1000,
});
