// TagDropdown.jsx
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const TagDropdown = ({ control, name }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        // Fake data
        const fakeTags = [
            { _id: "1", name: "React" },
            { _id: "2", name: "MongoDB" },
            { _id: "3", name: "Express.js" }
        ];

        // Convert to react-select format
        const formatted = fakeTags.map(tag => ({
            value: tag.name,
            label: tag.name
        }));

        setOptions(formatted);
    }, []);

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={[]}
            render={({ field }) => (
                <Select
                {...field}
                isMulti
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
