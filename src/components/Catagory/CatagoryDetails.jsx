import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CategoryDetails = () => {
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
    <div>
      <h1>Products in {category}</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm">{product.description.substring(0, 100)}...</p>
            <p className="font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
