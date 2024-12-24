// import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import { FaLocationDot } from "react-icons/fa6";
// import { GiMoneyStack } from "react-icons/gi";
// import { FcRating } from "react-icons/fc";
// import { MdHomeRepairService } from "react-icons/md";

// const ServiceDetails = () => {
//     const singleService = useLoaderData();
//     const {_id, image_url,  service_name, price, service_area, description, rating, reviews_count, service_type} = singleService;
//     return (
//         <div className="bg-cover bg-center bg-fixed text-center py-20 flex p-6 justify-center items-center lg:h-[80vh]" style={{backgroundImage : `url(${image_url})`}}>
//                 {/* banner info */}
//                 <div className='container mx-auto text-white bg-slate-600 p-20 z-0 lg:w-1/2 backdrop-filter backdrop-blur-lg bg-opacity-20'>
//                 <h1 className='lg:text-5xl md:text-4xl text-2xl font-semibold mb-4'>{service_name}</h1>
//                 <p className=''>{description}</p>
//                 <div className='flex items-center justify-center gap-x-2'>
//                     <FaLocationDot className='hidden md:block text-blue-950' />
//                     <p className='mt-1'>Service Area : {service_area}</p>
//                 </div>
//                 <div className='flex items-center justify-center gap-x-2'>
//                     <FcRating />
//                     <p className='mt-1'>Rating : {rating}</p>
//                 </div>
//                 <div className='flex items-center justify-center gap-x-2'>
//                 <FcRating />
//                     <p className='mt-1'>Review Count : {reviews_count}</p>
//                 </div>
//                 <div className='flex items-center justify-center gap-x-2'>
//                 <MdHomeRepairService className='text-blue-950'/>
//                     <p className='mt-1'>Service Type : {service_type}</p>
//                 </div>
//                 <div className='flex items-center justify-center gap-x-2'>
//                     <GiMoneyStack className='text-blue-950'/>
//                     <p className='mt-1 mb-4'>Price : {price}</p>
//                 </div>
//                 <Link to={`/bookService/${_id}`}>
//                     <button className='btn bg-orange-500 hover:bg-pink-500 text-white py-2 px-6 rounded-full text-lg hover:transition duration-300 ease-out'>Book Now</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default ServiceDetails;


import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { FcRating } from "react-icons/fc";
import { MdHomeRepairService } from "react-icons/md";
import BookService from '../BookService/BookService';  // Ensure correct path for the modal component
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const singleService = useLoaderData();
    const { _id, image_url, service_name, price, service_area, description, rating, reviews_count, service_type } = singleService;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="bg-cover bg-center bg-fixed text-center py-20 flex p-6 justify-center items-center lg:h-[80vh]" style={{ backgroundImage: `url(${image_url})` }}>
            <div className="container mx-auto text-white bg-slate-600 p-20 z-0 lg:w-1/2 backdrop-filter backdrop-blur-lg bg-opacity-20">
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold mb-4">{service_name}</h1>
                <p>{description}</p>
                <div className="flex items-center justify-center gap-x-2">
                    <FaLocationDot className="hidden md:block text-blue-950" />
                    <p className="mt-1">Service Area : {service_area}</p>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    <FcRating />
                    <p className="mt-1">Rating : {rating}</p>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    <FcRating />
                    <p className="mt-1">Review Count : {reviews_count}</p>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    <MdHomeRepairService className="text-blue-950" />
                    <p className="mt-1">Service Type : {service_type}</p>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    <GiMoneyStack className="text-blue-950" />
                    <p className="mt-1 mb-4">Price : {price}</p>
                </div>
                <button
                    onClick={handleOpenModal}
                    className="btn bg-orange-500 hover:bg-pink-500 text-white py-2 px-6 rounded-full text-lg hover:transition duration-300 ease-out">
                    Book Now
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <BookService
                    singleService={singleService}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ServiceDetails;

