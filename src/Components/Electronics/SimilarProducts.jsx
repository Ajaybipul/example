import { RiDiscountPercentFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

function SimilarProducts({ similarProducts, handleSimilarProductClick }) {
  return (
    <div className="text-center mb-8">
      <h3 className="text-xl font-bold mb-4 inline-block px-4 py-2 text-gray-500">
        ____________________________________________________________ Similar Products ____________________________________________________________
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {similarProducts.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleSimilarProductClick(item.id)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className='flex gap-1 items-center justify-center rounded-md bg-green-500 text-white '>{item.rating.rate} <FaStar /> | {item.rating.count}</p>
            <p className="text-gray-500">Regular price: {item.price}</p>
            <p className='flex justify-center items-center text-green-500 font-semibold'><RiDiscountPercentFill />offer price: ₹{item.price - (Math.floor(Math.random() * 50) + 10)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default SimilarProducts;