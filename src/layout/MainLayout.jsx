import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <>
            <header className='sticky top-0 z-50'>
            <Navbar/>
            </header>
           <main className='min-h-screen pt-[80px] bg-background'>
            <Outlet/>
           </main>
           <footer>
            <Footer/>
           </footer>
            
        </>
    );
};

export default MainLayout;