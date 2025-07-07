import React from 'react';
import { Link, Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-md w-full bg-base-200 p-8 rounded-xl shadow-md">
        <Outlet/>
      </div>
    </div>
  );
};

export default AuthLayout;
