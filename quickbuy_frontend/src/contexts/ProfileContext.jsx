import React, { useReducer, createContext, useEffect } from 'react';
import axiosInstance from '../api/axios';
// import { jwtDecode } from 'jwt-decode';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

    const initialState = { profileData: [], loading: false, error: null };

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_PROFILE_DATA":
                return { ...state, loading: true, error: null };
            case "FETCH_DATA_SUCCESS":
                return { ...state, profileData: action.payload, loading: false };
            case "FETCH_DATA_FAIL":
                return { ...state, loading: false, error: action.payload };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        const token = localStorage.getItem("token");
        if (!token) return;
        // const { userId } = jwtDecode(token);

        dispatch({ type: "FETCH_PROFILE_DATA" });

        axiosInstance.get("user/findById")
            .then((response) => {
                dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
            })
            .catch((error) => {
                dispatch({ type: "FETCH_DATA_FAIL", payload: error.message });
            })

    }, []);

    return (
        <ProfileContext.Provider value={{ state, dispatch }}>
            {children}
        </ProfileContext.Provider>
    )
}