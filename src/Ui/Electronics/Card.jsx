import { Link } from "react-router-dom";

function Card({ src, alt }) {
  return (
    <div className="flex justify-center">
      <Link to="/electronics/products">
        <img className="hover:scale-105" src={src} alt={alt} />
      </Link>
    </div>
  );
}

export default Card;
