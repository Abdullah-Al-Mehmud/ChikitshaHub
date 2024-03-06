import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../../firebase.config";

const instance = axios.create({
<<<<<<< HEAD
  // baseURL: 'https://chikitsha-hub-server.vercel.app',
=======
  // baseURL: "https://chikitsha-hub-server.vercel.app",
>>>>>>> 255e4eaefa7ab77a6c8f748ab0952e11c46387ff
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosPrivet = () => {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await signOut(auth);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosPrivet;
