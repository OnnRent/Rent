import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/Contact/ContactUs'
import AboutUs from './Components/AboutUs/AboutUs'
import FAQ from './Components/FAQ/FAQ'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import 'react-toastify/ReactToastify.css'
import { useState } from 'react'


function App() {
  return (
    <div className='font-syne w-full overflow-hidden'>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/"   element={<Home/>} />
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>

        </Routes>     
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
