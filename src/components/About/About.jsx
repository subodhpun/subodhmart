import React from 'react';
import Footer from '../Footer/Footer'; // Assuming you have a Footer component
import delivery from '../../../public/assets/images/delivery.png';
import free from '../../../public/assets/images/free.png';
import quality from '../../../public/assets/images/quality.png';

const Pages = () => {
  return (
    <>
       <div className='flex justify-center p-14 text-4xl bg-customRed font-extrabold text-white text-[42px] text-[800]'>
      <h1>About Us</h1>
    </div>

    <div className='flex flex-col items-center m-8 mt-20 p-4'>
      <div>
        <h1 className='flex justify-center font-custonFont text-4xl text-customBlue underline'>Why Shop With Us</h1>
      </div>

      {/* cards */}
      <div className='flex flex-col w-full md:flex-row justify-around m-12 gap-12 md:gap-4'>
      <cards className='bg-customBlue flex flex-col items-center p-5 rounded-md gap-4'>
        <img src={delivery} alt='no img' className='size-40 invert'/>
        <h2 className='text-white text-xl font-bold'>Fast Delivery</h2>
      <p className='text-white w-10/12 text-justify'>Enjoy lightning-fast delivery with our reliable shipping services, ensuring your favorite products reach your doorstep quickly and hassle-free!</p>
      </cards>

      <cards className='bg-customBlue flex flex-col items-center p-5 rounded-md gap-4'>
      <img src={free} alt='no img' className='size-40 invert'/>
      <h2 className='text-white text-xl font-bold'>Free Shipping</h2>
      <p className='text-white w-10/12 text-justify'>Take advantage of our free shipping service and enjoy a seamless shopping experience, with your favorite products delivered to your doorstep at no extra cost!</p>
      </cards>

      <cards className='bg-customBlue flex flex-col items-center p-5 rounded-md gap-4'>
      <img src={quality} alt='no img' className='size-40 invert'/>
      <h2 className='text-white text-xl font-bold'>Best Quality</h2>
      <p className='text-white w-10/12 text-justify'>Discover the best quality products carefully selected to meet your highest expectations, ensuring satisfaction with every purchase you make!</p>
      </cards>
      </div>
    </div>

    {/* location map */}
    <div className='relative flex flex-col w-full mb-20 h-96 justify-center'>
    <h1 className='flex justify-center font-custonFont text-customRed text-4xl m-10'>Our Location</h1>
    <iframe className='h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28265.880309098193!2d85.3147648!3d27.6791296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19eb1dad6439%3A0xbb1689fdcee3740b!2sLabim%20Mall!5e0!3m2!1sen!2snp!4v1732696708341!5m2!1sen!2snp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    </div>

      <Footer />
    </>
  );
}
export default Pages;
