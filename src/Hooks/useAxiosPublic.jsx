import axios from "axios";

const instance = axios.create({
  //baseURL: 'https://chikitsha-hub-server.vercel.app',
  baseURL: "http://localhost:3000",
  withCredentials: true
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
