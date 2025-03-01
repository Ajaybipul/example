import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartItem } from '../../Redux/Cart/Cart';
import { addToWishlist } from '../../Redux/Wishlist/Wishlist';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { formatPrice } from '../../Utils/Cart/Cart';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveItem = (itemId, size) => {
        dispatch(removeFromCart({ itemId, size }));
    };

    const handleQuantityChange = (itemId, size, quantity) => {
        dispatch(updateCartItem({ itemId, size, quantity }));
    };

    const handleAddToWishlist = (item) => {
        dispatch(addToWishlist(item));
        alert(`${item.title} has been added to your wishlist!`);
    };

    const handleContinueShopping = () => {
        navigate('/');
    };

    const deliveryFee = 1;
    const platformFee = 3;
    const orderTotal = totalPrice - 4 + deliveryFee + platformFee;

    // Handle "Proceed to Shipping" button click
    const handleProceedToShipping = () => {
        navigate('/delivery-details');
    };

    return (
        <div className="p-4 flex flex-col min-h-screen">
            {/* Logo and Step Progress Bar */}
            <div className="flex flex-col items-start mb-8">
                <div className="text-4xl font-bold text-[#062f3d] mb-4">
                    AJIO
                </div>
                <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                        <div className="icon bg-[#062f3d] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            👜
                        </div>
                        <span className="ml-2">Bag</span>
                    </div>
                    <div className="line bg-gray-300 h-1 w-12"></div>
                    <div className="flex items-center">
                        <div className="icon bg-gray-300 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                            📍
                        </div>
                        <span className="ml-2 text-gray-500">Delivery Details</span>
                    </div>
                    <div className="line bg-gray-300 h-1 w-12"></div>
                    <div className="flex items-center">
                        <div className="icon bg-gray-300 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                            ₹
                        </div>
                        <span className="ml-2 text-gray-500">Payment</span>
                    </div>
                </div>
            </div>

            {/* Cart Items and Order Details */}
            {cartItems.length === 0 ? (
                <div className="flex-grow text-center">
                    <h1 className="text-3xl font-bold mb-4">Your Shopping Bag is Empty!</h1>
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded mb-4" 
                        onClick={handleContinueShopping}
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-4">My Bag ({cartItems.length} item{cartItems.length > 1 ? 's' : ''})</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div>
                            {cartItems.map((item) => (
                                <div 
                                    key={item.id} 
                                    className="relative flex items-center mb-4 p-4 border rounded-lg shadow-lg"
                                    style={{ height: '200px' }}
                                >
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-32 h-32 object-cover"
                                    />
                                    <div className="flex-grow ml-4 flex flex-col justify-between">
                                        <div>
                                            <h2 className="font-bold text-lg">{item.title}</h2>
                                            <p className="text-sm">Size: {item.size}</p>
                                            <p className="text-sm">Quantity: 
                                                <select 
                                                    value={item.quantity} 
                                                    onChange={(e) => handleQuantityChange(item.id, item.size, parseInt(e.target.value))}
                                                    className="ml-2 border p-1 rounded"
                                                >
                                                    {[...Array(10)].map((_, i) => (
                                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                    ))}
                                                </select>
                                            </p>
                                            <p className="font-bold">{formatPrice(item.price * item.quantity)}</p>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 flex space-x-2">
                                        <button 
                                            onClick={() => handleRemoveItem(item.id, item.size)} 
                                            className="text-blue-800 flex items-center"
                                        >
                                            <FaTrash className="mr-1" />
                                        </button>
                                        <button 
                                            onClick={() => handleAddToWishlist(item)} 
                                            className="text-red-600 flex items-center"
                                        >
                                            <FaHeart className="mr-1" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border w-full max-w-sm mx-auto" style={{ height: '300px' }}>
                            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                            <div className="mb-4">
                                <p>Bag total: {formatPrice(totalPrice)}</p>
                                <p>Bag discount: {formatPrice(-87)}</p>
                                <p>Delivery Fee: {formatPrice(deliveryFee)}</p>
                                <p>Platform Fee: {formatPrice(platformFee)}</p>
                                <p className="font-bold">Order Total: {formatPrice(orderTotal)}</p>
                            </div>
                            <button 
                                className="text-white p-4 rounded w-full hover:brightness-110"
                                style={{ backgroundColor: '#684904' }}
                                onClick={handleProceedToShipping}
                            >
                                Proceed to Shipping
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Footer Images */}
            <div className="flex flex-col items-center mt-auto">
                <img 
                    src="/Cart/cart1.png" 
                    alt="Cart 1" 
                    className="w-full h-auto object-cover mb-4"
                />
                <img 
                    src="/Cart/footer.JPG" 
                    alt="Footer" 
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default Cart;
