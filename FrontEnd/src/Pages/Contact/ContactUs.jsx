import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import ContactCard from '../../Components/ContactCard/ContactCard'

const ContactUs = () => {
  return (
    <div className="min-h-screen container mx-auto py-3 px-6 md:px-20 lg:px-32 bg-white text-black">
        <PageHeader location="HOME / CONTACT" description="Get in Touch with Us"/>
        <div className='grid justify-center items-center '>
            <ContactCard title="Phone" description="+91-8279633261"/>
            <ContactCard title="Email" description="vkarnwal@gmail.com"/>
            <ContactCard title="Location" description="Clement Town, Dehradun"/>
        </div>
    </div>
  )
}

export default ContactUs
