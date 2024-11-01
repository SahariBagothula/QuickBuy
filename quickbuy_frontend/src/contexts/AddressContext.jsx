import { createContext, useEffect, useReducer } from "react";
import api from '../api/axios';

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {

    const initialState = { data: [] };

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_PRODUCTS_REQUEST":
                return { ...state, loading: true, error: null };
            case "FETCH_PRODUCTS_SUCCESS":
                return { ...state, data: action.payload, loading: false };
            case "FETCH_PRODUCTS_FAILED":
                return { ...state, error: action.payload, loading: false };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "FETCH_PRODUCTS_REQUEST" });

        api.get('address/findAllAddresses')
            .then(response => {
                dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
                // console.log(response.data)
            })
            .catch(error => {
                dispatch({ type: "FETCH_PRODUCTS_FAILED", payload: error.message });
            })

    }, [])

    return (
        <AddressContext.Provider value={{ state, dispatch }}>
            {children}
        </AddressContext.Provider>
    )
}