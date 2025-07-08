import React from 'react';
import Banner from './homecomponents/Banner';
import TagsSection from './homecomponents/TagsSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div>
                <TagsSection/>
            </div>
        </div>
    );
};

export default Home;