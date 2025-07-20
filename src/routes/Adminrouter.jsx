import React from 'react';
import useUserRole from '../hooks/useUserRole';
import LoadingPage from '../pages/LoadingPage';
import { Navigate } from 'react-router';

const Adminrouter = ({children}) => {

    const {role , isLoading} = useUserRole();
    

    if(isLoading){
        return <LoadingPage/>
    }

    if(!role.role === 'admin'){
        return <Navigate to='/dashboard'></Navigate>
    }

    return children;
};

export default Adminrouter;