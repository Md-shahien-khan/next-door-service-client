import React from 'react';
import img from '../../assets/images/banner-home.jpg'
const Banner = () => {
    return (
        <div className="bg-cover bg-center bg-fixed text-center py-20 flex p-6 justify-center items-center lg:h-[80vh]" style={{backgroundImage : `url(${img})`}}>
            {/* banner info */}
            <div className='container mx-auto text-black bg-slate-600 p-20 z-0 lg:w-1/2 backdrop-filter backdrop-blur-lg bg-opacity-20'>
                <h1 className='lg:text-5xl md:text-4xl text-2xl font-semibold mb-4'>Bringing Expert Home Services Right to Your Doorstep</h1>
                <p className='mb-6 lg:p-5'>At Next-Door-Service, we take the hassle out of home services by bringing top-quality services directly to your door. </p>
                {/* <a href="#" className='bg-orange-500 hover:bg-pink-500 text-white py-2 px-6 rounded-full text-lg hover:transition duration-300 ease-out'>View More</a> */}
                <a href="#" className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-700 dark:to-gray-800 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-6 rounded-full text-lg hover:transition duration-300 ease-out">
    View More
</a>
            </div>
        </div>
    );
};

export default Banner;