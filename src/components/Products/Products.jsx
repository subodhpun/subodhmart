import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

const Products = () => {
  const [productCat, setProductCat]= useState([]);

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

  return (
    <>
    <div className='flex flex-col justify-center'>
      <h1 className='flex justify-center'>Products By <span>Catagory</span></h1>
      <div>
      {productCat.map((category, index) => (
       <div key={index}>
       <h1>{category}</h1>
       </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Products
