import axios from "axios";


const instance = axios.create({
    baseURL: 'https://chikitsha-hub-server.vercel.app/doctors',
    withCredentials: true
  });

const useAxiosPublic = () => {
    return instance
};

export default useAxiosPublic;