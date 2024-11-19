import React from 'react'
import chooseImage from '../../assets/choose.png';

const WhyToChoose = () => {
  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 bg-white text-black">
      {/* Hero Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-4 sm:text-left ml-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-7">Why Choose OnnRent.Com?</h1>
          <p className=" text-lg sm:text-xl font-medium text-gray-600">
            Join our satisfied customers who trust us for their journeys. We serve with a lot of values that you can feel directly.
          </p>
          <div className='mt-5 flex flex-wrap justify-start w-full'>
                <button className="px-6 py-2 m-2 text-sm sm:text-base  rounded-full border-2 border-backColor text-backColor transition-all duration-300 hover:bg-backColor hover:text-white">
                Easy Booking
                </button>
                <button className="px-6 py-2 m-2 text-sm sm:text-base  rounded-full border-2 border-backColor text-backColor transition-all duration-300 hover:bg-backColor hover:text-white">
                Affordable Rates
                </button>
                <button className="px-6 py-2 m-2 text-sm sm:text-base rounded-full border-2 border-backColor text-backColor transition-all duration-300 hover:bg-backColor hover:text-white">
                Quality and Variety
                </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={chooseImage}
            alt="Hero"
            className="w-full sm:w-[300px] lg:w-[400px] h-auto object-cover sm:scale-105 lg:scale-110 mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default WhyToChoose
