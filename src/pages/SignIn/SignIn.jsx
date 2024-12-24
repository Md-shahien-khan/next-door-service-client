import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import auth from '../../firebase/firebase.init';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
    // getting signInUser from authProvider
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate= useNavigate();
    const from = location.state || '/';

    // Sign In
    const handleSignIn = e => {
        
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        // Sign In Functionality
        signInUser(email, password)
            .then(result => {
                console.log('Sign In : ', result.user);
                navigate(from)
            })
            .catch(error => {
                console.log(error);
        });
    };

    // Handle Google login
    const handleSignInGoogle = () => {
        const provider = new GoogleAuthProvider(); 
        signInWithPopup(auth, provider)
            .then(result => {
            console.log('User info:', result.user);
            navigate(from)
            })
            .catch(error => {
            console.log('Google login error:', error.message);
        });
    };

    return (
        <div className="flex justify-center items-center lg:min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h2>

        <form onSubmit={handleSignIn}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
            />
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
            Login
            </button>
            <button onClick={handleSignInGoogle} className="mt-5 w-full py-2 px-4 bg-slate-700 text-white font-semibold rounded-md shadow-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-center gap-3 text-center"><FaGoogle /> Login with Google
            </button>
          </div>
          <p className="p-4">
            Need to open an account? Please <Link to="/register" className="text-green-800 font-bold">Register</Link></p>
        </form>
      </div>
    </div>
    );
};

export default SignIn;