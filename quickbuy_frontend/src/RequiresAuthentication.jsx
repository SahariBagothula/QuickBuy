import React, { useContext } from 'react';
import { ProfileContext } from './index';
import { Navigate, useLocation } from 'react-router';


export const RequiresAuthentication = ({ children }) => {

    const location = useLocation();
    const { state } = useContext(ProfileContext);

    console.log(location)

    return (
        state?.profileData.active ? children : <Navigate to="/login" state={{ from: location }}></Navigate>
    )

}