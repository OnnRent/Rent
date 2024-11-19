import React from 'react'

const PageHeader = (props) => {
  return (
    <div className='py-6'>
      <h3 className='text-2xl font-medium text-center mb-5'>{props.location}</h3>
      <h3 className="text-5xl font-bold text-center mb-12">{props.description}</h3>
    </div>
  )
}

export default PageHeader
