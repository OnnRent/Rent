import React, { useState } from 'react'
import { handleError, handleSuccess } from '../../util';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [signUpInfo, setSignUpInfo]=useState(
        {
            name:'',
            email:'',
            password:''
        }
    )

    const navigate=useNavigate();


    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log(name,value);
        const copysignUpInfo ={...signUpInfo};
        copysignUpInfo[name]=value;
        setSignUpInfo(copysignUpInfo)
    }


    const handleSignUp=async (e)=>{
        e.preventDefault();
        const {name, email , password}=signUpInfo;
        console.log(signUpInfo);

        try{
            const url ="http://localhost:8080/auth/signup";
            const response = await fetch(url,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(signUpInfo)
            });
            const result = await response.json();
            const {success, message , error}=result;
            if(success){
                handleSuccess(message);
                setTimeout(()=>{
                    navigate('/login');
                },1000)
            }else {
                const details=error?.details[0].message;
                handleError(details);
            }
            console.log(result);
        }catch (err){
            handleError(err);
        }
        
    }

    
  return (
    <div className='container mx-auto py-3 px-6 md:px-20 lg:px-32 bg-white text-black flex items-center justify-center'>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Sign up for OnnRent.com
            </h3>
          </div>
          
          <div className="p-4 md:p-5">
            <form onSubmit={handleSignUp} className="space-y-4" action="#">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input onChange={handleChange} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={signUpInfo.name} placeholder="John Doe" required />
              </div>
              {/* Email field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={signUpInfo.email} placeholder="name@company.com" required />
              </div>
              {/* Password field */}
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={signUpInfo.password} required />
              </div>
              {/* Remember me checkbox */}
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                  </div>
                  <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              {/* Submit button */}
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
              {/* Create account link */}
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already registered? <a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login to your account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Signup
