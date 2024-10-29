import { createContext, useReducer, useEffect } from 'react';
import api from '../api/axios';

export const TestimonialsContext = createContext();

export const TestimonialsProvider = ({ children }) => {

    const initialState = { data: [], loading: false, error: null };

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
        dispatch({ type: "FETCH_PRODUCTS_REQUEST" })

        api.get('testimonial/findAll')
            .then(response => {
                dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
                console.log(response.data)
            })
            .catch(error => {
                dispatch({ type: "FETCH_PRODUCTS_FAILED", payload: error.message });
            })

    }, [])

    return (
        <TestimonialsContext.Provider value={{ state, dispatch }}>
            {children}
        </TestimonialsContext.Provider>
    )
}