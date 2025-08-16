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
            <div className='grid lg:grid-cols-4 gap-5 w-11/12 mx-auto py-10'>

                {/* left-side */}
                <div className='lg:col-span-1 space-y-5'>
                    <Search setSearch={setSearch}/>
                    <Announcements/>
                    <TagsSection setSearch={setSearch}/>
                    <SortPosts setSortType={setSortType}/>
                </div>

                {/* right side */}
                <div className='lg:col-span-3'>
                    <Post sortType={sortType} search={search}/>
                </div>
            </div>
        </div>
    );
};

export default Home;