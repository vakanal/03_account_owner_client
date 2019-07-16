import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries-v1.p.rapidapi.com/",
  timeout: 5000,
  headers: {
    "X-RapidAPI-Host": "restcountries-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "a024f34a06msh43801dfe674ea2cp17ebe5jsn440714d7cf79"
  }
});

export default instance;
