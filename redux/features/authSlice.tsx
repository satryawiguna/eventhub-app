import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Auth = {
    user_info: object;
    access_token: string;
    is_logged_in: boolean;
}

const initialState = {
    user_info: {},
    access_token: "",
    is_logged_in: false
} as Auth

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginAction: (state, action: PayloadAction<{ user_info: object, access_token: string }>) => {
            const {user_info, access_token} = action.payload

            state.user_info = user_info
            state.access_token = access_token
            state.is_logged_in = true
        },
        logoutAction: () => initialState,
        updateUserInfoAction: (state, action: PayloadAction<{ user_info: object }>) => {
            const {user_info} = action.payload

            state.user_info = user_info
        },
        updateAccessTokenAction: (state, action: PayloadAction<{ access_token: string }>) => {
            const {access_token} = action.payload

            state.access_token = access_token
        }
    },

})

export const {
    loginAction,
    logoutAction,
    updateUserInfoAction,
    updateAccessTokenAction
} = authSlice.actions

export default authSlice.reducer
