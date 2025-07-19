import React, { useState } from 'react';
import Lottie from "lottie-react";
import forumanimation from '../../../assets/lottie/Animation - 1751941734750.json';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingPage from '../../LoadingPage';


const Banner = ({ setSearch }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const axiosSecure = useAxiosSecure();
    

    
    const { data: tagsData = [], isLoading } = useQuery({
        queryKey:["tags-filter"],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/suggestionslist-tags');
            return res.data;
        }
    })

    if(isLoading){
        return <LoadingPage/>
    }

    const suggestionsList = tagsData.map(tag =>tag.tags);
    

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        setSearch(value);

        if (value.length > 0) {
            const filtered = suggestionsList.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelect = (value) => {
        setQuery(value);
        setSearch(value);
        setSuggestions([]);
    };

    return (
        <div>
            <div className="bg-[url('assets/banner.jpg')] h-80 bg-cover bg-center">
                <div className='md:flex items-center justify-center md:py-10'>
                    <div className='space-y-4 text-center p-3 relative w-full max-w-xl'>
                        <h1 className='text-3xl lg:text-5xl font-bold'>Welcome to Our NodeTalk Forum</h1>
                        <p className='text-xl'>Share ideas, ask questions, and connect with developers worldwide</p>
                        <label className="input bg-white text-black w-full rounded">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                type="search"
                                className="w-full ml-2 outline-none bg-transparent"
                                placeholder="Search discussions by title or tag..."
                                value={query}
                                onChange={handleChange}
                            />
                        </label>

                      
                        {suggestions.length > 0 && (
                            <ul className="absolute z-10 left-0 right-0 top-[100%] mt-1 bg-white shadow rounded-md border max-h-40 overflow-y-auto">
                                {suggestions.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSelect(item)}
                                        className="p-2 hover:bg-gray-200 cursor-pointer text-left"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <Lottie className='w-60' animationData={forumanimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Banner;
