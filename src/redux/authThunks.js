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
  // delete_User,
} from "./authProbiver";

import { onAuthStateChanged } from "firebase/auth";
import useAxiosPublic from "./../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
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

export const signInAsync = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const userCredential = await signIn(email, password).then(res => {
        console.log(res.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "LogIn Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      }).catch(err => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2500
        })
      });
      const serializableUser = {
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        photoURL: userCredential.user.photoURL,
        // role: "user",
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
      // role: "user",
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
// export const delete_UserAsync = (user) => async (dispatch) => {
//   try {
//     await delete_User(user);
//     dispatch(clearUser());
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateUserAsync = (name, photoUrl, role) => async (dispatch) => {
//   try {
//     await updateUser(name, photoUrl, role);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const updateUserAsync = (name, photoUrl) => async (dispatch) => {
  try {
    await updateUser(name, photoUrl);
  } catch (error) {
    console.log(error);
    // Handle error if needed
  }
};

export const subscribeToAuthChanges = () => async (dispatch) => {
  const axios = useAxiosPublic();

  onAuthStateChanged(auth, (user) => {
    const loggedUser = { email: user?.email };

    if (user) {
      const serializableUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        // role: user.role,
      };
      dispatch(setUser(serializableUser));

      axios.post("/jwt", loggedUser).then((res) => {
        // console.log(res);
      });
    } else {
      dispatch(clearUser());
      axios.post("/logout", loggedUser).then((res) => {
        // console.log(res);
      });
    }
  });
};
