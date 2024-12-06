import React from 'react'
import loginImage from '../../../public/assets/images/login.jpg'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
   <>
   <div className='flex flex-row justify-center mt-0  ml-10 p-5 w-auto'>
   <div className='flex size-2/4'>
    <img src={loginImage} alt='this is login image for subodh mart'/>
   </div>

   <form className='flex flex-col items-center mt-24 gap-10 w-9/12'>
    <h1 className='font-custonFont font-extrabold text-3xl underline'>Login</h1>
      <input type='text' id='email' placeholder='Enter you email' required className='shadow-lg size-20 w-3/6 placeholder:text-center placeholder:text-2xl border-b-2'/>
      <input type='text' id='password' placeholder='Enter you password' required className='shadow-lg size-20 w-3/6 placeholder:text-center placeholder:text-2xl border-b-2'/>
      <button className='w-1/5 h-10 bg-customBlue rounded-2xl font-custonFont text-white transition-all duration-200 ease-in-out hover:bg-customRed'>Login</button>
      <h3 className='-mb-8 hover:underline hover:text-blue-500 hover:cursor-pointer'>Forget Password?</h3>
      <div className='flex flex-row gap-2'>
      <h3>Already has account?</h3>
      <h3 className='text-blue-500 hover:underline'><NavLink to=''>Click Here</NavLink></h3>
      </div>
   </form>
   </div>
   </>
  )
}

export default Login
