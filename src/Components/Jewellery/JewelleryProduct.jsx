import React from "react";
import { FaStar } from "react-icons/fa";
import { formatPrice } from "../../Utils/Jewellery/Jewellery";

const JewelleryProduct = ({ product, onClick }) => {
  return (
    <div
      className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out cursor-pointer flex flex-col items-center"
      onClick={onClick}
    >
      {/* Adjusted image container */}
      <div className="h-64 w-full mb-4 rounded-lg overflow-hidden flex justify-center items-center bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full w-full"
        />
      </div>
      <h2 className="text-lg font-semibold text-center">{product.title}</h2>
      <div className="flex items-center bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded w-fit my-2">
        <FaStar className="mr-1" />
        <span>{product.rating?.rate || 0} / 5</span>
      </div>
      <p className="text-gray-500 text-center">{formatPrice(product.price)}</p>
    </div>
  );
};

export default JewelleryProduct;
