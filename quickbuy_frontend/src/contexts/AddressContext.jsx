import React, { createContext, useEffect, useReducer } from "react";
import axiosInstance from "../api/axios";
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {

    const initialState = {
        data: [], modal: false,
        houseNumber: "",
        street: "",
        city: "",
        stateName: "",
        pincode: "",
        country: "",
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_PRODUCTS_REQUEST":
                return { ...state, loading: true, error: null };
            case "FETCH_PRODUCTS_SUCCESS":
                return { ...state, data: action.payload, loading: false };
            case "FETCH_PRODUCTS_FAILED":
                return { ...state, error: action.payload, loading: false };
            case "TOGGLE_MODAL":
                return { ...state, modal: !state.modal };
            case "SET_FIELD_VALUE":
                return { ...state, [action.field]: action.value };
            case "RESET_FORM":
                return { initialState };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const addAddress = async () => {
        try {
            await axiosInstance.post("/address/add", {
                houseNumber: state.houseNumber,
                street: state.street,
                city: state.city,
                stateName: state.stateName,
                pincode: state.pincode,
                country: state.country,
            });
            Swal.fire({
                icon: 'success',
                title: 'Registartion',
                text: "Address added successfully",
                customClass: {
                    popup: 'signup-swal-popup',
                    title: 'signup-swal-title',
                    content: 'signup-swal-content',
                    confirmButton: 'signup-swal-button',
                },
            })
            dispatch({ type: "RESET_FORM" })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data || "An error has occurred. Please try again. ",
                customClass: {
                    popup: 'signup-swal-popup',
                    title: 'signup-swal-title',
                    content: 'signup-swal-content',
                    confirmButton: 'signup-swal-button',
                },
            });
        }
    }

    useEffect(() => {

        const token = localStorage.getItem("token");
        const { userId } = jwtDecode(token);


        dispatch({ type: "FETCH_PRODUCTS_REQUEST" });

        axiosInstance.get(`address/findAll/${userId}`)
            .then(response => {
                dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
                // console.log(response.data)
            })
            .catch(error => {
                dispatch({ type: "FETCH_PRODUCTS_FAILED", payload: error.message });
            })

    }, [])

    return (
        <AddressContext.Provider value={{ state, dispatch, addAddress }}>
            {children}
        </AddressContext.Provider>
    )
}