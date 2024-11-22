import React,{useEffect,useState} from 'react';
import heroImage from '../../assets/HeroImage.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

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

  const handleGetStarted = () => {
    if (!isLoggedIn) {
      // If not logged in, navigate to signup page
      setTimeout(() => {
        navigate('/Signup');
      }, 100);
    } else {
      setTimeout(() => {
        navigate('/collections');
      }, 100);
    }
  };


  return (
    <div className="container mx-auto py-10 px-6 md:px-20 lg:px-32 bg-white text-black">
      {/* Hero Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-4 sm:text-left ml-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">Your Journey,</h1>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">Your Vehicle,</h1>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">Your Way</h1>
          <p className="mt-6 text-lg sm:text-xl font-medium text-gray-600">
            Experience the ultimate freedom of choice with OnnRent.com - tailor your adventure by choosing from our fleet of vehicles.
          </p>
          <div className="mt-6">
            <button className="px-8 py-3 rounded-full bg-backColor text-white" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center ">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full sm:w-[300px] lg:w-[400px] h-auto object-cover sm:scale-105 lg:scale-110 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
