import React from 'react';
import Banner from './homecomponents/Banner';
import TagsSection from './homecomponents/left side/TagsSection';
import Post from './homecomponents/right side/Post';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div>
                
                {/* left-side */}
                <div>
                    <TagsSection/>
                </div>

                {/* right side */}
                <div>
                    <Post/>
                </div>
            </div>
        </div>
    );
};

export default Home;