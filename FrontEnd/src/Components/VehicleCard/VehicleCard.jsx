import React from 'react';

const VehicleCard = ({ title, image, price, description }) => {
  return (
    <div className="max-w-sm bg-gray-100 border-none rounded-lg transition-all duration-300 hover:bg-backColor cursor-pointer">
      <img className="rounded-t-lg" src={image} alt={title} />
      <div className="p-6">
        <h3 className="mb-5 text-4xl font-bold tracking-tight text-gray-900">{title}</h3>
        <p className="font-normal text-gray-700">{description}</p>
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{price}</h5>
      </div>
    </div>
  );
};

export default VehicleCard;
