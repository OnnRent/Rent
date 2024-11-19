import React from 'react';
import VehicleCard from '../VehicleCard/VehicleCard'
import activaImage from '../../assets/activa5g.png';
import bulletImage from '../../assets/Bullet.png';
import tvsRaiderImage from '../../assets/TVSraider.png';

const ImpressiveFleet = () => {

    const vehicleData=[
        {
            title:"Activa 5G",
            image: activaImage,
            price:"Rs. 500/day",
            description:"Starting at",
        },
        {
            title:"Bullet Classic",
            image: bulletImage,
            price:"Rs. 800/day",
            description:"Starting at",
        },
        {
            title:"Tvs Raider",
            image: tvsRaiderImage,
            price:"Rs. 700/day",
            description:"Starting at",
        },
    ]

  return (
    <div className="container mx-auto py-12 px-6 md:px-20 lg:px-32 bg-white text-black">
      <h3 className='text-2xl font-bold text-center mb-2'>THE VEHICLES</h3>
      <h2 className="text-4xl font-extrabold text-center mb-12">Our Impressive Fleet</h2>
      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicleData.map((vehicle, index) => (
          <VehicleCard
            key={index}
            title={vehicle.title}
            image={vehicle.image}
            price={vehicle.price}
            description={vehicle.description}
          />
        ))}
      </div>
    </div>
  )
}

export default ImpressiveFleet
