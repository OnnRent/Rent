import React from 'react';

const InfoCard = (props) => {
  return (
    <div className="px-5 py-5 mt-5 w-full bg-gray-100 border-none rounded-lg ">
        <h3 className="mb-7 text-3xl font-bold tracking-tight text-gray-900">{props.title}</h3>
        <p className="text-1xl font-normal text-gray-500">{props.description}</p>
    </div>
  );
}

export default InfoCard;
