import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, selectUsers } from "./Redux/Authentication/usersSlice";
import { auth } from "./firebase/config";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Homepage/Home";

import { Header } from "./Components/Header/Header";

import WomensPage from "./Pages/Womens/Womens";
import WomensProductsListPage from "./Pages/Womens/WomensProductsList";
import MensProductsListPage from "./Pages/Mens/MensProductsList";
import MensProductDetailsPage from "./Pages/Mens/MensProductsDetails";
import JewelleryPage from "./Pages/Jewellery/Jewellery";
import JewelleryProductDetailsPage from "./Pages/Jewellery/JewelleryProductDetails";
import Cart from "./Pages/Cart/Cart";
import DeliveryDetails from "./Components/Cart/DeliveryDetails";
import JewelleryProductsListPage from "./Pages/Jewellery/JewelleryProductList";
import WomensProductDetailsPage from "./Pages/Womens/WomensProductDetails";
import PaymentPage from "./Components/Cart/PaymentPage";
import WishlistPage from "./Pages/Wishlist/Wishlist";
import MensPage from "./Pages/Mens/Mens";

import Electronics from "./Pages/Electronics/Electronics";
import AllProduct from "./Pages/Electronics/AllProduct";
import Product from "./Pages/Electronics/Product";
import Footer from "./Components/Footer/Footer";

//
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUsers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(setUser({ id: user.uid, email: user.email }));
      } else {
        // User is signed out
        dispatch(setUser(null));
      }
      setLoading(false); // Stop loading once auth state is resolved
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while checking auth
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {user.currentUser ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/electronics/products" element={<AllProduct />} />
            <Route path="/electronics/products/:id" element={<Product />} />

            <Route path="/mens" element={<MensPage />} />
            <Route path="/mens/products" element={<MensProductsListPage />} />
            <Route
              path="/mens/:productId"
              element={<MensProductDetailsPage />}
            />
            <Route path="/womens" element={<WomensPage />} />
            <Route
              path="/womens/products"
              element={<WomensProductsListPage />}
            />
            <Route
              path="/womens/:productId"
              element={<WomensProductDetailsPage />}
            />
            <Route path="/jewellery" element={<JewelleryPage />} />
            <Route
              path="/jewellery/products"
              element={<JewelleryProductsListPage />}
            />
            <Route
              path="/jewellery/:productId"
              element={<JewelleryProductDetailsPage />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/delivery-details" element={<DeliveryDetails />} />
            <Route path="/payment" element={<PaymentPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mens" element={<MensPage />} />
            <Route path="/mens/products" element={<MensProductsListPage />} />
            <Route
              path="/mens/:productId"
              element={<MensProductDetailsPage />}
            />
            <Route path="/womens" element={<WomensPage />} />
            <Route
              path="/womens/products"
              element={<WomensProductsListPage />}
            />
            <Route
              path="/womens/:productId"
              element={<WomensProductDetailsPage />}
            />
            <Route path="/jewellery" element={<JewelleryPage />} />
            <Route
              path="/jewellery/products"
              element={<JewelleryProductsListPage />}
            />
            <Route
              path="/jewellery/:productId"
              element={<JewelleryProductDetailsPage />}
            />

            <Route path="/electronics" element={<Electronics />} />
            <Route path="/electronics/products" element={<AllProduct />} />
            <Route path="/electronics/products/:id" element={<Product />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
