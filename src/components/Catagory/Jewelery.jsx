import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

const Jewelery = () => {
    const [jewelerys, setJewelerys]= useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/category/jewelery')
        .then(response=>{
          console.log(response.data);
          setJewelerys(response.data);
        })
        .catch(error=>{
          console.log('error')
        })
      }, []);

  return (
    <>
   <div>
      {jewelerys.map((jewelery, index)=>(
        <div key={index}>
          <img src={jewelery.image} alt={jewelery.title}/>
          </div>
      ))}
    </div>
    </>
  )
}

export default Jewelery
