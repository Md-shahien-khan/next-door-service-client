import React from 'react';
import { FaStar } from 'react-icons/fa'; // Importing the star icon from react-icons

const ReviewsClients = () => {
    const reviews = [
        {
            name: "John Doe",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            review: "Next Door Service helped me with my plumbing issues at home. They were fast, professional, and very efficient. Highly recommend!",
            rating: 5
        },
        {
            name: "Jane Smith",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            review: "I hired Next Door Service for an electrical inspection. They were thorough and friendly, and their work was top-notch!",
            rating: 4
        },
        {
            name: "Mike Johnson",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            review: "I needed help with a home renovation, and their team was outstanding. They went above and beyond, and I couldn’t be happier with the results.",
            rating: 5
        },
        {
            name: "Sarah Williams",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            review: "Next Door Service made cleaning my entire house a breeze! They were very professional and thorough. Definitely worth every penny!",
            rating: 4
        },
        {
            name: "Chris Brown",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
            review: "They helped me with van rental, and everything went smoothly. Excellent customer service and easy process!",
            rating: 5
        },
        {
            name: "Anna Johnson",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            review: "Great service for all kinds of repairs. I needed electrical and plumbing work done, and they were quick and efficient!",
            rating: 5
        }
    ];

    return (
        <div className="mb-16 mt-10 lg:mt-32">
            <h2 className="text-center text-4xl  font-semibold mb-20 text-purple-500">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-4">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                        <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-16 h-16 rounded-full border-4 border-blue-500 absolute top-[-30px] left-1/2 transform -translate-x-1/2"
                        />
                        <h3 className="text-xl font-semibold text-center mt-16">{review.name}</h3>
                        <div className="flex justify-center mt-2">
                            {/* Render stars based on the rating */}
                            {[...Array(5)].map((_, i) => (
                                <FaStar 
                                    key={i} 
                                    className={`text-yellow-500 ${i < review.rating ? 'filled' : 'empty'}`} 
                                    size={20}
                                />
                            ))}
                        </div>
                        <p className="text-center text-gray-600 mt-4 italic">" {review.review} "</p>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 rounded-lg"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsClients;
