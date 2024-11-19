import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import chooseImage from '../../assets/choose.png';
import InfoCard from '../InfoCard/InfoCard';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-3 px-6 md:px-20 lg:px-32 bg-white text-black">
        <PageHeader location="HOME / ABOUT US" description="Who We are"/>
        {/* Hero Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={chooseImage}
            alt="Hero"
            className="w-full sm:w-[300px] lg:w-[400px] h-auto object-cover sm:scale-105 lg:scale-110 mx-auto"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-4 sm:text-left ml-10 p-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-gray-500 font-bold mb-7">Our Journey</h1>
          <p className=" text-lg sm:text-xl font-medium text-gray-600 ">
            ONNRENT.com is a new venture dedicated to redefining travel experiences through top-quality motorbike rentals. 
            We offer a diverse fleet of well-maintained bikes, ensuring every ride is smooth and unforgettable. 
            Whether you're exploring locally or afar, we're here to make your journey memorable.
          </p>
        </div>        
      </div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <InfoCard title="Quality & Variety" description="Explore our diverse fleet of meticulously maintained motorbikes, designed to ensure you always ride in style. From sleek sportbikes to rugged cruisers, we have the perfect bike for every adventure. Each motorbike is carefully maintained to the highest standards, guaranteeing not only style but also performance and reliability on every ride." />
        <InfoCard title="Easy Booking" description="Reserving your dream motorbike is a breeze with ONNRENT.com. Our user-friendly online platform make booking quick and easy. In just a few clicks, you can secure your ideal bike and hit the road, ensuring a seamless, hassle-free experience from start to finish." />
        <InfoCard title="Affordable Rates" description="We believe that great travel experiences should be accessible to everyone. That's why we offer competitive prices with no hidden fees, allowing you to enjoy high-quality, well-maintained motorbikes without breaking the bank. We're committed to making your journey comfortable, affordable, and hassle-free." />
        <InfoCard title="Customer Satisfaction" description="Our loyal customers trust ONNRENT.com for the quality of our service and the diverse selection of our motorbikes. From the moment you book to the final mile of your ride, we are committed to delivering exceptional service. We take pride in offering responsive customer support, available 24/7 to assist you. Your satisfaction is our top priority." />
      </div>
    </div>
  );
};

export default AboutUs;
