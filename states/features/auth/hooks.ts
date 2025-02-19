import { useAppDispatch } from "@/states/hooks";
import { AppDispatch, RootState } from "@/states/store";
import { useCallback } from "react";
import { setAccessToken } from "./slice";
import { useSelector } from "react-redux";

export default function useAuth() {
    const dispatch: AppDispatch = useAppDispatch();
    const { access_token, userInfo } = useSelector((state: RootState) => state.authReducer);

    const updateAccessToken = useCallback((access_token: string) => {
        dispatch(setAccessToken(access_token));
    }, [
        dispatch
    ])

    const isAuthenticated = !!access_token;

    return {
        access_token,
        userInfo,
        isAuthenticated,
        updateAccessToken
    }
}