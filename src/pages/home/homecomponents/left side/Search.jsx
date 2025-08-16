import React, { useState } from 'react'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../../../LoadingPage';

const Search = ({ setSearch }) => {

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
      <label className="input bg-white text-black w-full rounded-xl">
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

        {suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 z-10 top-15  bg-white shadow rounded-md border overflow-y-auto">
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

      </label>
    </div>
  )
}

export default Search