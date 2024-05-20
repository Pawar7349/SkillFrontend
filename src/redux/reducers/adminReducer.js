import { createReducer } from '@reduxjs/toolkit';

import {
CREATECOURSE_REQUEST ,
CREATECOURSE_SUCCESS ,
CREATECOURSE_FAIL ,
 
DELETECOURSE_REQUEST,
DELETECOURSE_SUCCESS ,
DELETECOURSE_FAIL ,
 
ADDLECTURE_REQUEST ,
ADDLECTURE_SUCCESS ,
ADDLECTURE_FAIL ,

DELETELECTURE_REQUEST ,
DELETELECTURE_SUCCESS ,
DELETELECTURE_FAIL ,
 
GETALLUSER_REQUEST,
GETALLUSER_SUCCESS,
GETALLUSER_FAIL,
 
UPDATEUSERROLE_REQUEST,
UPDATEUSERROLE_SUCCESS,
UPDATEUSERROLE_FAIL,
 
DELETEUSER_REQUEST,
DELETEUSER_SUCCESS,
DELETEUSER_FAIL ,
 
GETDASHBOARDSTATS_REQUEST,
GETDASHBOARDSTATS_SUCCESS ,
GETDASHBOARDSTATS_FAIL ,
} from '../actions/adminActionTypes';
import { CLEAR_ERROR, CLEAR_MESSAGE } from '../actions/userTypesAction';

const initialState = {
  loading: false,
  stats: null,
  viewsCount: 0,
  subscriptionCount: 0,
  usersCount: 0,
  subscriptionPercentage: 0,
  viewsPercentage: 0,
  usersPercentage: 0,
  subscriptionProfit: 0,
  viewsProfit: 0,
  usersProfit: 0,
  users: [],
  error: null,
  message: null,
};

export const adminReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GETDASHBOARDSTATS_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(GETDASHBOARDSTATS_SUCCESS, (state, action) => {
      state.loading = false;
      const {
        stats,
        viewsCount,
        subscriptionCount,
        usersCount,
        subscriptionPercentage,
        viewsPercentage,
        usersPercentage,
        subscriptionProfit,
        viewsProfit,
        usersProfit,
      } = action.payload;
      state.stats = stats;
      state.viewsCount = viewsCount;
      state.subscriptionCount = subscriptionCount;
      state.usersCount = usersCount;
      state.subscriptionPercentage = subscriptionPercentage;
      state.viewsPercentage = viewsPercentage;
      state.usersPercentage = usersPercentage;
      state.subscriptionProfit = subscriptionProfit;
      state.viewsProfit = viewsProfit;
      state.usersProfit = usersProfit;
    })
    .addCase(GETDASHBOARDSTATS_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase(GETALLUSER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(GETALLUSER_SUCCESS, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(GETALLUSER_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(UPDATEUSERROLE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(UPDATEUSERROLE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(UPDATEUSERROLE_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(DELETEUSER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(DELETEUSER_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DELETEUSER_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(CREATECOURSE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(CREATECOURSE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(CREATECOURSE_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(DELETECOURSE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(DELETECOURSE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DELETECOURSE_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(ADDLECTURE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(ADDLECTURE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ADDLECTURE_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(DELETELECTURE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(DELETELECTURE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DELETELECTURE_FAIL, (state, action) => {
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
