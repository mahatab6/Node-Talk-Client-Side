import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaFilter } from 'react-icons/fa';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoadingPage from '../../../LoadingPage';

const TagsSection = ({setSearch}) => {

    const axiosSecure = useAxiosSecure();

    const { data,isLoading } = useQuery({
        queryKey:["tags-filter"],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/tags-filter');
            return res.data;
        }
    })

    if(isLoading){
        return <LoadingPage/>
    }
    
    const handleTagClick = (tag) =>{
        setSearch(tag)
    }

    return (
        <div className=' bg-secondary  p-4 rounded-2xl' >
            <h2 className='flex items-center text-2xl gap-1 justify-center pb-2 font-bold'><FaFilter />Filter by Tags</h2>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
                {
                    data?.map((tag) => (
                    <button onClick={() => handleTagClick(tag?.tags)} key={tag?._id}  className="bg-indigo-600 cursor-pointer text-white px-3 py-1 rounded-2xl text-sm font-medium">
                        #{tag?.tags}
                    </button>
                    
                    ))
                }
            </div>
        </div>
    );
};

export default TagsSection;