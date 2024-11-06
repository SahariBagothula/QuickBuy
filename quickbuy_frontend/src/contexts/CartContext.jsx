import React, { useReducer, createContext, useEffect } from 'react';
import axiosInstance from '../api/axios';
import { jwtDecode } from 'jwt-decode';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const initialState = { cart: [], loading: false, error: null };

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_DATA":
                return { ...state, loading: true };
            case "FETCH_DATA_SUCCESS":
                return { ...state, cart: action.payload, loading: false };
            case "FETCH_DATA_FAIL":
                return { ...state, error: action.payload, loading: false };
            case "ADD_TO_CART":
                return { ...state, cart: [...state.cart, action.payload] };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        const token = localStorage.getItem("token");
        if (!token) return;
        const { userId } = jwtDecode(token);

        dispatch({ type: "FETCH_DATA" });

        axiosInstance.get(`cart/${userId}`)
            .then(response => {
                dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
            })
            .catch(error => {
                dispatch({ type: "FETCH_DATA_FAIL", payload: error.message });
            })

    }, [])


    const addToCart = async (productId) => {

        const token = localStorage.getItem("token");
        if (!token) return;
        const { userId } = jwtDecode(token);

        axiosInstance.post(`/user/${userId}/products/${productId}`)
            .then((response) => {
                dispatch({ type: "ADD_TO_CART", payload: response.data })
            })
            .catch(error => {
                dispatch({ type: "FETCH_DATA_FAIL", payload: error.message });
            })
    }

    return (
        <CartContext.Provider value={{ state, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}