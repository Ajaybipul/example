import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon

const DeliveryDetails = () => {
    const [showForm, setShowForm] = useState(false); // State for address form visibility
    const productDetails = useSelector((state) => state.cart.items); // Get items from cart
    const totalPrice = useSelector((state) => state.cart.totalPrice); // Get total price from cart
    const navigate = useNavigate(); // Hook to navigate between pages

    // Example values for delivery and platform fees
    const deliveryFee = 50;
    const platformFee = 49;
    const orderTotal = totalPrice - 87 + deliveryFee + platformFee; // Adjusted total price with fees and discounts

    const handleAddAddressClick = () => {
        setShowForm(true); // Show the address form as a modal
    };

    const handleCloseForm = () => {
        setShowForm(false); // Close the address form
    };

    const handleProceedToPayment = () => {
        // Navigate to the payment page when clicked
        navigate('/payment');
    };

    return (
        <div className="p-4 flex flex-col min-h-screen relative">
            {/* AJIO Logo and Step Progress Bar */}
            <div className="flex flex-col items-start mb-8">
                <div className="text-4xl font-bold text-[#062f3d] mb-4">
                    AJIO
                </div>
                <div className="flex items-center space-x-4 mb-4">
                    {/* Step 1: Bag */}
                    <div className="flex items-center">
                        <div className="icon bg-[#062f3d] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            👜
                        </div>
                        <span className="ml-2">Bag</span>
                    </div>
                    <div className="line bg-gray-300 h-1 w-12"></div>
                    {/* Step 2: Delivery Details */}
                    <div className="flex items-center">
                        <div className="icon bg-[#062f3d] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            📍
                        </div>
                        <span className="ml-2">Delivery Details</span>
                    </div>
                    <div className="line bg-gray-300 h-1 w-12"></div>
                    {/* Step 3: Payment */}
                    <div className="flex items-center">
                        <div className="icon bg-gray-300 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                            ₹
                        </div>
                        <span className="ml-2 text-gray-500">Payment</span>
                    </div>
                </div>

                {/* Text and Location Icon */}
                <div className="flex items-center justify-center mt-4">
                    <FaMapMarkerAlt className="text-gray-500 text-2xl mr-2" /> Delivery Details
                    <span className="text-lg text-gray-700">We will deliver your order to this address</span>
                </div>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Your Products</h2>
                    {productDetails.map((item) => (
                        <div key={item.id} className="flex items-center mb-4 p-4 border rounded-lg shadow-lg">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-32 h-32 object-cover" 
                            />
                            <div className="ml-4">
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <p>Size: {item.size}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p className="font-bold">₹{item.price * item.quantity*83}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Details Box */}
                <div className="p-4 border w-full max-w-sm mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                    <div className="mb-4">
                        <p>Bag total: ₹{totalPrice}</p>
                        <p>Bag discount: ₹-87.00</p>
                        <p>Delivery Fee: ₹{deliveryFee}</p>
                        <p>Platform Fee: ₹{platformFee}</p>
                        <p className="font-bold">Order Total: ₹{orderTotal*83}</p>
                    </div>
                    <button 
                        className="text-white p-4 rounded w-full hover:brightness-110"
                        style={{ backgroundColor: '#684904' }} // Matches Cart page button style
                        onClick={handleProceedToPayment}
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>

            {/* Add Address Section */}
            <div className="mb-8">
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded" 
                    onClick={handleAddAddressClick}
                >
                    Add Address
                </button>
            </div>

            {/* Address Form (Pop-up Modal) */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg w-full max-w-lg relative">
                        <h2 className="text-xl font-bold mb-4">Add Your Address</h2>
                        <button 
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={handleCloseForm}
                        >
                            &times; {/* Close button */}
                        </button>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full border p-2 rounded" 
                                    placeholder="Enter your full name" 
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Phone Number</label>
                                <input 
                                    type="text" 
                                    className="w-full border p-2 rounded" 
                                    placeholder="Enter your phone number" 
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Address</label>
                                <textarea 
                                    className="w-full border p-2 rounded" 
                                    placeholder="Enter your address" 
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Pin Code</label>
                                <input 
                                    type="text" 
                                    className="w-full border p-2 rounded" 
                                    placeholder="Enter your pin code" 
                                />
                            </div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded">Save Address</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="mt-auto">
                <div className="flex flex-col items-center mt-8">
                    <img src="/Cart/cart1.png" alt="Cart 1" className="w-full h-auto object-cover mb-4" />
                    <img src="/Cart/footer.JPG" alt="Footer" className="w-full h-auto object-cover" />
                </div>
            </footer>
        </div>
    );
};

export default DeliveryDetails;
