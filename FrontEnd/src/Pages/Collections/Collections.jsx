import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import VehicleDisplayCard from '../../Components/VehicleDisplayCard/VehicleDisplayCard'
import activaImage from '../../assets/activa5g.png';
import bulletImage from '../../assets/Bullet.png';
import tvsRaiderImage from '../../assets/TVSraider.png';

const Collections = () => {

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
    <div className="min-h-screen container mx-auto py-3 px-6 md:px-20 lg:px-32 bg-white text-black">
      <PageHeader location="HOME / COLLECTIONS" description="Our Collections"/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
            {vehicleData.map((vehicle, index) => (
                <VehicleDisplayCard
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

export default Collections
