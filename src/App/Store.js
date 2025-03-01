import { configureStore } from "@reduxjs/toolkit";
import allProductReducer  from "../Redux/Electronics/allProductSlice";
import usersReducer from "../Redux/Authentication/usersSlice";
import mensReducer from '../Redux/Mens/Mens';
import jewelleryReducer from '../Redux/Jewellery/Jewellery';
import cartReducer from '../Redux/Cart/Cart'
import womensReducer from '../Redux/Womens/Womens';
import WishlistReducer from '../Redux/Wishlist/Wishlist';

export default configureStore({
  reducer: {
    users: usersReducer,
    allElectronicsProduct: allProductReducer,
    mens: mensReducer,
    jewellery: jewelleryReducer,
    cart: cartReducer,
    womens:womensReducer,
    wishlist:WishlistReducer
  },
});
