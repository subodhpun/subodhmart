import React from 'react'
import SignupImage from '../../../public/assets/images/signup.jpg'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import Footer from '../Footer/Footer'
const Signup = () => {
  return (
   <>
    <div
      className="flex flex-row justify-center items-center min-h-screen"
    >   <div className='flex size-2/4 -mt-20'>
    <img src={SignupImage} alt='this is login image for subodh mart'/>
   </div>

   <form className='flex flex-col items-center mt-20 gap-10 w-9/12'>
    <h1 className='font-custonFont font-extrabold text-3xl underline'>Signup</h1>
      <input type='text' id='email' placeholder='Enter you email' required className='shadow-lg size-10 w-3/6 placeholder:text-center placeholder:text-2xl border-b-2'/>
      <input type='text' id='password' placeholder='Enter you password' required className='shadow-lg size-10 w-3/6 placeholder:text-center placeholder:text-2xl border-b-2'/>
      <input type='number' id='phone' placeholder='Enter you phone number' required className='shadow-lg size-10 w-3/6 placeholder:text-center placeholder:text-2xl border-b-2'/>
      <button className='w-1/5 h-10 bg-customBlue rounded-2xl font-custonFont text-white transition-all duration-200 ease-in-out hover:bg-customRed'>Signup</button>
      <div className='flex flex-row gap-2'>
      <h3>Already has account?</h3>
      <h3 className='text-blue-500 hover:underline'><NavLink to='/Login'>Click Here</NavLink></h3>
      </div>
      <div className='flex flex-col items-center gap-y-3 -mt-7'>
        <h3>Or Sign Up Using</h3>
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

export default Signup
