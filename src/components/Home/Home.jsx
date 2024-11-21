import React from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../../assets/images/client.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const navigate = useNavigate();

  const Testimonials=[
    {
      feedback: "This is amazing!",
      name: "John Doe",
      designation: "CEO, Example Inc.",
      photo:client
    },
    {
      feedback: "This is amazing!",
      name: "John Doe",
      designation: "CEO, Example Inc.",
      photo:client
    },
    {
      feedback: "This is amazing!",
      name: "John Doe",
      designation: "CEO, Example Inc.",
      photo:client
    },
    {
      feedback: "This is amazing!",
      name: "John Doe",
      designation: "CEO, Example Inc.",
      photo:client
    },
    {
      feedback: "I love this product!",
      name: "Jane Smith",
      designation: "Manager, Another Corp.",
      photo:client
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
          {
            breakpoint: 768, // For smaller screens
            settings: {
              slidesToShow: 1, // Show only 1 slide
            },
          },
        ],
  };

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

      {/* Our Products */}
      <div className="bg-gray-400">
        <div className='flex flex-row font-custonFont space-x-1 justify-center'>
          <h1 className='text-[3.5rem]'>Our</h1>
          <h1 className='text-[3.5rem] text-customRed'>Products</h1>
        </div>
      </div>







      {/* Testimonial Section */}
      <h1 className='flex justify-center mt-8 font-custonFont text-4xl underline underline-offset-1'>Client's Testimonials</h1>
      <div className='relative flex mt-14 justify-center overflow-x-hidden'>
        {/* Testimonial Slider */}
        <Slider {...settings} className="w-full shadow-lg border-2">
          {Testimonials.map((testimonial, index) => (
            <div key={index} className='p-6 m-4 rounded-lg w-auto flex flex-col items-center justify-center'>
              <img src={testimonial.photo} alt='no img' className='rounded-full size-auto mx-auto mb-3' />
              <p className='text-lg font-medium text-center'>{testimonial.feedback}</p>
              <p className='text-sm text-gray-700 text-center'>{testimonial.designation}</p>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default Home;
