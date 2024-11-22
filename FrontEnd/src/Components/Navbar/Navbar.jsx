import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default state is false
  const navigate = useNavigate();

  // Check if user is logged in based on token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // If token exists, user is logged in
    }
  }, []); // Empty dependency array to run only on mount



  // Listen for changes in localStorage to update the isLoggedIn state
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!token);  // Update state based on token presence
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLoginLogout = () => {
    if (!isLoggedIn) {
      // If not logged in, navigate to signup page
      setTimeout(() => {
        navigate('/Signup');
      }, 100);
    } else {
      // If logged in, log the user out
      localStorage.removeItem('token'); // Remove the token from localStorage
      setIsLoggedIn(false); // Update state to logged out
      setTimeout(() => {
        navigate('/'); // Redirect to home page after logout
      }, 500);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className='relative top-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-white'>
        <NavLink to='/'><p className='font-semibold cursor-pointer'>OnnRent.com</p></NavLink>

        <div className='md:hidden w-7'>
          <FontAwesomeIcon icon={faBars} className="cursor-pointer" onClick={toggleMenu} />
        </div>

        <ul className='hidden md:flex gap-10 text-black'>
          <NavLink to='/' className='cursor-pointer hover:text-gray-400'>Home</NavLink>
          <NavLink to='/faq' className='cursor-pointer hover:text-gray-400'>FAQ</NavLink>
          <NavLink to='/aboutus' className='cursor-pointer hover:text-gray-400'>About Us</NavLink>
          <NavLink to='/myorders' className='cursor-pointer hover:text-gray-400'>My Orders</NavLink>
          <NavLink to='/contactus' className='cursor-pointer hover:text-gray-400'>Contact Us</NavLink>
        </ul>

        {/* Show Login/Logout button */}
        <button 
          onClick={handleLoginLogout} 
          className='hidden md:block color-white px-8 py-2 rounded-full bg-backColor text-white'>
          {isLoggedIn ? 'Log Out' : 'Login'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-5 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <FontAwesomeIcon icon={faXmark} className="w-6" onClick={toggleMenu} />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <NavLink to='/' className='px-4 py-2 rounded-full inline-block' onClick={() => { closeMenu(); }}>Home</NavLink>
          <NavLink to='/faq' className='px-4 py-2 rounded-full inline-block' onClick={() => { closeMenu(); }}>FAQ</NavLink>
          <NavLink to='/aboutus' className='px-4 py-2 rounded-full inline-block' onClick={() => { closeMenu(); }}>About Us</NavLink>
          <NavLink to='/myorders' className='px-4 py-2 rounded-full inline-block' onClick={() => { closeMenu(); }}>My Orders</NavLink>
          <NavLink to='/contactus' className='px-4 py-2 rounded-full inline-block' onClick={() => { closeMenu(); }}>Contact Us</NavLink>
        </ul>

        {/* Buttons positioned at the bottom */}
        <div className='absolute py-10 left-0 w-full px-6'>
          <button 
            onClick={() => { closeMenu(); handleLoginLogout();}}
            className='w-full px-8 py-3 rounded-full bg-backColor text-white font-semibold text-lg '>
            {isLoggedIn ? 'Log Out' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
