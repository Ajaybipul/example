import { auth } from "../../firebase/config";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUsers } from "../../Redux/Authentication/usersSlice";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Login from "../../Pages/Login/Login";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import SearchBigScreen from "../Search/SearchBigScreen";

// Header component for the website
export const Header = () => {
  // Local state to handle the popup for login/signup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Redux dispatch for state management and navigation for routing
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetching the current user from the Redux store
  const user = useSelector(selectUsers);
  // console.log("auth.currentUser", auth.currentUser);

  // Function to toggle the login/signup popup
  function togglePopup() {
    setIsPopupOpen((prevState) => !prevState);
  }

  // Function to handle the sign-out process
  function handleSignOut() {
    if (confirm("Are you sure you want to log out?")) {
      signOut(auth)
        .then(() => {
          dispatch(setUser(null));
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // New function to handle click on the "like" button
  function handleLikeButtonClick() {
    if (auth.currentUser) {
      navigate("/wishlist"); // Navigate to the cart if the user is logged in
    } else {
      togglePopup(); // Open the login/signup modal if the user is not logged in
    }
  }

  function handleCartButtonClick() {
    if (auth.currentUser) {
      navigate("/cart"); // Navigate to the cart if the user is logged in
    } else {
      togglePopup(); // Open the login/signup modal if the user is not logged in
    }
  }

  return (
    <>
      <nav className="sticky top-0 flex justify-around  p-3 bg-white-800 text-black h-[90px] border-b-2 bg-white z-50">
        <div className="text-gray-600 hidden lg:flex text-5xl font-semibold items-center">
          {/* link for home page */}
          <div>
            <Link to="/">AJIO</Link>
          </div>
        </div>
        {/* links for different pages */}
        <div className="hidden lg:flex md:justify-evenly space-x-6 items-end">
          {/* Aligned to the bottom */}
          <div className="text-gray-600 cursor-pointer   text-sm ml-3 mr-3">
            <Link to="/mens"> MENS</Link>
          </div>
          <div className="text-gray-600 cursor-pointer   text-sm ml-3 mr-3">
            <Link to="/womens"> WOMENS</Link>
          </div>
          <div className="text-gray-600 cursor-pointer  text-sm ml-3 mr-3">
            <Link to="/electronics"> ELECTRONICS</Link>
          </div>
          <div className="text-gray-600 cursor-pointer  text-sm ml-2 mr-3">
            <Link to="/jewellery"> JEWELLERY</Link>
          </div>
          {/* if user already logged in then shows logout button else shows login/signup button */}
          <div className="hidden lg:flex flex-col justify-center">
            {auth.currentUser ? (
              <div className="flex">
                <div className=" text-gray-600 cursor-pointer mb-4 ml-3 text-xs flex justify-start items-start">
                  Hey {auth.currentUser.email.split("@")[0]}
                </div>
                <div
                  className=" text-gray-600 cursor-pointer mb-4 ml-3 text-xs flex justify-start items-start"
                  onClick={handleSignOut}
                >
                  Logout
                </div>
              </div>
            ) : (
              <div
                className=" text-gray-600 cursor-pointer mb-4 ml-3 text-xs flex justify-start items-start"
                onClick={togglePopup}
              >
                Sign In / Join AJIO
              </div>
            )}
            <div className="flex items-center">
              {/* search button */}
              <SearchBigScreen />
              {/* wishlist button */}
              <div
                className=" text-white bg-gray-600 cursor-pointer ml-3 border-[1px] p-2 rounded-full border-gray-600"
                onClick={handleLikeButtonClick}
              >
                <FaRegHeart />
              </div>
              {/* cart button */}
              <div
                className="text-white bg-gray-600 cursor-pointer ml-3 border-[1px] p-2 rounded-full border-gray-600"
                onClick={handleCartButtonClick}
              >
                <IoBagOutline />
              </div>
            </div>
          </div>
        </div>
        {/* search button */}
        <div className="flex-col  lg:hidden w-full">
          <div className="flex items-center space-x-4 justify-center">
            {/* search button */}

            <Search />

            {/* wishlist button */}
            <div
              className=" text-gray-600  cursor-pointer    rounded-full "
              onClick={handleLikeButtonClick}
            >
              <FaRegHeart />
            </div>

            {/* cart button */}
            <div
              className="text-gray-600  cursor-pointer   rounded-full "
              onClick={handleCartButtonClick}
            >
              <IoBagOutline />
            </div>
            {/* if user already logged in then shows logout button else shows login/signup button */}
            {auth.currentUser ? (
              <div className="flex justify-evenly">
                <div className=" text-gray-600 cursor-pointer  text-xs flex justify-center items-center">
                  <CgProfile />
                </div>
                <div
                  className=" text-gray-600 cursor-pointer  text-xs flex justify-center items-start ml-1"
                  onClick={handleSignOut}
                >
                  Logout
                </div>
              </div>
            ) : (
              <div
                className=" text-gray-600 cursor-pointer  text-xs flex justify-center items-start"
                onClick={togglePopup}
              >
                Sign In / Join AJIO
              </div>
            )}
          </div>
          {/* link for different pages */}
          <div className="flex mt-2 justify-center space-x-6 ">
            {/* Aligned to the bottom */}
            <div className="text-gray-600 cursor-pointer   text-sm ml-2 mr-2">
              <Link to="/mens"> MENS</Link>
            </div>
            <div className="text-gray-600 cursor-pointer   text-sm ml-2 mr-2">
              <Link to="/womens"> WOMENS</Link>
            </div>
            <div className="text-gray-600 cursor-pointer  text-sm ml-2 mr-2">
              <Link to="/electronics"> ELECTRONICS</Link>
            </div>
            <div className="text-gray-600 cursor-pointer  text-sm ml-2 mr-2">
              <Link to="/jewellery"> JEWELLERY</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* popup for signup and login */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white  rounded shadow-lg">
            <Login togglePopup={togglePopup} />
          </div>
        </div>
      )}
    </>
  );
};