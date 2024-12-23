// Register Form
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {

  const {createUser} = useContext(AuthContext);
  // const [success, setSuccess] = useState(false);
  
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);


    createUser(email, password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error.message)
    })

    // if (password.length < 6) {
    //   // setErrorMessage('Password should be at least 6 characters');
    //   return;
    // }
      
    // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    //   if (!passwordPattern.test(password)) {
    //       // setErrorMessage('Password must contain at least one uppercase and one lowercase letter');
    //      return;
    //   }
  };
  
  return (
    <div className="flex justify-center items-center lg:min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h2>

        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>

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

          {/* Photo URL */}
          <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="url"
              id="photo"
              name="photo"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
            Register
            </button>
          </div>
          <p className="p-4">
            Already have an account? Please <Link to="/signin" className="text-green-800 font-bold">Sign In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
