import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {


    const initialState = { images: [], loading: false, error: null };

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_IMAGES_REQUEST":
                return { ...state, loading: true, error: null };
            case "FETCH_IMAGES_SUCCESS":
                return { ...state, images: action.payload, loading: false };
            case "FETCH_IMAGES_FAILURE":
                return { ...state, loading: false, error: action.payload }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "FETCH_IMAGES_REQUEST" });

        axios.get("http://localhost:8080/image/findAll")
            .then(response => {
                dispatch({ type: "FETCH_IMAGES_SUCCESS", payload: response.data });
                // console.log(response.data);
            })
            .catch(error => {
                dispatch({ type: "FETCH_IMAGES_FAILURE", payload: error.message });
            })

    }, [])

    return (
        <ImagesContext.Provider value={{ state, dispatch }}>
            {children}
        </ImagesContext.Provider>
    )
}