import React,{useEffect} from 'react';
import Hero from '../../Components/Hero/Hero';
import ImpressiveFleet from '../../Components/ImpressiveFleet/ImpressiveFleet';
import WhyToChoose from '../../Components/WhyToChoose/WhyToChoose';

const Home = () => {
  return (
    <div>
      <Hero />
      <ImpressiveFleet />
      <WhyToChoose />
    </div>
  );
};

export default Home;
