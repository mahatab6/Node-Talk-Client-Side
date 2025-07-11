import { useQuery } from '@tanstack/react-query';
import React  from 'react';
import useAxiosToken from './useAxiosToken';

const useUserRole = () => {

    const axiosSecureJWT = useAxiosToken();

    const {data:role , isLoading} = useQuery({
        queryKey: ["user-role"],
        queryFn: async () => {
            const res = await axiosSecureJWT.get('/user-role')
            return res.data;
        }
    })

    console.log(role)
    return {role , isLoading};
};

export default useUserRole;