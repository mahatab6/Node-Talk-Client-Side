import React from 'react';
import NodeTalkLogo from './NodeTalkLogo';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto bg-white py-8 text-center space-y-3">
            <div className="flex flex-col items-center space-y-2">
                <NodeTalkLogo />
                <p className="max-w-xl text-sm md:text-base leading-relaxed">
                    NodeTalk is a modern forum platform, where people can connect, share ideas,
                    and engage in meaningful discussions. Designed for speed, simplicity, and scalability.
                </p>

                <div className='max-w-xl flex gap-2'>
                    <Link to="/contact" >Contact</Link>
                    <Link to="/privacy-policy">Privacy</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>
            <div className="divider"></div>
            <p className="text-xs md:text-sm text-gray-500">
                © {new Date().getFullYear()} NodeTalk. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
