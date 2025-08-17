import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import Notfound from '../../src/assets/output-onlinegiftools.gif'

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-background">
            <Helmet>
                <title>NodeTalk - Not found</title>
            </Helmet>
            <div className="text-center space-y-4">
                <img src={Notfound} alt="" />
                <Link to="/" className="btn btn-primary mt-4">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
