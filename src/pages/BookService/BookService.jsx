import React, { useContext, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const BookService = ({ singleService, onClose }) => {
    const { _id, service_name, image_url, price, service_provider_email, service_provider_location, service_provider_name } = singleService;
    const {user} = useAuth();
    // console.log(_id, user);
    const navigate = useNavigate();

    // You can add state to manage editable fields like Service Taking Date and Special Instructions
    const [serviceTakingDate, setServiceTakingDate] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');

    const handleSubmitBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceId= form.serviceId.value;
        const serviceName = form.serviceName.value;
        const providerEmail = form.providerEmail.value;
        const providerName = form.providerName.value;
        const currentUserEmail = form.currentUserEmail.value;
        const currentUserName = form.currentUserName.value;
        const serviceDate = form.serviceDate.value;
        const specialInstructions = form.specialInstructions.value;
        const price = form.price.value;

        console.log(serviceId, serviceName, providerEmail, providerName, currentUserEmail, serviceDate,specialInstructions,price);

        const serviceApplication ={
            service_Id : _id,
            user_email : user.email,
            serviceName,
            currentUserEmail,
            currentUserName,
            serviceDate,
            specialInstructions,
            price
        };

        axios.post('http://localhost:5000/service-bookings', serviceApplication, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            const data = response.data;
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Purchased Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/bookedServices');
            }
        })
        .catch(error => {
            console.error("Error:", error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "An error occurred",
                showConfirmButton: false,
                timer: 1500
            });
        });
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <h2 className="text-xl font-semibold mb-4">Book Service</h2>
                <form onSubmit={handleSubmitBooking}>
                    {/* Service ID (Not editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="service-id" className="font-semibold text-gray-700 w-1/3">Service ID</label>
                        <input type="text" name="serviceId" value={_id} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" disabled />
                    </div>

                    {/* Service Name (Not editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="service-name" className="font-semibold text-gray-700 w-1/3">Service Name</label>
                        <input type="text" name="serviceName" value={service_name} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" disabled />
                    </div>

                    {/* Service Image (Not editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="service-image" className="font-semibold text-gray-700 w-1/3">Service Image</label>
                        <img src={image_url} alt="Service" className="w-2/3 h-20 object-cover rounded-md" />
                    </div>

                    {/* Provider Email (Not editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="provider-email" className="font-semibold text-gray-700 w-1/3">Provider Email</label>
                        <input type="email" name="providerEmail" value={service_provider_email} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" disabled />
                    </div>

                    {/* Provider Name (Not editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="provider-name" className="font-semibold text-gray-700 w-1/3">Provider Name</label>
                        <input type="text" name="providerName" value={service_provider_name} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" disabled />
                    </div>

                    {/* Provider Location (Not editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="provider-name" className="font-semibold text-gray-700 w-1/3">Provider Location</label>
                        <input type="text" name="providerName" value={service_provider_location} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" disabled />
                    </div>

                    {/* Current User Email (Not editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="current-user-email" className="font-semibold text-gray-700 w-1/3">Current User Email</label>
                        <input type="email" name="currentUserEmail" value={user.email} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" disabled />
                    </div>

                    {/* Current User Name (Not editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="current-user-name" className="font-semibold text-gray-700 w-1/3">Current User Name</label>
                        <input type="text" name="currentUserName" value={user?.displayName} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" disabled />
                    </div>

                    {/* Service Taking Date (Editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="service-taking-date" className="font-semibold text-gray-700 w-1/3">Service Taking Date</label>
                        <input type="date" name="serviceDate" value={serviceTakingDate} onChange={(e) => setServiceTakingDate(e.target.value)} className="w-2/3 p-2 border border-gray-300 rounded-md" />
                    </div>

                    {/* Special Instructions (Editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="special-instructions" className="font-semibold text-gray-700 w-1/3">Special Instructions</label>
                        <textarea name="specialInstructions" value={specialInstructions} onChange={(e) => setSpecialInstructions(e.target.value)} rows="3" className="w-2/3 p-2 border border-gray-300 rounded-md"></textarea>
                    </div>

                    {/* Price (Not editable) */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="price" className="font-semibold text-gray-700 w-1/3">Price</label>
                        <input type="text" name="price" value={price} className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500" disabled />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-4">
                        <button type="submit" className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-pink-500">
                            Purchase
                        </button>
                    </div>
                </form>
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-0 right-0 p-2 text-white bg-gray-600 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                    <span className="text-xl">×</span>
                </button>
            </div>
        </div>
    );
};

export default BookService;
