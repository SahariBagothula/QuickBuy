import { createContext, useReducer, useEffect } from 'react';
import api from '../api/axios';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {

    const initialState = { data: [], productsData: [], enteredText: "", loading: false, error: null, selectedBrands: [], selectedCategories: [], productsInCart: [], productsInWishlist: [] };

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_PRODUCTS_REQUEST":
                return { ...state, loading: true, error: null };
            case "FETCH_PRODUCTS_SUCCESS":
                return { ...state, loading: false, data: action.payload, productsData: action.payload };
            case "FETCH_PRODUCTS_FAILURE":
                return { ...state, loading: false, error: action.payload };
            case "ENTERED_TEXT":
                return { ...state, enteredText: action.payload }
            case "SEARCH_PRODUCTS":
                return { ...state, data: action.payload === "" ? state.productsData : state.productsData.filter(({ name }) => name.toLowerCase().includes(action.payload.toLowerCase())) };
            case "SORT_LOW_TO_HIGH":
                return { ...state, data: [...state.data].sort((a, b) => a.price - b.price) };
            case "SORT_HIGH_TO_LOW":
                return { ...state, data: [...state.data].sort((a, b) => b.price - a.price) };
            case "TOGGLE_BRAND_FILTER":
                const updatedBrands = state.selectedBrands.includes(action.payload)
                    ? state.selectedBrands.filter(brand => brand !== action.payload)
                    : [...state.selectedBrands, action.payload];

                const filteredData = updatedBrands.length === 0
                    ? state.productsData
                    : state.productsData.filter(({ brand }) =>
                        updatedBrands.includes(brand.toLowerCase())
                    );
                return {
                    ...state,
                    selectedBrands: updatedBrands,
                    data: filteredData,
                };

            case "TOGGLE_CATEGORY_FILTER":
                const updatedCategories = state.selectedCategories.includes(action.payload)
                    ? state.selectedCategories.filter(category => category !== action.payload)
                    : [...state.selectedCategories, action.payload];

                const filteredProducts = updatedCategories.length === 0
                    ? state.productsData
                    : state.productsData.filter(({ category }) => updatedCategories.includes(category.toLowerCase()));
                return {
                    ...state, selectedCategories: updatedCategories, data: filteredProducts
                };
            case "ADD_TO_CART":
                return { ...state, productsInCart: [...state.productsInCart, state.productsData.find(({ id }) => id === action.payload)] }
            case "ADD_TO_WISHLIST":
                return { ...state, productsInWishlist: [...state.productsInWishlist, state.productsData.find(({ id }) => id === action.payload)] }
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