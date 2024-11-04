import { createContext, useReducer } from 'react';

export const RegistrationContext = createContext();

export const RegistartionProvider = ({ children }) => {

    const initialState = { userDetails: null, loading: false, error: null };

    const reducer = (state, action) => {
        switch (action.type) {
            case "":
                return state;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <RegistrationContext.Provider value={{ state, dispatch }}>
            {children}
        </RegistrationContext.Provider>
    )
}