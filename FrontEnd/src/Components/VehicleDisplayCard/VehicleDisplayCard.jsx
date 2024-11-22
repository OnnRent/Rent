import React from 'react';
import { useNavigate } from 'react-router-dom';

const VehicleDisplayCard = (props) => {
  const navigate = useNavigate();

  // Handle "Book Now" button click
  const handleBookNow = () => {
    // Redirect to payment page (you can customize this path as needed)
    navigate('/home');
  };

  return (
    <div className="max-w-sm bg-gray-100 border-none rounded-lg transition-all duration-300 hover:bg-backColor cursor-pointer flex flex-col justify-center items-center">
      <img className="rounded-t-lg" src={props.image} alt={props.title} />
      <div className="p-5">
        <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{props.title}</h3>
        <p className="font-normal text-gray-700">{props.description}</p>
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{props.price}</h5>
        
        {/* Book Now button */}
        <button
          onClick={handleBookNow}
          className="mt-4 px-6 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default VehicleDisplayCard;
