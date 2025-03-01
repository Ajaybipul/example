import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { formatPrice } from '../../Utils/Womens/Womens';

const WomensCarousel = ({ products, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [images2, setImages2] = useState([]);

  useEffect(() => {
    let data = [
        { image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-030924-MAINBANNER-Z1-P3-TS-DNMX-UNDER499.jpg' },
        { image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-300824-JIT-Z11-P1-VREVODEVOGEL-JAIPURKURTI-MIN60.jpg' },
        { image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-GFS-Golive-%20Ends%208%20Sept.jpg' },
        { image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-030924-MAINBANNER-Z1-P4-KIANA-BERRYLICIOUS-MIN60.jpg' }
      ];
    localStorage.setItem("slideshow_images", JSON.stringify(data));

    let data2 = [
        { image: 'https://mercury.akamaized.net/i/60d9a8cb3e5c111325b9bdaf903cdc09_285190_0.jpg' },
        { image: 'https://mercury.akamaized.net/i/96938f95aa74d561fffe887191eaff2e_283522_0.jpg' },
        { image: 'https://mercury.akamaized.net/i/b2fba99a4093b6651ed86a902577fb80_285203_0.jpg' },
        { image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-030924-MAINBANNER-Z1-P2-NYRIKA-SVARAA-MIN65.jpg' }
      ];
    localStorage.setItem("slideshow_images2", JSON.stringify(data2));

    const slideshowImages = JSON.parse(localStorage.getItem('slideshow_images'));
    setImages(slideshowImages || []);

    const slideshowImages2 = JSON.parse(localStorage.getItem('slideshow_images2'));
    setImages2(slideshowImages2 || []);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const timer2 = setInterval(() => {
      setCurrentIndex2((prevIndex2) => (prevIndex2 + 1) % images2.length);
    }, 3000);

    return () => clearInterval(timer2);
  }, [images2.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext2 = () => {
    setCurrentIndex2((prevIndex2) => (prevIndex2 + 1) % images2.length);
  };

  const handlePrev2 = () => {
    setCurrentIndex2((prevIndex2) => (prevIndex2 - 1 + images2.length) % images2.length);
  };

  const currentImage = images[currentIndex];
  const currentImage2 = images2[currentIndex2];

  return (
    <div className="w-full">
      {/* First Carousel */}
      <div className="relative w-full mx-auto mb-8">
        <div className="flex items-center justify-between">
          <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-full hidden md:block">&#60;</button>
          <div className="relative w-full flex items-center justify-center">
            {currentImage ? (
              <>
                <img
                  src={currentImage.image}
                  alt="Slideshow"
                  className="w-full h-auto max-h-[500px] object-cover mb-4 cursor-pointer rounded-lg"
                  onClick={() => onImageClick()} // Call onImageClick without productId
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <h2 className="text-lg font-semibold text-white">{products[currentIndex]?.title || 'No Title'}</h2>
                  <div className="flex items-center text-yellow-500 text-sm font-semibold justify-center">
                    <FaStar className="mr-1" />
                    <span>{products[currentIndex]?.rating?.rate || 0} / 5</span>
                  </div>
                  <p className="text-gray-300">{formatPrice(products[currentIndex]?.price || 0)}</p>
                </div>
              </>
            ) : (
              <p>No Image Available</p>
            )}
          </div>
          <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full hidden md:block">&#62;</button>
        </div>
      </div>

      {/* Section Heading with Effect */}
      <h2 className="text-4xl font-bold text-center mb-8 glowing-text animate-bounce">
        On Trend, On Demand
      </h2>

      {/* Second Carousel */}
      <div className="relative w-full mx-auto">
        <div className="flex items-center justify-between">
          <button onClick={handlePrev2} className="p-2 bg-gray-200 rounded-full hidden md:block">&#60;</button>
          <div className="relative w-full flex items-center justify-center">
            {currentImage2 ? (
              <>
                <img
                  src={currentImage2.image}
                  alt="Slideshow"
                  className="w-full h-auto max-h-[500px] object-cover mb-4 cursor-pointer rounded-lg"
                  onClick={() => onImageClick()} // Call onImageClick without productId
                />
              </>
            ) : (
              <p>No Image Available</p>
            )}
          </div>
          <button onClick={handleNext2} className="p-2 bg-gray-200 rounded-full hidden md:block">&#62;</button>
        </div>
      </div>
    </div>
  );
};

export default WomensCarousel;
