import React from 'react';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {

    // Navigate users to children when isAuthenticated is true else navigate to '/login'
   
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;//write your logic here

};

export default PrivateRoute;
