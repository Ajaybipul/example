import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { formatPrice } from '../../Utils/Mens/Mens';

const MensCarousel = ({ products, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [images2, setImages2] = useState([]);

  useEffect(() => {
    let data = [
      { image: 'https://assets.ajio.com/medias/sys_master/images/images/hed/h17/47554305720350/22022022-D-Unisex-banner1-p1-brands-min50-extraupto30.jpg' },
      { image: 'https://assets.ajio.com/medias/sys_master/images/images/h30/h19/47135235964958/04022022-D-unisex-trends-menswear-startingat299.jpg' },
      { image: 'https://assets.ajio.com/medias/sys_master/images/images/hb2/he0/47195299610654/04022022-D-unisex-ajiomania-exclusivebrands-johnplayes-upto70.jpg' },
      { image: 'https://assets.ajio.com/medias/sys_master/images/images/h9a/h21/47135236227102/04022022-D-unisex-trends-footwear-upto70.jpg' }
    ];
    localStorage.setItem("slideshow_images", JSON.stringify(data));

    let data2 = [
      { image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01092024-dailybannerbu-z5-p3-Celio-jack&Jones-min30.jpg' },
      { image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01092024-topbanner-z2-p3-GAS-GANT-UPTO50.jpg' },
      { image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01092024-topbanner-z2-P1-TommyHilifiger-AX-MIN40.jpg' },
      { image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01092024-topbanner-z2-p2-ADIDAS-SKECHERS-MIN30.jpg' }
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

export default MensCarousel;
