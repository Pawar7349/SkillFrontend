import { server } from "../Store.js";
import axios from "axios";

// Import action types from actionTypes.js
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,

  // CLEAR_ERROR,
  // CLEAR_MESSAGE,

  BUY_SUBSCRIPTION_REQUEST,
  BUY_SUBSCRIPTION_SUCCESS,
  BUY_SUBSCRIPTION_FAIL,
  CANCEL_SUBSCRIPTION_REQUEST,
  CANCEL_SUBSCRIPTION_SUCCESS,
  CANCEL_SUBSCRIPTION_FAIL,
  
} from '../actions/userTypesAction.js';

// Action creators
export const loginAction = (email, password) => async dispatch => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    console.error('data is not showing')
  }
};

export const registerAction = (formData) => async dispatch => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    }

    const { data } = await axios.post(
      `${server}/register`,
      formData,
      config
    );
    

    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
  }
};

export const myProfile = () => async dispatch => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const config = {
      withCredentials: true,
    };

    const {data}= await axios.get(
      `${server}/myProfile`,
      config
    );
    

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload:error.response.data.message });
  }
};

export const logoutProfile = () => async dispatch => {
  try {
    dispatch({ type: LOGOUT_REQUEST });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(
      `${server}/logout`,
      config
    );

    dispatch({ type: LOGOUT_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const buySubscription = () => async dispatch => {
  try {
    dispatch({ type: BUY_SUBSCRIPTION_REQUEST });

    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });

    dispatch({ type: BUY_SUBSCRIPTION_SUCCESS, payload: data.subscriptionId });
  } catch (error) {
    dispatch({
      type: BUY_SUBSCRIPTION_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const cancelSubscription = () => async dispatch => {
  try {
    dispatch({ type: CANCEL_SUBSCRIPTION_REQUEST });

    const { data } = await axios.delete(`${server}/subscribe/cancel`, { withCredentials: true });

    dispatch({ type: CANCEL_SUBSCRIPTION_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: CANCEL_SUBSCRIPTION_FAIL,
      payload: error.response.data.message,
    });
  }
};
