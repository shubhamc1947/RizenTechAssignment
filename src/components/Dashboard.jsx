import React from 'react';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <HomePage />
    </div>
  );
};

export default Dashboard;
