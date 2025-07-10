import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

const axiosSecureJWT = axios.create({
    baseURL: 'http://localhost:3000',
});

const useAxiosToken = () => {

    const {user } = useAuth();

    console.log(user)

    useEffect(()=>{
        if(!user)
            {return;}

        const setInterceptor = async () =>{
            const token = await user.getIdToken();

            axiosSecureJWT.interceptors.request.use(

                (config) =>{
                    if(token){
                        config.headers.Authorization = `Bearer ${token}`;
                    }
                    return config;
                },
                (error) => Promise.reject(error)
            );}

        setInterceptor();

    },[user]);

    return axiosSecureJWT;
};

export default useAxiosToken;