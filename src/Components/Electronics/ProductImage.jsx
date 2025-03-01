function ProductImage({ image, title }) {
  return (
    <div className="flex-shrink-0 w-full lg:w-1/2">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover"
        style={{ maxHeight: '500px' }}
      />
    </div>
  );
}

export default ProductImage;