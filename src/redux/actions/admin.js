import { server } from '../Store';
import axios from 'axios';

import{
  CREATECOURSE_REQUEST,
  CREATECOURSE_SUCCESS,
  CREATECOURSE_FAIL ,

  DELETECOURSE_REQUEST,
  DELETECOURSE_SUCCESS,
  DELETECOURSE_FAIL,

  ADDLECTURE_REQUEST,
  ADDLECTURE_SUCCESS,
  ADDLECTURE_FAIL,

  DELETELECTURE_REQUEST,
  DELETELECTURE_SUCCESS,
  DELETELECTURE_FAIL,

  GETALLUSER_REQUEST,
  GETALLUSER_SUCCESS,
  GETALLUSER_FAIL,

  UPDATEUSERROLE_REQUEST,
  UPDATEUSERROLE_SUCCESS,
  UPDATEUSERROLE_FAIL,

  DELETEUSER_REQUEST,
  DELETEUSER_SUCCESS,
  DELETEUSER_FAIL,

  GETDASHBOARDSTATS_REQUEST,
  GETDASHBOARDSTATS_SUCCESS,
  GETDASHBOARDSTATS_FAIL,
} from '../actions/adminActionTypes.js'

export const createCourse = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    };

    dispatch({ type: CREATECOURSE_REQUEST });

    const { data } = await axios.post(
      `${server}/createCourse`,
      formData,
      config
    );

    dispatch({ type: CREATECOURSE_SUCCESS, payload: data.message });

  } catch (error) {
    dispatch({
      type: CREATECOURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteCourse = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: DELETECOURSE_REQUEST});

    const { data } = await axios.delete(`${server}/course/${id}`, config);

    dispatch({ type: DELETECOURSE_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: DELETECOURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const addLecture = (id, formdata) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    };
    dispatch({ type: ADDLECTURE_REQUEST });

    const { data } = await axios.post(
      `${server}/course/${id}`,
      formdata,
      config
    );

    dispatch({ type: ADDLECTURE_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: ADDLECTURE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteLecture = (courseId, lectureId) => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: DELETELECTURE_REQUEST });

    const { data } = await axios.delete(
      `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
      config
    );

    dispatch({ type: DELETELECTURE_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: DELETELECTURE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: GETALLUSER_REQUEST });

    const { data } = await axios.get(`${server}/admin/users`, config);

    dispatch({ type: GETALLUSER_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({
      type: GETALLUSER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateUserRole = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: UPDATEUSERROLE_REQUEST});

    const { data } = await axios.put(`${server}/admin/users/${id}`, {}, config);

    dispatch({ type: UPDATEUSERROLE_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: UPDATEUSERROLE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: DELETEUSER_REQUEST });

    const { data } = await axios.delete(`${server}/admin/users/${id}`, config);

    dispatch({ type: DELETEUSER_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: DELETEUSER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getDashboardStats = () => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: GETDASHBOARDSTATS_REQUEST });

    const { data } = await axios.get(`${server}/admin/stats`, config);

    dispatch({ type: GETDASHBOARDSTATS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GETDASHBOARDSTATS_FAIL,
      payload: error.response.data.message,
    });
  }
};
