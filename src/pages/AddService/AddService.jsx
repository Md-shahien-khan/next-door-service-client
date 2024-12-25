import React from 'react';
import imgAddService from '../../assets/images/addService.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const AddService = () => {
    const {user} = useAuth();
    return (
        <div className='bg-cover bg-center bg-fixed text-center py-20 p-6 lg:h-[80vh] flex justify-center items-center lg:min-h-screen' style={{backgroundImage : `url(${imgAddService})`}}>
            <div className="container mx-auto text-black bg-slate-600 p-8 z-0 lg:w-1/2 backdrop-filter backdrop-blur-lg bg-opacity-10  rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-green-950">Add Service</h2>
                <form>
                    {/* Service Name*/}
                    <div className="flex items-center mb-4">
                        <label htmlFor="service-name" className="font-semibold text-gray-700 w-1/3">Service Name</label>
                        <input type="text" name="serviceName" className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"/>
                    </div>
                    {/* Service Image  */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="service-image" className="font-semibold text-gray-700 w-1/3">Service Image URL</label>
                        <input type="url" name="photoURL"  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                    </div>
                    {/* price  */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="servipricece-image" className="font-semibold text-gray-700 w-1/3">Price</label>
                        <input type="text" name="price"  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                    </div>
                    {/* description  */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="description" className="font-semibold text-gray-700 w-1/3">Description</label>
                        <textarea name="description" id=""></textarea>
                    </div>
                    {/* rating */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="rating" className="font-semibold text-gray-700 w-1/3">Rating</label>
                        <input type="text" name="rating"  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                    </div>
                    {/* reviewCount */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="reviewCount" className="font-semibold text-gray-700 w-1/3">Review Count</label>
                        <input type="text" name="reviewCount"  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                    </div>
                    {/* service type */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="ServiceType" className="font-semibold text-gray-700 w-1/3">Service Type</label>
                        <input type="text" name="serviceType"  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                    </div>
                    {/* provider image */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="ServiceType" className="font-semibold text-gray-700 w-1/3">Service Type</label>
                        <input type="text" name="serviceType"  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                    </div>
                    {/* provider image */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="ServiceType" className="font-semibold text-gray-700 w-1/3">Service Type</label>
                        <input type="text" name="serviceType"  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                    </div>
                    {/* provider name */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="ServiceType" className="font-semibold text-gray-700 w-1/3">Service Type</label>
                        <input type="text" name="serviceType"  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
                    </div>
                    {/* provider name */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="ServiceType" className="font-semibold text-gray-700 w-1/3">Service Type</label>
                        <input type="text" name="serviceType"  className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" />
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

export default AddService;