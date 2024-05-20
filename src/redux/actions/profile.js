import { server } from "../Store.js";
import axios from 'axios';

// Action types
import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_PICTURE_REQUEST,
  UPDATE_PROFILE_PICTURE_SUCCESS,
  UPDATE_PROFILE_PICTURE_FAIL,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ADD_TO_PLAYLIST_REQUEST,
  ADD_TO_PLAYLIST_SUCCESS,
  ADD_TO_PLAYLIST_FAIL,
  REMOVE_FROM_PLAYLIST_REQUEST,
  REMOVE_FROM_PLAYLIST_SUCCESS,
  REMOVE_FROM_PLAYLIST_FAIL,
} from '../actions/profileActionTypes.js';

// Action creators
export const updateProfile= (name, email) => async dispatch => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/updateProfile`,
      { name, email },
      config
    );

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.message });

  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.response.data.message });
  }
};

export const updateProfilePicture = formData => async dispatch => {
  try {
    dispatch({ type: UPDATE_PROFILE_PICTURE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/updateProfilePicture`,
      formData,
      config
    );

    dispatch({ type: UPDATE_PROFILE_PICTURE_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_PICTURE_FAIL, payload: error.response.data.message });
  }
};

export const changePassword = (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch({ type: CHANGE_PASSWORD_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/changePassword`,
      { oldPassword, newPassword },
      config
    );

    dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: data.message });

  } catch (error) {
    dispatch({ type: CHANGE_PASSWORD_FAIL, payload: error.response.data.message });
  }
};

export const forgetPassword = email => async dispatch => {
  try {
    dispatch({ type: FORGET_PASSWORD_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/forgetPassword`,
      { email },
      config
    );

    dispatch({ type: FORGET_PASSWORD_SUCCESS, payload: data.message });

  } catch (error) {
    dispatch({ type: FORGET_PASSWORD_FAIL, payload: error.response.data.message });
  }
};

export const resetPassword = (token, password) => async dispatch => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/resetPassword/${token}`,
      { password },
      config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.message });

  } catch (error) {
    dispatch({ type: RESET_PASSWORD_FAIL, payload: error.response.data.message });
  }
};

export const addToPlaylist = id => async dispatch => {
  try {
    dispatch({ type: ADD_TO_PLAYLIST_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/addtoplaylist`,
      { id },
      config
    );

    dispatch({ type: ADD_TO_PLAYLIST_SUCCESS, payload: data.message });

  } catch (error) {
    dispatch({ type: ADD_TO_PLAYLIST_FAIL, payload: error.response.data.message });
  }
};

export const removeFromPlaylist = id => async dispatch => {
  try {
    dispatch({ type: REMOVE_FROM_PLAYLIST_REQUEST });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `${server}/removefromplaylist?id=${id}`,
      config
    );

    dispatch({ type: REMOVE_FROM_PLAYLIST_SUCCESS, payload: data.message });

  } catch (error) {
    dispatch({ type: REMOVE_FROM_PLAYLIST_FAIL, payload: error.response.data.message });
  }
};
