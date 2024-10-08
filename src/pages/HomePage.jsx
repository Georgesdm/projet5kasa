import React from 'react';
import Banner from '../components/Banner/Banner';
import PropertyList from '../components/PropertyList/PropertyList';

const HomePage = () => {
  return (
    <div className="fade-in">
      <Banner type="home" />
      <PropertyList />
    </div>
  );
};

export default HomePage;