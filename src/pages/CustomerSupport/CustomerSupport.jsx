import React from 'react';
import customerService1 from '../../assets/images/cs1.jpg'
import customerService2 from '../../assets/images/cs2.jpg'
import { easeInOut, motion } from "framer-motion";
import { Link } from 'react-router-dom';

const CustomerSupport = () => {
    return (
        <div className="hero bg-base-200 min-h-96 mt-10 md:mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='flex-1'>
                <motion.img 
                animate={{ y : [50, 100, 50]}}
                transition={{duration : 10, repeat : Infinity}}
                className='max-w-sm w-72 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400'
                src={customerService1} />
                <motion.img 
                animate={{ x : [50, 50, 50]}}
                transition={{duration : 10, repeat : Infinity}}
                className='max-w-sm w-72 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400'
                src={customerService2} />
            </div>
            <div className='flex-1'>
            <motion.h1
                animate={{ x: 30 }}
                transition={{duration : 2, delay : 4, ease : easeInOut, repeat : Infinity}}
                className="text-3xl md:text-5xl  font-bold">We <motion.span
                animate = {{color : ['red', 'purple']}}
                transition={{duration : 1.5, repeat : Infinity}}
                >We are always</motion.span> here for you!</motion.h1>
            <p className="py-6 text-purple-800">
            Our online customer service is available 24/7, ensuring that no matter what time of day or night you need assistance, we're here to help. Whether you have a simple inquiry, a technical issue, or need support with a more complex matter, our dedicated team of professionals is ready and eager to provide solutions.  Our goal is to provide seamless, round-the-clock support, making sure you have access to the help you need whenever you need it, no matter where you are. With our 24/7 online customer service, you can rest assured that your concerns will always be addressed quickly and efficiently, with the same high level of care and expertise you'd expect from our team.
            </p>
            <Link to='/viewAllService'>
            <div className='text-center'>
            <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white">Check all service</button>
            </div>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default CustomerSupport;