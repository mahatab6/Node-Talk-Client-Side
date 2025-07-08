import React from 'react';
import Banner from './homecomponents/Banner';
import TagsSection from './homecomponents/left side/TagsSection';
import Post from './homecomponents/right side/Post';
import SortPosts from './homecomponents/left side/SortPosts';
import Announcements from './homecomponents/left side/Announcements';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='grid lg:grid-cols-11 gap-5 w-11/12 mx-auto py-10'>

                {/* left-side */}
                <div className='lg:col-span-3 space-y-5'>
                    <Announcements/>
                    <TagsSection/>
                    <SortPosts/>
                </div>

                {/* right side */}
                <div className='lg:col-span-8'>
                    <Post/>
                </div>
            </div>
        </div>
    );
};

export default Home;