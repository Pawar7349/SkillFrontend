import { createReducer } from '@reduxjs/toolkit';
import {
   CONTACT_REQUEST,
   CONTACT_SUCCESS ,
   CONTACT_FAIL,

   COURSEREQUEST_REQUEST,
   COURSEREQUEST_SUCCESS,
   COURSEREQUEST_FAIL
} from '../actions/otherActionTypes'

import {
  CLEAR_ERROR,
  CLEAR_MESSAGE
} from '../actions/userTypesAction'

const initialState = {
  loading: false,
  message: null,
  error: null,
};

export const otherReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(CONTACT_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(CONTACT_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(CONTACT_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase(COURSEREQUEST_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(COURSEREQUEST_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(COURSEREQUEST_FAIL, (state, action) => {
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


