import React from 'react';
import logo from '../assets/NT.jpeg'
import { Link } from 'react-router';

const NodeTalkLogo = () => {
    return (
        <Link to='/' className='flex items-center gap-1'>
            <img className='w-[40px] rounded-xl' src={logo} alt="" />
            <h3 className='text-2xl font-bold'>NodeTalk</h3>
        </Link>
    );
};

export default NodeTalkLogo;