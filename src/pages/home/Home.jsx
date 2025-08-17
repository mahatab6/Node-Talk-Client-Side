import React, { useState } from 'react';
import Banner from './homecomponents/Banner';
import TagsSection from './homecomponents/right side components/TagsSection';
import Post from './homecomponents/left side/Post';
import SortPosts from './homecomponents/right side components/SortPosts';
import Announcements from './homecomponents/right side components/Announcements';
import { Helmet } from 'react-helmet';
import Search from './homecomponents/right side components/Search';
import CategoriesSection from './homecomponents/right side components/CategoriesSection';
import Newsletter from './homecomponents/downComponent/Newsletter';
import FavoriteApps from './homecomponents/downComponent/favoriteApps';

const Home = () => {
    const [sortType , setSortType] = useState();
    const [search, setSearch] = useState('')
    return (
        <div className='bg-background'>
            <Helmet>
                <title>NodeTalk</title>
            </Helmet>
            <Banner />

            <div className="grid grid-cols-1 gap-5 w-11/12 mx-auto md:grid-cols-1 lg:grid-cols-4 lg:grid-flow-col-dense ">
                {/* right side (sidebar) */}
                <div className="lg:col-span-1 order-first lg:order-last space-y-5 my-5 md:mt-20 md:mb-35">
                    <div className=' lg:sticky top-10 z-0 space-y-5'>
                        <Search setSearch={setSearch} />
                        <CategoriesSection setSearch={setSearch} />
                        <Announcements/>
                        <TagsSection setSearch={setSearch}/>
                        <SortPosts setSortType={setSortType}/>
                        
                    </div>
                </div>

                {/* left-side (main content) */}
                <div id="post" className="lg:col-span-3 md:py-20">
                    <Post sortType={sortType} search={search}/>
                </div>

            </div>

            <div className='w-11/12 mx-auto pb-20'>
                <FavoriteApps/>
                <Newsletter/>
            </div>
            
        </div>
    );
};

export default Home;