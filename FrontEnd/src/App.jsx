import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ContactUs from './Pages/Contact/ContactUs'
import AboutUs from './Pages/AboutUs/AboutUs'
import FAQ from './Pages/FAQ/FAQ'
import Home from './Pages/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Collections from './Pages/Collections/Collections'
import 'react-toastify/ReactToastify.css'


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
            <Route path='/collections' element={<Collections/>}/>
          </Routes>     
          <Footer/>
        
      </BrowserRouter>
    </div>
  )
}

export default App
