import React from 'react';
import useAuth from '../hooks/useAuth';

const DashboardHome = () => {
  const { user, role } = useAuth();

  return (
    <div className="p-6">

      {role === 'admin' ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>

          <p className="text-lg mb-2">
            Welcome back! Here's what's happening with your platform.
          </p>

          <div className=" p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Admin Quick Guide</h2>
            <ul className="list-disc list-inside">
              <li>Manage Users</li>
              <li>View Reports</li>
              <li>Handle System Settings</li>
            </ul>
          </div>
        
        </>
      ) : (
        <>

          <h1 className="text-3xl font-bold mb-4">Welcome, {user?.displayName || 'User'}!</h1>

          <p className="text-lg mb-2">
            This is your dashboard. From here, you can manage your activities and view your information.
          </p>

          <div className="p-4 rounded shadow bg-[#202338]">
            <h2 className="text-xl font-semibold mb-2">User Quick Guide</h2>
            <ul className="list-disc list-inside">
              <li>View your profile</li>
              <li>Track your orders or tasks</li>
              <li>Update your settings</li>
            </ul>
          </div>

        </>
      )}
    </div>
  );
};

export default DashboardHome;
