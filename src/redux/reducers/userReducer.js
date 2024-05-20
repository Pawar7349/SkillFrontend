import { createReducer } from '@reduxjs/toolkit';

import {
LOGIN_REQUEST,
LOGIN_SUCCESS ,
LOGIN_FAIL ,

REGISTER_REQUEST,
REGISTER_SUCCESS,
REGISTER_FAIL,

LOAD_USER_REQUEST ,
LOAD_USER_SUCCESS,
LOAD_USER_FAIL ,

LOGOUT_REQUEST,
LOGOUT_SUCCESS ,
LOGOUT_FAIL,

CLEAR_ERROR,
CLEAR_MESSAGE,

BUY_SUBSCRIPTION_REQUEST,
BUY_SUBSCRIPTION_SUCCESS ,
BUY_SUBSCRIPTION_FAIL ,

CANCEL_SUBSCRIPTION_REQUEST ,
CANCEL_SUBSCRIPTION_SUCCESS,
CANCEL_SUBSCRIPTION_FAIL,
  
} from '../actions/userTypesAction';

import{
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL ,
  
   UPDATE_PROFILE_PICTURE_REQUEST,
   UPDATE_PROFILE_PICTURE_SUCCESS ,
   UPDATE_PROFILE_PICTURE_FAIL,
  
   CHANGE_PASSWORD_REQUEST,
   CHANGE_PASSWORD_SUCCESS ,
   CHANGE_PASSWORD_FAIL,

   FORGET_PASSWORD_REQUEST ,
   FORGET_PASSWORD_SUCCESS,
   FORGET_PASSWORD_FAIL ,

   RESET_PASSWORD_REQUEST ,
   RESET_PASSWORD_SUCCESS ,
   RESET_PASSWORD_FAIL,

   REMOVE_FROM_PLAYLIST_REQUEST,
   REMOVE_FROM_PLAYLIST_SUCCESS,
   REMOVE_FROM_PLAYLIST_FAIL
} from '../actions/profileActionTypes'

const userInitialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  message: null,
  error: null,
  subscriptionId: null,
};

export const userReducer = createReducer(userInitialState, (builder) => {
  builder
    .addCase(LOGIN_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(LOGIN_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase(LOGIN_FAIL, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })

    .addCase(REGISTER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(REGISTER_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase(REGISTER_FAIL, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })

    .addCase(LOAD_USER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(LOAD_USER_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    })
    .addCase(LOAD_USER_FAIL, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })

    
    .addCase(LOGOUT_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(LOGOUT_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(LOGOUT_FAIL, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    
    .addCase(CLEAR_ERROR, (state) => {
      state.error = null;
    })
    .addCase(CLEAR_MESSAGE, (state) => {
      state.message = null;
    });
});

const profileInitialState = {
  loading: false,
  message: null,
  error: null,
};

export const profileReducer = createReducer(profileInitialState, (builder) => {
  builder
    .addCase(UPDATE_PROFILE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(UPDATE_PROFILE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(UPDATE_PROFILE_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(UPDATE_PROFILE_PICTURE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(UPDATE_PROFILE_PICTURE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(UPDATE_PROFILE_PICTURE_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(CHANGE_PASSWORD_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(CHANGE_PASSWORD_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(CHANGE_PASSWORD_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(FORGET_PASSWORD_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(FORGET_PASSWORD_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(FORGET_PASSWORD_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase(RESET_PASSWORD_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(RESET_PASSWORD_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(RESET_PASSWORD_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(REMOVE_FROM_PLAYLIST_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(REMOVE_FROM_PLAYLIST_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(REMOVE_FROM_PLAYLIST_FAIL, (state, action) => {
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


const subscriptionInitialState = {
  loading: false,
  subscriptionId: null,
  message: null,
  error: null,
};


export const subscriptionReducer = createReducer(subscriptionInitialState, (builder) => {
  builder
    .addCase(BUY_SUBSCRIPTION_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(BUY_SUBSCRIPTION_SUCCESS, (state, action) => {
      state.loading = false;
      state.subscriptionId = action.payload;
    })
    .addCase(BUY_SUBSCRIPTION_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(CANCEL_SUBSCRIPTION_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(CANCEL_SUBSCRIPTION_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(CANCEL_SUBSCRIPTION_FAIL, (state, action) => {
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

