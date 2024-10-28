import { createContext } from 'react';

export const ImagesContext = createContext();

export const ImageProvider = ({ children }) => {
    return (
        <ImagesContext.Provider value={{}}>
            {children}
        </ImagesContext.Provider>
    )
}