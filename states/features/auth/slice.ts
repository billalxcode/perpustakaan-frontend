import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthInfoState {
    email: string;
    name: string;
    avatar: string;
}

export interface AuthState {
    userInfo: AuthInfoState,
    access_token: string,

}

const initialState: AuthState = {
    userInfo: {
        email: "",
        name: "",
        avatar: ""
    },
    access_token: ""
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.access_token = action.payload;
        },
        setUserInfo: (state, action: PayloadAction<AuthInfoState>) => {
            state.userInfo = action.payload;
        }
    }
})

export const authReducer = authSlice.reducer;
export const { setAccessToken, setUserInfo} = authSlice.actions