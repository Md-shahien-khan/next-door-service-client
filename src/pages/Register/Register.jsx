// Register Form
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import img from '../../assets/images/gardener.jpg'


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

  };
  
  return (
    <div className="bg-cover bg-center bg-fixed text-center py-20 p-6 lg:h-[80vh] flex justify-center items-center lg:min-h-screen" style={{backgroundImage : `url(${img})`}}>
      <div className="container mx-auto text-black bg-slate-600 p-8 z-0 lg:w-1/2 backdrop-filter backdrop-blur-lg bg-opacity-10  rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl md:text-4xl text-purple-800 font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-purple-800">Name</label>
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
            <label htmlFor="email" className="block text-sm font-medium text-purple-800">Email</label>
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
            <label htmlFor="password" className="block text-sm font-medium text-purple-800">Password</label>
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
            <label htmlFor="photo" className="block text-sm font-medium text-purple-800">Photo URL</label>
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
          <p className="p-4 text-purple-300 font-bold">
            Already have an account? Please <Link to="/signin" className="text-green-500 font-bold">Sign In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
