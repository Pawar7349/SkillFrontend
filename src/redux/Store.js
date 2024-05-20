import {configureStore} from "@reduxjs/toolkit";
import { adminReducer } from "../redux/reducers/adminReducer.js";
import { courseReducer } from "../redux/reducers/courseReducer.js";
import { otherReducer } from "../redux/reducers/otherReducer.js";
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer.js";



const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        course: courseReducer,
        subscription: subscriptionReducer,
        admin: adminReducer,
        other: otherReducer,
    }
})


export default store;

export const server= "https://skillsyncback.onrender.com";

// export const server= "http://localhost:4000/api/v1";
