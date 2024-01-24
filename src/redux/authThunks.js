/* eslint-disable no-unused-vars */
// authThunks.js
import { clearUser, setLoading, setUser } from "../features/authSlice";
import {
  createUser,
  logOut,
  resetPassword,
  signIn,
  signInWithGoogle,
  updateUser,
} from "./authProbiver";

createUser;
export const signUpAsync = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const userCredential = await createUser(email, password);
    dispatch(setUser(userCredential.user));
  } catch (error) {
    console.log(error);
  }
};

export const signInAsync = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const userCredential = await signIn(email, password);
    dispatch(setUser(userCredential.user));
  } catch (error) {
    console.log(error);
  }
};

export const signInWithGoogleAsync = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const userCredential = await signInWithGoogle();
    dispatch(setUser(userCredential.user));
    console.log("object worked");
  } catch (error) {
    console.log(error);
  }
};

export const resetPasswordAsync = (email) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    await resetPassword(email);
    // Password reset email sent successfully
  } catch (error) {
    console.log(error);
  }
};

export const logOutAsync = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    await logOut();
    dispatch(clearUser());
  } catch (error) {
    console.log(error);
  }
};

export const updateUserAsync = (name, photo) => async (dispatch) => {
  try {
    await updateUser(name, photo);
    // User updated successfully
  } catch (error) {
    console.log(error);
  }
};
