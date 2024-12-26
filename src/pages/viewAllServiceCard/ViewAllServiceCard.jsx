// import React from 'react';
// import { FaLocationDot } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';

// const ViewAllServiceCard = ({service}) => {
//     const {_id, image_url,  service_name, price, service_area, description, rating, reviews_count, service_type} = service;
//     return (
//         <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
//         <img className="w-full h-48 object-cover" src={image_url} alt="Service Image" />
//         <div className="p-4">
//             <h2 className="text-2xl font-semibold text-gray-800">{service_name}</h2>
//             <div className="flex flex-col mt-2">
//             <span className="font-semibold text-gray-800">Price : {price}</span>
//             <div className='flex items-center gap-x-2 mt-1'>
//             <FaLocationDot />
//             <span className="text-gray-500">Area : {service_area}</span>
//             </div>
//             </div>
//         </div>
//         <div className="px-4 pb-4">
//             <Link to={`/services/${_id}`}>
//                 <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-700 dark:to-gray-800 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-6 rounded-full text-lg hover:transition duration-300 ease-out">
//                 View Details
//                 </button>
//             </Link>
//         </div>
//         </div>
//     );
// };

// export default ViewAllServiceCard;

import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ViewAllServiceCard = ({ service }) => {
  const { _id, image_url, service_name, price, service_area, description, rating, reviews_count, service_type } = service;

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white transform transition duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
      {/* Service Image */}
      <img className="w-full h-48 object-cover transform transition duration-300 ease-out hover:scale-110" src={image_url} alt="Service Image" />
      
      <div className="p-6">
        {/* Service Name */}
        <h2 className="text-3xl font-semibold text-gray-800 truncate">{service_name}</h2>
        
        {/* Price and Location */}
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold text-blue-600">Price: <span className="text-gray-800">{price}</span></span>
          <div className="flex items-center gap-x-2 mt-2">
            <FaLocationDot className="text-blue-500" />
            <span className="text-gray-600">Area: {service_area}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-4">{description?.slice(0, 100)}...</p>

        {/* Rating */}
        <div className="flex items-center mt-3">
          <span className="text-yellow-500">{'★'.repeat(rating)}</span>
          <span className="ml-2 text-gray-400">({reviews_count} reviews)</span>
        </div>
      </div>

      {/* View Details Button */}
      <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-pink-500 hover:to-orange-500">
        <Link to={`/services/${_id}`}>
          <button className="w-full text-white py-2 px-6 rounded-full text-lg hover:scale-105 transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewAllServiceCard;
