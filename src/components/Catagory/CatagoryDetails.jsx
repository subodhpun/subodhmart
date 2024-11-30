import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer';

const CategoryDetails = ({slider}) => {
  const { category } = useParams(); // Access the dynamic 'category' parameter
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log('Error fetching category details:', error);
      });
  }, [category]);

  return (
    <>
    <div>
      {slider}
    </div>
    <div>
      <h1 className='font-custonFont text-3xl md:text-4xl flex justify-center mt-8 md:m-8 underline'>Products In &nbsp; <span className='text-customRed first-letter:uppercase underline decoration-customRed'>{category}</span></h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 p-4 m-20 shadow-sm">
        {products.map((product) => (
          <div key={product.id} className="relative flex flex-col w-full p-4 rounded shadow-lg border-4 transition-all duration-700 ease-in-out hover:scale-110">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm">{product.description.substring(0, 100)}...</p>
            <p className="font-bold">${product.price}</p>
            <div className="absolute h-full w-11/12 p-4 flex flex-col justify-center items-center text-white gap-2 opacity-0 transition-all duration-200 ease-in-out hover:opacity-100 hover:bg-white hover:bg-opacity-50 ">
                <h3 className='bg-customRed md:w-1/2 p-1 w-auto flex justify-center rounded-lg '>Add To Cart</h3>
                <h3 className='bg-customBlue md:w-1/2 p-1 flex justify-center  rounded-lg'>Buy Now</h3>
              </div>
          </div>
        ))}
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default CategoryDetails;
