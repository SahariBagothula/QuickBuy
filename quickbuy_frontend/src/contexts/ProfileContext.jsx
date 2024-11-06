import { useReducer, createContext, useEffect } from 'react';
import axios from 'axios';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

    const initialState = { profileData: [], loading: false, error: null };

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_PROFILE_DATA":
                return { ...state, loading: true, error: null };
            case "FETCH_DATA_SUCCESS":
                return { ...state, profileData: action.payload, loading: false };
            case "FETCH_DATA_FAIL":
                return { ...state, loading: false, error: action.payload };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "FETCH_PROFILE_DATA" });

        axios.get("http://localhost:8080/user/findById/1")
            .then((response) => {
                dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
            })
            .catch((error) => {
                dispatch({ tye: "FETCH_DATA_FAIL", payload: error.message });
            })

    }, []);

    return (
        <ProfileContext.Provider value={{ state, dispatch }}>
            {children}
        </ProfileContext.Provider>
    )
}