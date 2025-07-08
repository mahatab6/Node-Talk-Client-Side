import React  from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const Privaterouter = ({children}) => {

    const { user, loading } = useAuth();
    const location = useLocation();


    if(loading){
        return <h2>loading...........</h2>
    }

    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default Privaterouter;