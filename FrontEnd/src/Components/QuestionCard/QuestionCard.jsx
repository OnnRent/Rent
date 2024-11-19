import React from 'react'

const QuestionCard = (props) => {
  return (
    <div className="px-5 py-3 mt-4 w-full bg-gray-100 border-none rounded-lg transition-all duration-300 hover:bg-backColor cursor-pointer">
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h3>
        <p className="text-1xl font-normal text-gray-500">{props.description}</p>
    </div>
  )
}

export default QuestionCard
