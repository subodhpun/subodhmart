import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import client from '../../../public/assets/images/client.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';


const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts]=useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Number of products to display initially
  const [jewelerys, setJewelerys]=useState([])

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then(response =>{
        console.log(response.data);
        setProducts(response.data)
      })
      .catch(error => {
        console.error('Error in data fetching:', error);
      });
    }, []);

    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then(response =>{
        console.log(response.data)
        setJewelerys(response.data)
      })
      .catch(error=>{
        console.log("error found", error);
      })
    }, []);

    const handleShowMore = () => {
      setVisibleCount((prevCount) => prevCount + 4); // Load 12 more products on each click
    };


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
        <img src="/assets/images/slider-bg.jpg" alt="Background" className='w-full object-cover '/>
        <div className='absolute z-10 justify-center items-start top-1/4 l-0 md:ml-36 flex flex-col px-8 transform animate-slide'>
          <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold font-custonFont text-customRed'>Welcome to</h2>
          <h1 className='text-3xl md:text-5xl lg:text-8xl font-extrabold font-custonFont text-customBlue'>Subodh Mart</h1>
          <button className="mt-8 px-6 py-3 bg-customRed text-white font-bold rounded-lg hover:bg-customBlue text-center text-lg sm:text-base sm:px-4 sm:py-2 md:text-xl md:px-6 md:py-3">
            <NavLink to='/Products' onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>Shop Now</NavLink>
          </button>
        </div>
      </div>

      {/* Our Products */}
      <div className="relative mt-20">
       <div className='flex flex-col justify-center items-center'>
       <div className='flex flex-row font-custonFont space-x-1 justify-center'>
          <h1 className='text-[3.5rem]'>Our</h1>
          <h1 className='text-[3.5rem] text-customRed'>Products</h1>
        </div>
        <span className="w-1/6 h-6 bg-customRed [clip-path:polygon(0%_100%,50%_10%,100%_100%)]"></span>
        </div>
        
        <div className='grid sm:grid-cols-2 md:gap-20 md:grid-cols-3 lg:grid-cols-4 m-10 bg-[rgb(255,255,255)]'>
        {products.slice(0, visibleCount).map((product, index) => (
            <div key={index} className=" p-5 justify-center items-center ">
             <div className='relative p-12 w-auto rounded-lg shadow-md hover:shadow-xl size-9/12 transform transition-transform duration-700 ease-in-out hover:scale-110 hover:overflow-hidden  justify-center items-center'>
             <img
                src={product.image}
                alt={product.title}
                className="size-full"
              />
              <div className="bg-white bg-opacity-35 absolute inset-0 flex flex-col space-y-2 justify-center items-center text-white opacity-0  hover:opacity-100 ">
                <h3 className='bg-customRed w-1/2 p-1 flex justify-center rounded-lg '>Add To Cart</h3>
                <h3 className='bg-customBlue w-1/2 p-1 flex justify-center  rounded-lg'>Buy Now</h3>
              </div>
              </div>
              <div className='relative border-2'>
              <h3 className="text-center mt-2 font-semibold border-5">{product.title}</h3>
              <p className="text-center text-gray-700">${product.price}</p>
              </div>
              </div>
          ))}
        </div>
      </div>

      {visibleCount < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
              className="px-6 py-3 bg-customRed text-white rounded-lg transform  transition-colors ease-in-out duration-500 hover:bg-white hover:text-customRed hover:text-sm hover:border-2 hover:border-customRed"
          >
            Show More
          </button>
        </div>
      )}


      {/* Testimonial Section */}
      <h1 className='flex justify-center mt-20 mb-20 font-custonFont text-4xl underline underline-offset-1'>Client's Testimonials</h1>
      <div className='relative overflow-hidden pb-5 justify-center items-center ml-0 mb-2'>
        {/* Testimonial Slider */}
        <Slider {...settings} className="w-dvw mt-1 shadow-lg">
          {Testimonials.map((testimonial, index) => (
            <div key={index} className='p-6 m-4 rounded-lg w-auto h-auto flex flex-col items-center justify-center'>
              <img src={testimonial.photo} alt='no img' className='rounded-full size-auto mx-auto mb-3' />
              <p className='text-lg font-medium text-center'>{testimonial.feedback}</p>
              <p className='text-sm text-gray-700 text-center'>{testimonial.designation}</p>
            </div>
          ))}
        </Slider>
      </div>
      {/* footer */}
      
     <Footer/>

    </div>
  );
};

export default Home;
