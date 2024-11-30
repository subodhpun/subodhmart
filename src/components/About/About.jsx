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

    <div className='flex flex-col items-center m-8 p-4'>
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

      <Footer />
    </>
  );
}
export default Pages;
