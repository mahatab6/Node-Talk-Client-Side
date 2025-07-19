// TagDropdown.jsx
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TagDropdown = ({ control, name }) => {
    const [options, setOptions] = useState([]);


    const axiosSecure = useAxiosSecure();
        
    
        
        const { data: tagsData = [] } = useQuery({
            queryKey:["tags-filter"],
            queryFn: async ()=>{
                const res = await axiosSecure.get('/suggestionslist-tags');
                return res.data;
            }
        })

        
        useEffect(() => {
            const formatted = tagsData?.map(tag => ({
                value: tag.tags,
                label: tag.tags
            }));

            setOptions(formatted);

            }, [tagsData]
        );

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={[]}
            render={({ field }) => (
                <Select
                {...field}
                isMulti
                required
                options={options}
                placeholder="Select tags"
                className="w-full"
                styles={{
                    control: (base) => ({
                    ...base,
                    backgroundColor: '#2C2D4A',
                    borderColor: 'white',
                    borderRadius: '0.5rem',
                    padding: '2px',
                    color: '#fff',
                    }),
                    menu: (base) => ({
                    ...base,
                    backgroundColor: '#2C2D4A',
                    color: '#fff',
                    }),
                    option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused ? '#2563eb' : '#2C2D4A',
                    color: '#fff',
                    cursor: 'pointer',
                    }),
                    multiValue: (base) => ({
                    ...base,
                    backgroundColor: '#3b82f6',
                    color: '#fff',
                    }),}}
                />
            )}
        />
    );
};

export default TagDropdown;
