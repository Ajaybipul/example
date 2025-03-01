import { Link } from "react-router-dom";

function Card({ src, alt, url }) {
  return (
    <div className="flex justify-center">
      <Link to={url}>
        <img className="hover:scale-[1.01]" src={src} alt={alt} />
      </Link>
    </div>
  );
}

export default Card;
