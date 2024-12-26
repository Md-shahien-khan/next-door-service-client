import React from 'react';
import aboutImg from '../../assets/images/gardener.jpg'


const About = () => {
    return (
        <div>
            {/* About*/}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 mt-10 lg:mt-20'>
                <div className='md:w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-12'>
                    <div>
                        <img className='' src={aboutImg} alt="" />
                    </div>
                    <div className=''>
                        <h2 className='text-4xl font-semibold mb-4 md:w-4/5'>From Repairs to Renovations, We have Got You Covered</h2>
                        <p className='md:w-3/4 text-sm mb-8'>Whether you need plumbing, electrical work, cleaning, repairs, hair cut or even renovation, our team of experienced professionals is here to ensure your home is in expert hands. With a focus on reliability, efficiency, and customer satisfaction, we make it easier than ever to keep your home running smoothly. No job is too big or small—just sit back, relax, and let us handle all your home service needs with care and precision.</p>
                        <button className='btn bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-700 dark:to-gray-800 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-6 rounded-full text-lg hover:transition duration-300 ease-out'>View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;