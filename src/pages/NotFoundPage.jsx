import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-background">
            <Helmet>
                <title>NodeTalk - Not found</title>
            </Helmet>
            <div className="text-center space-y-4">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="text-2xl text-gray-700">Oops! Page not found</p>
                <Link to="/" className="btn btn-primary mt-4">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
