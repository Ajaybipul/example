# AJIO

Description: This project is an e-commerce frontend interface inspired by AJIO, enabling users to browse products, manage carts, and authenticate securely using Firebase. It supports product browsing without login/signup and redirects users to authentication when adding items to the cart . The project features robust state management using Redux Toolkit and a responsive UI built with Tailwind CSS.

## Deployment

Vercel Deployment link :

## Tech Stack

React.js, Redux Toolkit, Firebase, Tailwind CS, React Router, react-icons, react-slick, slick-carousel and Git.

## Features

- **AJIO-Inspired Frontend**: Visually appealing interface with modern design elements inspired by AJIO.
- **User Authentication**: Supports login, signup, and secure authentication using Firebase.
- **Cart Management**: Allows users to add, remove, and view items in the cart, with smooth interaction and data handling.
- **Product Browsing Without Login**: Users can browse products without needing to log in or sign up, improving accessibility.
- **Authentication Redirect**: Redirects users to the login/signup page when trying to add items to the cart without authentication.
- **State Management**: Efficient state management using Redux Toolkit for handling user data, products, and cart.
- **Responsive Design**: Built with Tailwind CSS ensuring a responsive and intuitive user experience.
- **Search Functionality**: Allows users to search for products.

# Setup and Access instructions:

Node.js
npm
Firebase (for authentication)
Api from https://fakestoreapi.com/

## Steps to Access the App:

#### 1. Clone the repository from GitHub to your local machine.

git clone https://github.com/yanil8068/ajio.git

#### 2. Navigate to the Project Directory:

cd ajio

#### 3. Install Dependencies:

Using npm
npm install

#### 4. Configure Environment Variables:

Create a .env file in the root directory and add the following environment variables:
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTHDOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECTID=your-firebase-projectid
VITE_FIREBASE_STORAGEBUCKET=your-firebase-storagebucket
VITE_FIREBASE_MESSAGING_SENDERID=your-firebase-messaging-senderid
VITE_FIREBASE_APPID=your-firebase-appid
VITE_API_BASE_URI=https://fakestoreapi.com

#### 5. Run the Application:

_npm run dev_
This will start the app at http://localhost:5173.

#### 6. Deploy the Application:

Deploy the app to your preferred hosting service (e.g., Vercel, Netlify, or GitHub Pages).

## Development Process:

--Planning & Design:

1. The development process began with designing the app interface inspired by AJIO’s sleek and modern UI.
2. Chose React.js for the frontend due to its component-based structure and ease of development.
3. Decided on Tailwind CSS and Material UI for responsive and customizable UI components.
4. Set up state management using Redux Toolkit to handle data across different components, especially for managing user authentication and cart operations.

##

--Setting up Authentication:

1. Integrated Firebase and JWT for authentication based on API documentation.
2. Implemented login, signup, and authentication redirect to ensure users are directed to the login page when they attempt to add items to the cart without being logged in.

--Cart and Product Management:

Created features that allow users to browse products, add them to the cart, and manage the cart .
Used Redux Toolkit for global state management to ensure the cart state persisted across pages.

--Search Functionality:

Developed a search component that filters product lists based on user input, providing suggestions in real-time as they type.

##

## Challenges Faced & Solutions Implemented:

1. --Challenge: User Authentication Persistence Across Tabs:
   _Problem_: User authentication was not persistent across different tabs, causing users to log in again when switching tabs during a session.
   _Solution_: Firebase already creates a session for user after login or signup so we used it and used onAuthStateChanged function of firebase that acts as an observer to check if the user is authenticated and then everytime we load page then it observes for the authentication and then we used redux toolkit to store user everytime we got the user.

2. --Challenge: Maintaining a Responsive and Consistent UI:
   _Problem_: Ensuring the UI was responsive across different devices and screen sizes.
   _Solution_: Used Tailwind CSS for responsive and utility-based styling, ensuring the design adapted well to various screen sizes.

3. --Challenge: Handling Authentication Redirects:

_Problem_: Redirecting users to the login page when attempting to add items to the cart was initially causing page reloads infinitely.
_Solution_: user state was changing infinitely that was causing issue to we implemented to change the user state only on signup and login and when theres a user in the session.

## Authors

- [@Anil Yadav](https://github.com/yanil8068)
- [@Yogesh Ginti](https://github.com/Yogesh-Ginti)
- [@Ajay Yadav](https://github.com/Ajaybipul)
