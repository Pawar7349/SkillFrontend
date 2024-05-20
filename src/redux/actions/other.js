import { server } from '../Store.js';
import axios from 'axios';

import {
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
  CONTACT_FAIL,
  COURSEREQUEST_REQUEST,
  COURSEREQUEST_SUCCESS,
  COURSEREQUEST_FAIL,
} from '../actions/otherActionTypes'

export const contactUs = (name, email, message) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }

    dispatch({ type: CONTACT_REQUEST });

    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message },
      config
    );

    dispatch({ type: CONTACT_SUCCESS, payload: data.message });

  } catch (error) {
    dispatch({
      type: CONTACT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const courseRequest = (name, email, message) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }

    dispatch({ type: COURSEREQUEST_REQUEST });

    const { data } = await axios.post(
      `${server}/requestCourse`,
      { name, email, message },
      config
    );

    dispatch({ type: COURSEREQUEST_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: COURSEREQUEST_FAIL,
      payload: error.response.data.message,
    });
  }
};
