import React, { useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import VehicleDisplayCard from '../../Components/VehicleDisplayCard/VehicleDisplayCard';
import axios from 'axios';

const Collections = () => {
  const [vehicleData, setVehicleData] = useState([]);

  // Fetch all products from the backend
  useEffect(() => {
    const fetchAllVehicles = async () => {
      try {
        const response = await axios.get('https://rentapi.vercel.app/api/products'); // Update with the correct endpoint
        setVehicleData(response.data); // Set the fetched data in the state
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchAllVehicles();
  }, []);

  return (
    <div className="min-h-screen container mx-auto py-3 px-6 md:px-20 lg:px-32 bg-white text-black">
      <PageHeader location="HOME / COLLECTIONS" description="Our Collections" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {vehicleData.length > 0 ? (
          vehicleData.map((vehicle, index) => (
            <VehicleDisplayCard
              key={index}
              title={vehicle.title}
              image={vehicle.image} // Assuming the image URL is stored in `vehicle.image`
              price={vehicle.price}
              description={vehicle.description}
            />
          ))
        ) : (
          <p className="flex justify-center items-center text-2xl font-bold text-center mb-2 col-span-4">
            Loading vehicles...
          </p>
        )}
      </div>
    </div>
  );
};

export default Collections;
