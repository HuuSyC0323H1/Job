import axios from "axios";

export const Url = () => {
  return axios.create({
    baseURL: "http://localhost:8080",
  });
};
