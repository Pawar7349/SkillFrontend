import { server } from '../Store.js';
import axios from 'axios';

import {
  ALLCOURSE_REQUEST,
  ALLCOURSE_SUCCESS,
  ALLCOURSE_FAIL,
  GETCOURSE_REQUEST,
  GETCOURSE_SUCCESS,
  GETCOURSE_FAIL,

} from '../actions/courseActionType'

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: ALLCOURSE_REQUEST});

      const config = {
        withCredentials: true,
      }
      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`, config
      );
    
      dispatch({ type: ALLCOURSE_SUCCESS, payload: data.courses });


    } catch (error) {
      dispatch({
        type: ALLCOURSE_FAIL,
        payload:error.response.data.message,
      });
    }
  };

export const getCourseLectures = id => async dispatch => {
  try {
    dispatch({ type: GETCOURSE_REQUEST });

    const config = {
        withCredentials: true,
      }


    const { data } = await axios.get(`${server}/course/${id}`,
        config
    );

    console.log(data);

    dispatch({ type: GETCOURSE_SUCCESS, payload: data.lectures });
  } catch (error) {
    dispatch({
      type: GETCOURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};
