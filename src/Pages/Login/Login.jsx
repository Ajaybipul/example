import { useState } from "react";
import { auth } from "../../firebase/config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Authentication/usersSlice.js";

function Login({ togglePopup }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loginType, setLoginType] = useState("login");
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // ...
    } else {
      dispatch(setUser(null));

      // User is signed out
      // ...
    }
    if (isLoading) {
      setIsLoading(false);
    }
  });

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  }

  function handleSignup(e) {
    e.preventDefault();
    console.log("signup");
    setError("");

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        dispatch(
          setUser({
            id: userCredential.user.uid,
            email: userCredential.user.email,
          })
        );
      })
      .catch((error) => {
        //const errorCode = error.code;
        //const errorMessage = error.message;
        setError(error.message);
        // console.log(error.message);
        // console.log(errorMessage);
        // ..
      });
    togglePopup();
  }
  function handleLogin(e) {
    e.preventDefault();
    //console.log("login");
    setError("");

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        dispatch(
          setUser({
            id: userCredential.user.uid,
            email: userCredential.user.email,
          })
        );
      })
      .catch((error) => {
        setError(error.message);
      });
    togglePopup();
  }

  function handlePasswordReset() {
    const email = prompt("Please enter your email");
    sendPasswordResetEmail(auth, email);
    if (email) {
      alert("Email sent! Check your inbox for password reset instructions");
    }
  }

  return (
    <div className="flex items-center justify-center  ">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="container login-page w-full max-w-md p-8 space-y-8 bg-white  rounded-lg">
          <section>
            <div className="flex  justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded flex items-end "
                onClick={
                  // Handle sign in or join actions
                  togglePopup
                }
              >
                X
              </button>
            </div>

            <h1 className="text-3xl font-bold text-center">
              Welcome to Shop App
            </h1>
            <p className="text-center">
              Login or create an account to continue
            </p>
            <div className="login-type flex justify-center space-x-4 mb-4">
              <button
                className={`btn px-4 py-2 font-bold  rounded ${
                  loginType == "login" ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setLoginType("login")}
              >
                Login
              </button>
              <button
                className={`btn btn px-4 py-2 font-bold  rounded ${
                  loginType == "signup" ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setLoginType("signup")}
              >
                Signup
              </button>
            </div>
            <form className="add-form login space-y-4">
              <div className="form-control ">
                <label className="block text-sm font-medium">Email *</label>
                <input
                  onChange={(e) => {
                    handleCredentials(e);
                  }}
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="form-control">
                <label className="block text-sm font-medium">Password *</label>
                <input
                  onChange={(e) => {
                    handleCredentials(e);
                  }}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              {loginType == "login" ? (
                <button
                  onClick={(e) => {
                    handleLogin(e);
                  }}
                  className="active btn btn-block  w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    handleSignup(e);
                  }}
                  className="active btn btn-block w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Sign Up
                </button>
              )}

              {error && (
                <div className="error text-red-500 text-sm">{error}</div>
              )}

              <p
                onClick={(e) => {
                  handlePasswordReset(e);
                }}
                className="forgot-password text-sm text-blue-500 hover:underline cursor-pointer"
              >
                Forgot Password?
              </p>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

export default Login;
