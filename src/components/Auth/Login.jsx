import React from 'react'
import loginImage from '../../../public/assets/images/login.jpg'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import Footer from '../Footer/Footer'
const Login = () => {
  return (
   <>
    <div
      className="flex md:flex-row justify-center items-center md:min-h-screen"
    >   <div className='flex md:size-2/4 -mt-20'>
    <img src={loginImage} alt='this is login image for subodh mart'/>
   </div>

   <form className='flex flex-col items-center mt-20 gap-10 md:w-9/12'>
    <h1 className='font-custonFont font-extrabold text-2xl md:text-3xl underline'>Login</h1>
      <input type='text' id='email' placeholder='Enter you email' required className='shadow-lg md:size-20 md:w-3/6 placeholder:text-center placeholder:text-2xl border-b-2'/>
      <input type='text' id='password' placeholder='Enter you password' required className='shadow-lg md:size-20 md:w-3/6 placeholder:text-center placeholder:text-2xl border-b-2'/>
      <button className='md:w-1/5 h-11 w-2/6 md:h-10 bg-customBlue rounded-2xl font-custonFont text-white transition-all duration-200 ease-in-out hover:bg-customRed'>Login</button>
      <h3 className='-mb-8 hover:underline hover:text-blue-500 hover:cursor-pointer'>Forget Password?</h3>
      <div className='flex flex-row gap-2'>
      <h3>Don't have an account?</h3>
      <h3 className='text-blue-500 hover:underline'><NavLink to='/signup'>Click Here</NavLink></h3>
      </div>
      <div className='flex flex-col items-center gap-y-3 -mt-7'>
        <h3>Or Sign In Using</h3>
        <div className='flex flex-row justify-center gap-2'>
        <NavLink to=""><SocialIcon url="https://google.com" /></NavLink>
        <NavLink to=""><SocialIcon url="https://facebook.com" /></NavLink>
        <NavLink to=""><SocialIcon url="https://instagram.com" /></NavLink>
        <NavLink to=""><SocialIcon url="https://twitter.com" /></NavLink>
        </div>
      </div>
   </form>
   </div>

   <Footer/>
   </>
  )
}

export default Login
