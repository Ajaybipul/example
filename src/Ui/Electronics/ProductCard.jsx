import React from 'react'
import { FaStar } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { Link } from 'react-router-dom';



function ProductCard({product}) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Link to={`/electronics/products/${product.id}`}>
        <img className='h-80' src={product.image} alt="" />
      </Link>
      <span>{product.title}</span>
      <span className='flex gap-1 items-center rounded-md px-6 bg-green-500 text-white'>{product.rating.rate}<span><FaStar /></span> | {product.rating.count}</span>
      <span>Regular price: ₹{product.price}</span>
      <span className='flex items-center text-green-500 font-semibold'><RiDiscountPercentFill />offer price: ₹{product.price - (Math.floor(Math.random() * 50) + 10)}</span>
    </div>
  )
}

export default ProductCard
