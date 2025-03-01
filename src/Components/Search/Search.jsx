import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { items } from "../../Utils/Search/constants";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filteredSuggestions = items.filter(
        (item) =>
          item.toLowerCase().includes(query) &&
          item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleClick = (suggestion) => {
    navigate(getLinkPath(suggestion));
    setQuery("");
    setSuggestions([]);
  };

  const getLinkPath = (suggestion) => {
    if (suggestion.toLowerCase().includes("women")) return "/womens/products";
    return "/mens/products";
  };

  return (
    <div>
      <div className="relative w-56">
        <div className="flex">
          <input
            type="text"
            placeholder="Search AJIO"
            className="w-[220px] px-4 py-1 rounded-l-full focus:outline-none text-black border-l-[1px] border-t-[1px] border-b-[1px] border-black"
            value={query}
            onChange={handleInputChange}
          />
          <div className="text-black px-4 py-2 bg-white border-r-[1px] border-t-[1px] border-b-[1px] border-gray-600 rounded-r-full focus:outline-none flex items-center">
            <FaMagnifyingGlass />
          </div>
        </div>
        {suggestions.length > 0 && (
          <ul className="z-10 overflow-hidden max-h-72 absolute left-0 mt-1 w-full bg-white border border-gray-400 rounded-md text-black">
            {suggestions.map((suggestion, index) => (
              <li
                onClick={() => handleClick(suggestion)}
                key={index}
                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
