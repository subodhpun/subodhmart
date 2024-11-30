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
      <div className="grid md:grid-cols-4 gap-20 p-4 m-20 shadow-sm">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm">{product.description.substring(0, 100)}...</p>
            <p className="font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default CategoryDetails;
