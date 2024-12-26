import React from 'react';
import Marquee from 'react-fast-marquee';

const DealsNews = () => {
    return (
        <div className="mb-10 bg-gradient-to-r from-purple-600 to-blue-500 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-center mb-8 lg:text-5xl md:text-4xl text-2xl font-semibold text-white mt-4 md:mt-10 hover:text-yellow-400 transition duration-300">
                Special Deals
            </h2>
            <Marquee pauseOnHover={true} speed={60}>
                <div className="flex gap-12">
                    <span className="mr-12 text-white text-lg font-medium hover:text-yellow-400 transition duration-300">🎉 New Year Sale! Get 20% Off All Home Repairs! 🎉</span>
                    <span className="mr-12 text-white text-lg font-medium hover:text-yellow-400 transition duration-300">🎉 New Year Sale! Get 10% Off Cleaning Services! 🎉</span>
                    <span className="mr-12 text-white text-lg font-medium hover:text-yellow-400 transition duration-300">🎉 New Year Sale! 25% Off Plumbing Services! 🎉</span>
                    <span className="mr-12 text-white text-lg font-medium hover:text-yellow-400 transition duration-300">🎉 New Year Sale! Free Electrical Inspection with Every Service! 🎉</span>
                    <span className="mr-12 text-white text-lg font-medium hover:text-yellow-400 transition duration-300">🎉 New Year Sale! 15% Off Home Renovations! 🎉</span>
                </div>
            </Marquee>
        </div>
    );
};

export default DealsNews;
