import { createContext, useReducer } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';

export const RegistrationContext = createContext();

export const RegistartionProvider = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)

    const initialState = {
        fullname: "",
        username: "",
        email: "",
        mobilenumber: "",
        gender: "",
        password: "",
        identifier: "",
        otp: "",
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_FIELD_VALUE":
                return { ...state, [action.field]: action.value };
            case "RESET_FORM":
                return initialState;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const registerUser = async () => {
        try {
            await axios.post("http://localhost:8080/user/register", {
                fullname: state.fullname,
                username: state.username,
                email: state.email,
                mobilenumber: state.mobilenumber,
                gender: state.gender,
                password: state.password,
            });
            Swal.fire({
                icon: 'success',
                title: 'Registartion',
                text: "Please check your email to complete the registration",
                customClass: {
                    popup: 'signup-swal-popup',
                    title: 'signup-swal-title',
                    content: 'signup-swal-content',
                    confirmButton: 'signup-swal-button',
                },
            })
                .then(() => {
                    navigate("/verify");
                })
            dispatch({ type: "RESET_FORM" });
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

    const verifyUser = async () => {
        try {
            await axios.post("http://localhost:8080/user/verifyOtp", {
                identifier: state.identifier,
                otp: state.otp,
            })
            Swal.fire({
                icon: 'success',
                title: 'Verification successful!',
                text: 'Registration successful, you can now shop.',
                customClass: {
                    popup: 'swal-popup'
                }
            })
                .then(() => {
                    navigate("/login")
                })
            dispatch({ type: "RESET_FORM" });
        } catch (error) {
            console.log(`Error response: ${error.response}`);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data || "An error occurred. Please try again.",
                customClass: {
                    popup: 'swal-popup' // Custom class for additional styling
                }
            });
        }
    }

    const loginUser = async () => {
        try {
            await axios.post("http://localhost:8080/user/login", {
                identifier: state.identifier,
                password: state.password
            });
            Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                text: 'You can now shop.',
                customClass: {
                    popup: 'swal-popup'
                }
            })
                .then(() => {
                    navigate(location?.state?.from?.pathname);
                });
            dispatch({ type: "RESET_FORM" });
        } catch (error) {
            console.log(`Error response: ${error.response}`);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data || "An error occurred. Please try again.",
                customClass: {
                    popup: 'swal-popup'
                }
            });
        }
    }


    return (
        <RegistrationContext.Provider value={{ state, dispatch, registerUser, verifyUser, loginUser }}>
            {children}
        </RegistrationContext.Provider>
    )
}