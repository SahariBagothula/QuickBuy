import { createContext, useReducer, useEffect } from 'react';

import api from '../api/axios';

export const InfoDataContext = createContext();

export const InfoDataProvider = ({ children }) => {

    const initialState = { data: [], loading: false, error: null };

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_DATA_REQUEST":
                return { ...state, loading: true, error: null };
            case "FETCH_DATA_SUCCESS":
                return { ...state, loading: false, data: action.payload };
            case "FETCH_DATA_FAILED":
                return { ...state, loading: false, error: action.payload };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "FETCH_DATA_REQUEST" })
        api.get("data/findAll")
            .then(response => {
                dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
            })
            .catch(error => {
                dispatch({ type: "FETCH_DATA_FAILED", payload: error.message });
            })
    }, [])

    return (
        <InfoDataContext.Provider value={{ state, dispatch }}>
            {children}
        </InfoDataContext.Provider>
    )
}