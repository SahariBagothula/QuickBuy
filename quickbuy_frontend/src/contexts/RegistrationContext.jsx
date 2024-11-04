import { createContext } from 'react';

export const RegistrationContext = createContext();

export const RegistartionProvider = ({ children }) => {

    return (
        <RegistrationContext.Provider value={{}}>
            {children}
        </RegistrationContext.Provider>
    )
}