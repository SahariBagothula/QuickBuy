import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';


export const RequiresAuthentication = ({ children }) => {

    const location = useLocation();
    const { state } = useContext(AuthContext);

    console.log(location)

    return (
        state?.data.active ? children : <Navigate to="/login" state={{ from: location }}></Navigate>
    )

}