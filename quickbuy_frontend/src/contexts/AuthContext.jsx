import React, { createContext, useReducer, useEffect } from 'react';
import api from '../api/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const initialState = { data: [], loading: false, error: null };

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_DETAILS_REQUEST":
                return { ...state, loading: true, error: null };
            case "FETCH_DETAILS_SUCCESS":
                return { ...state, data: action.payload, loading: false };
            case "FETCH_DETAILS_FAILURE":
                return { ...state, loading: false, error: action.payload }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {

    //     dispatch({ type: "FETCH_DETAILS_REQUEST" });

    //     api.get("user/findById/7")
    //         .then(response => {
    //             dispatch({ type: "FETCH_DETAILS_SUCCESS", payload: response.data });
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             dispatch({ type: "FETCH_DETAILS_FAILURE", payload: error.message });
    //         })

    // }, [])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}