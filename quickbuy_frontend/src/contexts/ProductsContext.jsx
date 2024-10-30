import { createContext, useReducer, useEffect } from 'react';
import api from '../api/axios';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {

    const initialState = { data: [], loading: false, error: null };

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_PRODUCTS_REQUEST":
                return { ...state, loading: true, error: null };
            case "FETCH_PRODUCTS_SUCCESS":
                return { ...state, loading: false, data: action.payload };
            case "FETCH_PRODUCTS_FAILURE":
                return { ...state, loading: false, error: action.payload };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        dispatch({ type: "FETCH_PRODUCTS_REQUEST" });

        api.get('products/findAll')
            .then(response => {
                dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
                // console.log(response.data);
            })
            .catch(error => {
                dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
            })

    }, []);


    return (
        <ProductsContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductsContext.Provider>
    )
}