import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


const Footer = () => {
  return (
    <>
     <div className='bg-[rgb(248,248,248)] mt-1 mb-10'>
      <div className='space-y-10 ml-5 md:grid md:grid-cols-3 md:p-10 md:ml-44'>
        <div className='flex flex-col space-y-4 md:space-y-6'>
        <div className="relative flex flex-row items-center gap-4"> 
          <NavLink to='/' onClick={()=>{window.scrollTo(0,0)}}><img
            src="/assets/images/logo1.png"
            alt="no img"
            className="w-full h-20 md:h-14 ml-0 p-0"
          /></NavLink>
          <NavLink to='/' onClick={()=> window.scrollTo(0,0)}><h1 className="font-custonFont font-bold text-4xl">Subodh Mart</h1></NavLink>
        </div>
          <div className='space-y-3 md:space-y-4'>
            <h3><span className='font-[700]'>Address:</span>&nbsp;Chyasal, Lalitpur</h3>
            <h3><span className='font-[700]'>Phone:</span>&nbsp;9888568997</h3>
            <h3><span className='font-[700]'>Email:</span>&nbsp;subodhmart@gmail.com</h3>
          </div>
        </div>
        <div className='mt-20'>
          <ul className='space-y-3 md:space-y-4'>
            <li><NavLink to='/' onClick={() => window.scrollTo(0, 0)} className='font-bold hover:text-customRed'>Home</NavLink></li>
            <li><NavLink to='/Products' onClick={() => window.scrollTo(0, 0)} className='font-bold hover:text-customRed'>Products</NavLink></li>
            <li><NavLink to='/' onClick={() => window.scrollTo(0, 0)} className='font-bold hover:text-customRed'>Shop</NavLink></li>
            <li><NavLink to='/Contact' onClick={() => window.scrollTo(0, 0)} className='font-bold hover:text-customRed'>Contact</NavLink></li>
          </ul>
        </div>
        <div className='mt-20'>
          <ul className='space-y-3 md:space-y-4'>
            <li><NavLink to='' className='font-bold hover:text-customRed'>Register</NavLink></li>
            <li><NavLink to='' className='font-bold hover:text-customRed'>Login</NavLink></li>
            <li><NavLink to='' className='font-bold hover:text-customRed'>Logout</NavLink></li>
            <li><NavLink to='' className='font-bold hover:text-customRed'>Cart</NavLink></li>
          </ul>
        </div>
      </div>
      </div>


    <div className='bg-customBlue flex flex-col'>
        {/* info div */}
        <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row justify-around text-white p-4 m-8'>
            <div>
                <h2 className='text-3xl font-bold mb-3'>Reach at..</h2>
                <ul className='space-y-2'>
                    <li className='flex flex-row items-center'><FaLocationDot className='mr-1' />Kathmandu</li>
                    <li className='flex flex-row items-center'><FaPhoneVolume className='mr-1' />9888778899</li>
                    <li className='flex flex-row items-center'><MdEmail className='mr-1' />something@gmail.com</li>
                </ul>
            </div>

            <div>
                <NavLink to='/' onClick={()=> window.scrollTo(0,0)}><h2 className='text-3xl font-bold hover:text-customRed'>Subodh Mart</h2></NavLink>
                <p>Get all you items here.</p>
                <span className=' flex flex-row space-x-1 mt-2 h-auto rounded-full'>
                <NavLink><FaFacebook className='size-8'/></NavLink>
                <NavLink><FaInstagramSquare className='size-8' /></NavLink>
                <NavLink><FaLinkedin className='size-8' /></NavLink>
                <NavLink><RiTwitterXLine className='size-8' /></NavLink>
                </span>
            </div>
        </div>

        {/* footer div */}
        <footer className='flex flex-col justify-center items-center bg-[rgb(34,34,34)] p-5'>
      <p className='text-white'>&copy;{new Date().getFullYear()} <span className='text-customRed'><NavLink to='/'>Subodh Mart</NavLink> </span>All rights reserved.</p>
      <p className='text-white'>Made with ❤️ by: <NavLink><span className='text-customRed'>Subodh Kiran Pun Magar</span></NavLink></p>
      </footer>
    </div>
    </>
  )
}

export default Footer
