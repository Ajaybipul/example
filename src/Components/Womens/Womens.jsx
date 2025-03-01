import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWomensProducts } from '../../Redux/Womens/Womens';
import WomensProduct from './WomensProduct';
import WomensCarousel from '../../Ui/Womens/Carousel';
import { useNavigate } from 'react-router-dom';

const Womens = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.womens.products);
  const status = useSelector((state) => state.womens.status); 
  const error = useSelector((state) => state.womens.error);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWomensProducts());
    }
  }, [status, dispatch]);

  const handleImageClick = () => {
    navigate(`/womens/products`);
  };

  const handleProductClick = (productId) => {
    navigate(`/womens/products`);
  };

  let content;

  if (status === 'loading') {
    content = <p className="text-center">Loading...</p>;
  } else if (status === 'succeeded') {
    content = showAllProducts ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)}>
            <WomensProduct product={product} />
          </div>
        ))}
      </div>
    ) : (
      <div>
        <WomensCarousel products={products.slice(0, 4)} onImageClick={handleImageClick} />

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
                <WomensProduct product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="latest-womens-container mt-12 p-4" style={{ backgroundColor: 'rgb(100 116 139)' }}>
          <h3 className="text-3xl font-bold text-center mb-8 animate-pulse text-white">
            Latest Womens Fashion
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(-4).map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="transition-transform transform hover:scale-105"
              >
                <WomensProduct product={product} />
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

export default Womens;
