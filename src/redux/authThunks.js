/* eslint-disable no-unused-vars */
// authThunks.js
import auth from "../../firebase.config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearUser, setLoading, setUser } from "../features/authSlice";
import {
  createUser,
  logOut,
  resetPassword,
  signIn,
  signInWithGoogle,
  updateUser,
} from "./authProbiver";

import { onAuthStateChanged } from "firebase/auth";
// createUser;

export const signUpAsync = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const userCredential = await createUser(email, password);
    dispatch(setUser(userCredential.user));
  } catch (error) {
    console.log(error);
  }
};

export const signInAsync = (email, password) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const userCredential = await signIn(email, password);
      const serializableUser = {
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        photoURL: userCredential.user.photoURL,
      };
      dispatch({ type: "auth/setUser", payload: serializableUser });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const signInWithGoogleAsync = createAsyncThunk(
  "auth/signInWithGoogle",
  async () => {
    const userCredential = await signInWithGoogle();
    const serializableUser = {
      uid: userCredential.user.uid,
      displayName: userCredential.user.displayName,
      email: userCredential.user.email,
      photoURL: userCredential.user.photoURL,
    };
    return serializableUser;
  }
);

export const resetPasswordAsync = (email) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    await resetPassword(email);
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

export const updateUserAsync = (name, photoUrl) => async (dispatch) => {
  try {
    await updateUser(name, photoUrl);
  } catch (error) {
    console.log(error);
  }
};

export const subscribeToAuthChanges = () => async (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const serializableUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      dispatch(setUser(serializableUser));
    } else {
      dispatch(clearUser());
    }
  });
};
