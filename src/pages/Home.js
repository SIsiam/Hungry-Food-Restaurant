import React from 'react';
import Events from '../components/Events/Events';
import Foods from '../components/Food/Foods';
import Header from '../components/Hero/Header';
import Modal from '../components/Model/Model';
import Reviews from '../components/Reviews/Reviews';
import Service from '../components/services/Service';

const Home = () => {
	return (
    <header>
      <Header />
      <Foods />
      <Events />
      <Service />
      <Modal />
      <Reviews />
    </header>
  );
};

export default Home;
