import React, { useEffect, useState } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';

const ImpressiveFleet = () => {
  const [vehicleData, setVehicleData] = useState([]);

  // Fetch best-seller vehicles on component mount
  useEffect(() => {
    // Assuming you have the correct backend URL
    const fetchBestSellers = async () => {
      try {
        const response = await fetch('https://rentapi.vercel.app/api/products/bestsellers');
        const data = await response.json();
        setVehicleData(data); // Set the best-seller data in the state
      } catch (error) {
        console.error('Error fetching best-sellers:', error);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 md:px-20 lg:px-32 bg-white text-black">
      <h3 className="text-2xl font-bold text-center mb-2">THE VEHICLES</h3>
      <h2 className="text-4xl font-extrabold text-center mb-12">Our Impressive Fleet</h2>
      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicleData.length > 0 ? (
          vehicleData.map((vehicle, index) => (
            <VehicleCard
              key={index}
              title={vehicle.title}
              image={vehicle.image}
              price={vehicle.price}
              description={vehicle.description}
            />
          ))
        ) : (
          <p className="flex justify-center items-center text-2xl font-bold text-center mb-2 col-span-3">
            Loading vehicles...
          </p>
        )}
      </div>
    </div>
  );
};

export default ImpressiveFleet;
