import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import img from '../../assets/images/banner-home.jpg'
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateService = () => {
    const coffee = useLoaderData();
    const {user} = useAuth();
    const navigate = useNavigate();
    const {_id, service_name, image_url, price, description, service_provider_email, rating, reviews_count, service_provider_location, service_provider_name, service_provider_photo, service_type} = coffee;
    
        const handleUpdateService = e =>{
            e.preventDefault();
            const formData = new FormData(e.target)
            const initialData = Object.fromEntries(formData.entries());
            // console.log(initialData);
            const updateServiceData = initialData;
            console.log(updateServiceData);



            // update
            axios.put(`http://localhost:5000/services/${_id}`, updateServiceData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                const data = response.data;
                if (data.modifiedCount > 0) {
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Service Updated has been successful",
                    showConfirmButton: false,
                    timer: 1500
                    });
                    navigate('/');
                    }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                position: "top-end",
                icon: "error",
                title: "An error occurred",
                showConfirmButton: false,
                timer: 1500
                });
            });
        }

    return (
        <div className='bg-cover bg-center bg-fixed text-center py-20 p-6 lg:h-[80vh] flex justify-center items-center lg:min-h-screen' style={{backgroundImage : `url(${img})`}}>
                    <div className="container mx-auto text-black bg-slate-600 p-8 z-0 lg:w-1/2 backdrop-filter backdrop-blur-lg bg-opacity-10  rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center mb-6 text-green-950">Update Service</h2>
                        <form onSubmit={handleUpdateService}>
                            {/* Service Name*/}
                            <div className="flex items-center mb-4">
                                <label htmlFor="service-name" className="font-semibold text-gray-700 w-1/3">Service Name</label>
                                <input type="text" name="service_name" defaultValue={service_name} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"/>
                            </div>
                            {/* Service Image  */}
                            <div className="flex items-center mb-4">
                                <label htmlFor="service-image" className="font-semibold text-gray-700 w-1/3">Service Image URL</label>
                                <input type="url" name="image_url" defaultValue={image_url} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                            </div>
                            {/* price  */}
                            <div className="flex items-center mb-4">
                                <label htmlFor="servicePrice-image" className="font-semibold text-gray-700 w-1/3">Price</label>
                                <input type="text" name="price" defaultValue={price} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                            </div>
                            {/* description  */}
                            <div className="flex items-center mb-4">
                                <label htmlFor="description"  className="font-semibold text-gray-700 w-1/3">Description</label>
                                <textarea name="description" defaultValue={description} id=""></textarea>
                            </div>
                            {/* rating */}
                            <div className="flex items-center mb-4">
                                <label htmlFor="rating" className="font-semibold text-gray-700 w-1/3">Rating</label>
                                <input type="text" name="rating" defaultValue={rating}  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                            </div>
                            {/* reviewCount */}
                            <div className="flex items-center mb-4">
                                <label htmlFor="reviewCount" className="font-semibold text-gray-700 w-1/3">Review Count</label>
                                <input type="text" name="reviews_count" defaultValue={reviews_count} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                            </div>
                            {/* service type */}
                            <div className="flex items-center mb-4">
                                <label htmlFor="ServiceType" className="font-semibold text-gray-700 w-1/3">Service Type</label>
                                <input type="text" name="service_type" defaultValue={service_type} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                            </div>
                            {/* provider email */}
                            <div className="flex items-center mb-4">
                                <label htmlFor="providerEmail" className="font-semibold text-gray-700 w-1/3">Provider Email</label>
                                <input type='email'  name="service_provider_email" value={service_provider_email} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                            </div>
                            {/* provider name */}
                            <div className="flex items-center mb-4">
                                <label htmlFor="providerName" className="font-semibold text-gray-700 w-1/3">Provider Name</label>
                                <input type="text" name="service_provider_name" value={service_provider_name} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                            </div>
                            {/* provider location */}
                            <div className="flex items-center mb-4">
                                <label htmlFor="providerLocation" className="font-semibold text-gray-700 w-1/3">Provider Location</label>
                                <input type="text" name="service_provider_location" defaultValue={service_provider_location} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                            </div>
                            {/* provider photo */}
                            <div className="flex items-center mb-4">
                                <label htmlFor="providerPhoto" className="font-semibold text-gray-700 w-1/3">Provider Photo URL</label>
                                <input type="url" value={service_provider_photo} name="service_provider_photo"  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                            </div>
                            {/* Submit Button */}
                            <div className="flex justify-center mt-4">
                                <button type="submit" className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-pink-500">
                                    Post Service
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
    );
};

export default UpdateService;