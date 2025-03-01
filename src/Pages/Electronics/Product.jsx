import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProductImage from "../../Components/Electronics/ProductImage";
import ProductDetails from "../../Components/Electronics/ProductDetails";
import RatingGraph from "../../Components/Electronics/RatingGraph";
import SimilarProducts from "../../Components/Electronics/SimilarProducts";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allElectronicsProduct } = useSelector((state) => state.allElectronicsProduct);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  const product = allElectronicsProduct.find((item) => item.id === parseInt(id));

  useEffect(() => {
    const fetchSimilarProducts = () => {
      const similar = allElectronicsProduct
        .filter((item) => item.id !== parseInt(id))
        .slice(0, 4);
      setSimilarProducts(similar);
    };

    fetchSimilarProducts();
  }, [allElectronicsProduct, id]);

  const handleSimilarProductClick = (similarProductId) => {
    navigate(`/electronics/products/${similarProductId}`);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  if (!product) {
    navigate('/electronics/products');
    return null; // Return null to avoid rendering anything after the navigation
  }
  

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <ProductImage image={product.image} title={product.title} />
        <ProductDetails
          product={product}
          selectedSize={selectedSize}
          handleSizeClick={handleSizeClick}
        />
      </div>
      <RatingGraph rating={product.rating} />
      <SimilarProducts
        similarProducts={similarProducts}
        handleSimilarProductClick={handleSimilarProductClick}
      />
    </div>
  );
}

export default Product;
