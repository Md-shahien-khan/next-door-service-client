import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ViewAllServiceCard = ({service}) => {
    const {_id, image_url,  service_name, price, service_area, description, rating, reviews_count, service_type} = service;
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={image_url} alt="Service Image" />
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800">{service_name}</h2>
            <div className="flex flex-col mt-2">
            <span className="font-semibold text-gray-800">Price : {price}</span>
            <div className='flex items-center gap-x-2 mt-1'>
            <FaLocationDot />
            <span className="text-gray-500">Area : {service_area}</span>
            </div>
            </div>
        </div>
        <div className="px-4 pb-4">
            <Link to={`/services/${_id}`}>
                <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                View Details
                </button>
            </Link>
        </div>
        </div>
    );
};

export default ViewAllServiceCard;