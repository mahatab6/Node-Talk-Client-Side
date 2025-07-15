import React from 'react';
import useAuth from '../hooks/useAuth';
import AminDashboardHome from './adminDashboard/AminDashboardHome';
import useUserRole from '../hooks/useUserRole';

const DashboardHome = () => {
  const { user } = useAuth();
  const {role, isLoading} = useUserRole();

  if(isLoading){
    <p>Loading............</p>
  }

  return (
    <div className="p-6">

      {role?.role === 'admin' ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>

          <p className="text-lg mb-2">
            Welcome back! Here's what's happening with your platform.
          </p>
          <AminDashboardHome/>
        
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
