import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../Redux/Electronics/allProductSlice";
import ProductCard from "../../Ui/Electronics/ProductCard";
import { applyFilters } from "../../Utils/Filters/filters";

function AllProduct() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.allElectronicsProduct);
  const originalProducts = useSelector((state) => state.allElectronicsProduct.allElectronicsProduct);
  const [products, setProducts] = useState([]);

  const [isFilterByRating, setIsFilterByRating] = useState(false);
  const [isFilterByPrice, setIsFilterByPrice] = useState(false);
  const [isFilterByPriceAscending, setIsFilterByPriceAscending] =useState(false);
  const [isFilterByBelow50, setIsFilterByBelow50] = useState(false);
  const [isFilterByAbove50, setIsFilterByAbove50] = useState(false);
  const [isFilterByRatingAbove3, setIsFilterByRatingAbove3] = useState(false); // New filter for rating > 3
  const [isFilterByRatingBelow3, setIsFilterByRatingBelow3] = useState(false); // Filter for rating <= 3
  const [isRatingAccordionOpen, setIsRatingAccordionOpen] = useState(false);
  const [isPriceAccordionOpen, setIsPriceAccordionOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  useEffect(() => {
    const filteredProducts = applyFilters({
      originalProducts,
      isFilterByRating,
      isFilterByPrice,
      isFilterByPriceAscending,
      isFilterByBelow50,
      isFilterByAbove50,
      isFilterByRatingAbove3,
      isFilterByRatingBelow3,
    });

    setProducts(filteredProducts);
  }, [
    isFilterByRating,
    isFilterByPrice,
    isFilterByPriceAscending,
    isFilterByBelow50,
    isFilterByAbove50,
    isFilterByRatingAbove3,
    isFilterByRatingBelow3,
    originalProducts,
  ]);

  // Handlers for checkbox changes
  const handleRatingFilterChange = (e) => setIsFilterByRating(e.target.checked);
  const handlePriceFilterChange = (e) => setIsFilterByPrice(e.target.checked);
  const handlePriceFilterChangeAscending = (e) =>
    setIsFilterByPriceAscending(e.target.checked);
  const handleBelow50FilterChange = (e) =>
    setIsFilterByBelow50(e.target.checked);
  const handleAbove50FilterChange = (e) =>
    setIsFilterByAbove50(e.target.checked);
  const handleRatingAbove3FilterChange = (e) =>
    setIsFilterByRatingAbove3(e.target.checked); // Handler for new filter
  const handleRatingBelow3FilterChange = (e) =>
    setIsFilterByRatingBelow3(e.target.checked); // Handler for rating <= 3 filter

  const toggleRatingAccordion = () =>
    setIsRatingAccordionOpen(!isRatingAccordionOpen);
  const togglePriceAccordion = () =>
    setIsPriceAccordionOpen(!isPriceAccordionOpen);

  // Render spinner while data is loading
  if (status === "loading") {
    return (
      <div className="spinner-container h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  // Render error message if there's an error
  if (status === "failed") {
    return (
      <div className="error-container">
        <p className="error-message">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="lg:flex lg:justify-evenly xl:flex xl:justify-evenly 2xl:flex 2xl:justify-evenly ">
      <div className="block lg:hidden bg-gray-400  border-black border-2 ">
        <div className="flex justify-evenly items-center text-xs ">
          <span className="flex items-center text-xs font-semibold">
            Rating:{" "}
          </span>
          <div className="flex items-center my-2  bg-white p-1 rounded-lg">
            <input
              type="checkbox"
              id="filterByRating"
              checked={isFilterByRating}
              onChange={handleRatingFilterChange}
              className="mr-2"
            />
            <label htmlFor="filterByRating" className="text-gray-700">
              High to low
            </label>
          </div>
          <div className="flex items-center my-2  bg-white p-1 rounded-lg">
            <input
              type="checkbox"
              id="filterByRatingAbove3"
              checked={isFilterByRatingAbove3}
              onChange={handleRatingAbove3FilterChange}
              className="mr-2"
            />
            <label htmlFor="filterByRatingAbove3" className="text-gray-700">
              Above 3 star
            </label>
          </div>
          <div className="flex items-center my-2 bg-white p-1 rounded-lg">
            <input
              type="checkbox"
              id="filterByRatingBelow3"
              checked={isFilterByRatingBelow3}
              onChange={handleRatingBelow3FilterChange}
              className="mr-2"
            />
            <label htmlFor="filterByRatingBelow3" className="text-gray-700">
              3 and below star
            </label>
          </div>
        </div>
        <div className="flex justify-evenly  items-center text-xs">
          <span className="flex items-center text-xs font-semibold">
            Price:{" "}
          </span>

          <div className="flex items-center my-2 bg-white p-1 rounded-lg">
            <input
              type="checkbox"
              id="filterByPriceAscending"
              checked={isFilterByPriceAscending}
              onChange={handlePriceFilterChangeAscending}
              className="mr-2"
            />
            <label htmlFor="filterByPriceAscending" className="text-gray-700">
              Low to high
            </label>
          </div>
          <div className="flex items-center my-2 bg-white p-1 rounded-lg">
            <input
              type="checkbox"
              id="filterByBelow50"
              checked={isFilterByBelow50}
              onChange={handleBelow50FilterChange}
              className="mr-2"
            />
            <label htmlFor="filterByBelow50" className="text-gray-700">
              Below $15
            </label>
          </div>
          <div className="flex items-center my-2 bg-white p-1 rounded-lg">
            <input
              type="checkbox"
              id="filterByAbove50"
              checked={isFilterByAbove50}
              onChange={handleAbove50FilterChange}
              className="mr-2"
            />
            <label htmlFor="filterByAbove50" className="text-gray-700">
              Above $15
            </label>
          </div>
        </div>
      </div>
      <div className="md:ml-3 hidden lg:block ">
        <h2 className="font-bold text-xl">Refine by</h2>

        {/* Rating Accordion */}
        <div className="w-80 md:w-60 lg:w-56 2xl:w-72 overflow-hidden border border-gray-300 rounded-md mt-4">
          <button
            className="w-full text-left px-4 py-2 font-semibold bg-gray-200 border-b border-gray-300"
            onClick={toggleRatingAccordion}
          >
            Rating
          </button>
          {isRatingAccordionOpen && (
            <div className="px-4 py-2">
              <div className="flex items-center my-4">
                <input
                  type="checkbox"
                  id="filterByRating"
                  checked={isFilterByRating}
                  onChange={handleRatingFilterChange}
                  className="mr-2"
                />
                <label htmlFor="filterByRating" className="text-gray-700">
                  High to low
                </label>
              </div>
              <div className="flex items-center my-4">
                <input
                  type="checkbox"
                  id="filterByRatingAbove3"
                  checked={isFilterByRatingAbove3}
                  onChange={handleRatingAbove3FilterChange}
                  className="mr-2"
                />
                <label htmlFor="filterByRatingAbove3" className="text-gray-700">
                  Above 3 star
                </label>
              </div>
              <div className="flex items-center my-4">
                <input
                  type="checkbox"
                  id="filterByRatingBelow3"
                  checked={isFilterByRatingBelow3}
                  onChange={handleRatingBelow3FilterChange}
                  className="mr-2"
                />
                <label htmlFor="filterByRatingBelow3" className="text-gray-700">
                  3 and below star
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Price Accordion */}
        <div className="w-80 md:w-60 lg:w-56 2xl:w-72 overflow-hidden border border-gray-300 rounded-md mt-4">
          <button
            className="w-full text-left px-4 py-2 font-semibold bg-gray-200 border-b border-gray-300"
            onClick={togglePriceAccordion}
          >
            Price
          </button>
          {isPriceAccordionOpen && (
            <div className="px-4 py-2">
              <div className="flex items-center my-4">
                <input
                  type="checkbox"
                  id="filterByPrice"
                  checked={isFilterByPrice}
                  onChange={handlePriceFilterChange}
                  className="mr-2"
                />
                <label htmlFor="filterByPrice" className="text-gray-700">
                  High to low
                </label>
              </div>
              <div className="flex items-center my-4">
                <input
                  type="checkbox"
                  id="filterByPriceAscending"
                  checked={isFilterByPriceAscending}
                  onChange={handlePriceFilterChangeAscending}
                  className="mr-2"
                />
                <label
                  htmlFor="filterByPriceAscending"
                  className="text-gray-700"
                >
                  Low to high
                </label>
              </div>
              <div className="flex items-center my-4">
                <input
                  type="checkbox"
                  id="filterByBelow50"
                  checked={isFilterByBelow50}
                  onChange={handleBelow50FilterChange}
                  className="mr-2"
                />
                <label htmlFor="filterByBelow50" className="text-gray-700">
                  Below $15
                </label>
              </div>
              <div className="flex items-center my-4">
                <input
                  type="checkbox"
                  id="filterByAbove50"
                  checked={isFilterByAbove50}
                  onChange={handleAbove50FilterChange}
                  className="mr-2"
                />
                <label htmlFor="filterByAbove50" className="text-gray-700">
                  Above $15
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Display products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
