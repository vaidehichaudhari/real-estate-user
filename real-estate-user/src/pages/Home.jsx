// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

import HeroSection from './Herosection';
import PropertyCard from '../Components/PropertCard';
import FeaturedProperty from '../Components/FeaturedProperty';
import Testomonial from '../Components/Testomonial';
import Banner from './Banner';
import WhyChooseUs from '../Components/WhyChooseUS';
const Home = () => {
   const navigate = useNavigate();

  const handleSearch = (filters) => {
    // Navigate to listing with filters in state or query params
    navigate('/listing', { state: filters }); // or use URLSearchParams
  };
  return (
    <div className="home-page">
      
      <HeroSection onSearch={handleSearch}/>
   
      <FeaturedProperty/>
      <Banner/>
      <PropertyCard/>
        <WhyChooseUs/>
      
      <Testomonial/>
      
    </div>
  );
};

export default Home;