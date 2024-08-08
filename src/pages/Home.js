import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
