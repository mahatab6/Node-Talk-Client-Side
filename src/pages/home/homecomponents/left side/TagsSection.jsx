import React from 'react';
import { FaFilter } from 'react-icons/fa';

const TagsSection = () => {
    return (
        <div className=' bg-secondary  p-4 rounded-2xl' >
            <h2 className='flex items-center text-2xl gap-1 justify-center pb-2 font-bold'><FaFilter />Filter by Tags</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, maiores labore, similique, recusandae possimus consectetur minima expedita commodi quia dolor assumenda perspiciatis laudantium saepe iste. Neque iste rerum optio? Cum.</p>
        </div>
    );
};

export default TagsSection;