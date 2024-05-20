import { createReducer } from '@reduxjs/toolkit';
import {
ALLCOURSE_REQUEST ,
ALLCOURSE_SUCCESS ,
ALLCOURSE_FAIL,

GETCOURSE_REQUEST,
GETCOURSE_SUCCESS ,
GETCOURSE_FAIL,

} from '../actions/courseActionType'

import {
  CLEAR_ERROR,
  CLEAR_MESSAGE
} from '../actions/userTypesAction'

import {
  ADD_TO_PLAYLIST_REQUEST,
  ADD_TO_PLAYLIST_SUCCESS,
  ADD_TO_PLAYLIST_FAIL

} from '../actions/profileActionTypes'
 
const initialState = {
  loading: false,
  courses: [],
  lectures: [],
  error: null,
  message: null,
};

export const courseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ALLCOURSE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(ALLCOURSE_SUCCESS, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    })
    .addCase(ALLCOURSE_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase(GETCOURSE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(GETCOURSE_SUCCESS, (state, action) => {
      state.loading = false;
      state.lectures = action.payload;
    })
    .addCase(GETCOURSE_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase(ADD_TO_PLAYLIST_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(ADD_TO_PLAYLIST_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ADD_TO_PLAYLIST_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(CLEAR_ERROR, (state) => {
      state.error = null;
    })
    .addCase(CLEAR_MESSAGE, (state) => {
      state.message = null;
    });
});


