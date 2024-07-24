import React from 'react';
import ItemForm from './ItemForm';
import ItemTable from './ItemTable';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      
      <ItemForm />
      <ItemTable />
    </div>
  );
};

export default HomePage;
