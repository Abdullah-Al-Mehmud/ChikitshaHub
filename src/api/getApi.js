/* eslint-disable react-hooks/rules-of-hooks */
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const getAllUsers = async () => {
  const { data } = await useAxiosPublic("/users");
  return data;
};
