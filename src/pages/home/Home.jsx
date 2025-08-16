import React, { useState } from 'react';
import Banner from './homecomponents/Banner';
import TagsSection from './homecomponents/left side/TagsSection';
import Post from './homecomponents/right side/Post';
import SortPosts from './homecomponents/left side/SortPosts';
import Announcements from './homecomponents/left side/Announcements';
import { Helmet } from 'react-helmet';
import Search from './homecomponents/left side/Search';

const Home = () => {
    const [sortType , setSortType] = useState();
    const [search, setSearch] = useState('')
    return (
        <div className='bg-background'>
            <Helmet>
                <title>NodeTalk</title>
            </Helmet>
            <Banner />
            <div className="grid grid-cols-1 gap-5 w-11/12 mx-auto md:grid-cols-1 lg:grid-cols-4 lg:grid-flow-col-dense py-10">

                {/* right side (sidebar) */}
                <div className="lg:col-span-1 order-first lg:order-last space-y-5 md:py-20">
                    <div className=' lg:sticky top-20 z-50'>
                        <Search  setSearch={setSearch}/>
                    </div>
                    <Announcements/>
                    <TagsSection setSearch={setSearch}/>
                    <SortPosts setSortType={setSortType}/>
                </div>

                {/* left-side (main content) */}
                <div id="post" className="lg:col-span-3 md:py-20">
                    <Post sortType={sortType} search={search}/>
                </div>

            </div>

        </div>
    );
};

export default Home;