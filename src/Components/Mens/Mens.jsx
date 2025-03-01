import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMensProducts } from '../../Redux/Mens/Mens';
import MensProduct from './MensProduct';
import MensCarousel from '../../Ui/Mens/Carousel';
import { useNavigate } from 'react-router-dom';

const Mens = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.mens.products);
  const status = useSelector((state) => state.mens.status); 
  const error = useSelector((state) => state.mens.error);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMensProducts());
    }
  }, [status, dispatch]);

  const handleImageClick = () => {
    navigate(`/mens/products`);
  };

  const handleProductClick = (productId) => {
    navigate(`/mens/products`);
  };

  let content;

  if (status === 'loading') {
    content = <p className="text-center">Loading...</p>;
  } else if (status === 'succeeded') {
    content = showAllProducts ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)}>
            <MensProduct product={product} />
          </div>
        ))}
      </div>
    ) : (
      <div>
        <MensCarousel products={products.slice(0, 4)} onImageClick={handleImageClick} />

        <div className="hot-picks-container mt-4 p-4" style={{ backgroundColor: 'rgb(100 116 139)' }}>
          <h3 className="text-3xl font-bold text-center mb-8 animate-pulse text-white">
            Today's Hot Picks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="transition-transform transform hover:scale-105"
              >
                <MensProduct product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="latest-mens-container mt-12 p-4" style={{ backgroundColor: 'rgb(100 116 139)' }}>
          <h3 className="text-3xl font-bold text-center mb-8 animate-pulse text-white">
            Latest Mens Fashion
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(-4).map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="transition-transform transform hover:scale-105"
              >
                <MensProduct product={product} />
              </div>
            ))}
          </div>
        </div>
         {/* Footer image */}
    <div className="flex justify-center">
        <img src="/Cart/footer.JPG" alt="Footer" className="max-w-full" />
      </div>
      </div>
    );
  } else if (status === 'failed') {
    content = <p className="text-center">{error}</p>;
  }

  return (
    <div className="p-4">
      <img 
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-28082024-H&M-TOPSTRIP.jpg" 
        alt="Top banner" 
        className="w-full mb-4" 
      />
      
      {content}
    </div>
  );
};

export default Mens;
