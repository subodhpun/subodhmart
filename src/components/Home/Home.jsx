import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const Testimonials=[
    {
      feedback: "This is amazing!",
      name: "John Doe",
      designation: "CEO, Example Inc."
    },
    {
      feedback: "I love this product!",
      name: "Jane Smith",
      designation: "Manager, Another Corp."
    }
  ];

  return (
    <div className='relative'>
      {/* Hero Section */}
      <div className='w-full relative z-0'>
        <img src="src\assets\images\slider-bg.jpg" alt="Background" />
        <div className='absolute z-10 justify-center items-start top-1/4 l-0 md:ml-36 flex flex-col px-8 transform animate-slide'>
          <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold font-custonFont text-customRed'>Welcome to</h2>
          <h1 className='text-3xl md:text-5xl lg:text-8xl font-extrabold font-custonFont text-customBlue'>Subodh Mart</h1>
          <button className="mt-8 px-6 py-3 bg-customRed text-white font-bold rounded-lg hover:bg-customBlue text-center text-lg sm:text-base sm:px-4 sm:py-2 md:text-xl md:px-6 md:py-3">
            Shop Now
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      {Testimonials.map((testimonial, index) => (
        <div key={index}>
           <p>{testimonial.feedback}</p>
         </div>
      ))}
     
    </div>

  );
};

export default Home;
