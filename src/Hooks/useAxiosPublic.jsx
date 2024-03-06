import axios from "axios";

const instance = axios.create({
  // baseURL: "https://chikitsha-hub-server.vercel.app",
<<<<<<< HEAD
   baseURL: "http://localhost:3000",
=======
  baseURL: "http://localhost:3000",
>>>>>>> 255e4eaefa7ab77a6c8f748ab0952e11c46387ff
  withCredentials: true,
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
