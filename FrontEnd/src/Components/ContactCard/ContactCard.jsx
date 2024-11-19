import React from 'react'

const ContactCard = (props) => {
  return (
    <div className="px-5 py-3 mt-5 w-96 bg-gray-100 border-none rounded-lg transition-all duration-300 hover:bg-backColor cursor-pointer">
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-500">{props.title}</h3>
        <p className="text-1xl font-normal text-gray-900">{props.description}</p>
    </div>
  )
}

export default ContactCard
