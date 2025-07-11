import React from 'react';
import { Link, Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d0d2e6] px-4">
      <div className="max-w-md w-full bg-[#A6A8BF] p-8 rounded-xl shadow-md">
        <Outlet/>
      </div>
    </div>
  );
};

export default AuthLayout;
