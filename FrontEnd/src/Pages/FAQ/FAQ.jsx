import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import QuestionCard from '../../Components/QuestionCard/QuestionCard'

const FAQ = () => {
  return (
    
    <div className="container mx-auto py-3 px-6 md:px-20 lg:px-32 bg-white text-black">
        <PageHeader location="HOME / FAQ" description="Frequently Asked Questions"/>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Info Cards Section */}
            <div className="grid font-semibold grid-cols">
                <h1 className='px-2 mb-3 text-2xl flex justify-start items-center'>Booking and Reservations</h1>
                <QuestionCard title="How do I book a car with OnnRent.com?" description="Booking with us is easy. Visit our website, select your preferred motorbike, set your dates, and complete the reservation in a few clicks." />
                <QuestionCard title="Can I modify or cancel my reservation?" description="You can request an modification or cancellation by contacting our customer support team. We'll assist you in extending your rental based on availability." />
                <QuestionCard title="How can I extend my rental period?" description="You can request an extension by contacting our customer support team. We'll assist you in extending your rental based on availability." />
            </div>

            <div className="grid font-semibold grid-cols">
                <h1 className='px-2 mb-3 text-2xl flex justify-start items-center'>Car Pickup and Return</h1>
                <QuestionCard title="Where can I pick up my rental car?" description="You can pick up your motorbike from one of our conveniently located branches or have it delivered to your specified location." />
                <QuestionCard title="What do I need to bring for car pickup?" description="Bring your driver's license, a valid payment method, and any required identification, such as a passport for international travelers." />
                <QuestionCard title="What's the process for returning the car?" description="Return the car to the designated location at the agreed time. Our team will inspect the vehicle, and you'll receive a final invoice in our website." />
            </div>

        </div>
    </div>
  )
}

export default FAQ
