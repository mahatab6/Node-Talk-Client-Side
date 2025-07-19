import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <header className='sticky top-0 z-50'>
                <Navbar/>
            </header>
           <main>
                <Outlet/>
           </main>
           <footer>
            
           </footer>
            
        </>
    );
};

export default MainLayout;