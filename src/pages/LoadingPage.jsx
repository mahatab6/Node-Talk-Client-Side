import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-background">
            <div className="text-center space-y-4">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-xl font-semibold text-gray-700">Loading, please wait...</p>
            </div>
        </div>
    );
};

export default LoadingPage;
