import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import electronics from '../../../public/assets/images/electronics.jpg';
import jewelery from '../../../public/assets/images/jewelery.jpg'
import mens from '../../../public/assets/images/mens.jpg'
import female from '../../../public/assets/images/female.jpg'
import sale1 from '../../../public/assets/images/sale1.jpg'
import sale2 from '../../../public/assets/images/sale2.jpg'
import Footer from '../Footer/Footer';

const Products = () => {
  const [productCat, setProductCat]= useState([]);
  // const [jewelerys, setJewelerys]= useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then (response=>{
      console.log(response.data);
      setProductCat(response.data);
    })
    .catch(error=>{
      console.log('error')
    });
  },[]);

  // useEffect(()=>{
  //   axios.get('https://fakestoreapi.com/products/category/jewelery')
  //   .then(response=>{
  //     console.log(response.data);
  //     setJewelerys(response.data);
  //   })
  //   .catch(error=>{
  //     console.log('error')
  //   })
  // }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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

  const slider=(
    <div className='relative size-full shadow-md shadow-red-300 backdrop-blur-2xl'>
    <Slider {...settings} className='flex overflow-x-hidden'>
      <div className=''>
        <img src={sale1} alt='no img available' className='w-full h-96 transition-all duration-150 hover:scale-105'/>
      </div>
      <div className=''>
        <img src={sale2} alt='no img available' className='w-full h-96 transition-all duration-150 hover:scale-105'/>
      </div>
      </Slider>
    </div>
  );

  return (
    <>
    {/* passing the props */}
    {/* sale banner */}
    <div>
    {slider}
    </div>

    {/* products by category */}
    <div className='box-border flex flex-col justify-center w-full'>
      <h1 className='flex justify-center p-4 mt-10 md:m-10 text-3xl md:text-4xl  font-custonFont underline'>Products By &nbsp;<span className='text-customRed underline decoration-customRed'>Category</span></h1>
      <div className='flex flex-col md:flex-row justify-around shadow-lg m-10'>
      {productCat.map((category, index) => (
        <div key={index} className='flex flex-col items-center m-5 size-80'>
         
          <div className='flex flex-row size-full transition-all duration-500 ease-in-out hover:scale-105'>
           <NavLink to ={`/${category}`} className='flex'><img src={category=== 'electronics'? electronics: null} className='object-cover' /></NavLink>
          <NavLink to ={`/${category}`} className='flex'><img src={category=== 'jewelery'? jewelery: null} className='object-cover' /></NavLink>
          <NavLink to ={`/${category}`} className='flex'><img src={category=== "men's clothing"? mens: null} className='object-cover' /></NavLink>
          <NavLink to ={`/${category}`} className='flex'><img src={category=== "women's clothing"? female: null} className='object-cover' /></NavLink>
          </div>
        
        <div className='flex flex-row justify-center font-serif font-bold text-2xl w-full transition-all duration-300 ease-in-out hover:text-white hover:bg-customRed'>
        <NavLink to={`/${category}`}>
        <h1 className=''>{category.toUpperCase()}</h1>
        </NavLink>
        </div>
      
      </div>
      ))}
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default Products
