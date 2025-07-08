import React from 'react';

const MyProfile = () => {
    return (
        <div>
            <h1>welcome my profile</h1>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-wrap gap-x-2 gap-y-2">
                        <div className="relative flex-shrink-0">
                            <span className="absolute right-0 w-4 h-4 dark:bg-green-400 border rounded-full dark:text-gray-800 dark:border-gray-50"></span>
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MyProfile;